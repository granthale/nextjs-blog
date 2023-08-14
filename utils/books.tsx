import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHTML from "./markdownToHTML";

const booksDirectory = path.join(process.cwd(), "books");

export function getSortedBooksData() {
  // Get file names under /books
  const fileNames = fs
    .readdirSync(booksDirectory)
    .filter((fileName) => fileName.endsWith(".md"));
  const allBooksData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(booksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the book metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        title: string;
        author: string;
        summary: string;
        rating: string;
      }),
    };
  });
  // Sort books by rating
  return allBooksData.sort((a, b) => {
    if (a.rating > b.rating) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllBookIds() {
  const fileNames = fs.readdirSync(booksDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getBookData(id: string) {
  const fullPath = path.join(booksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the book metadata section
  const matterResult = matter(fileContents);

  // Use helper function to turn markdown into HTML
  const contentHTML = await markdownToHTML(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHTML,
    ...(matterResult.data as {
      title: string;
      author: string;
      summary: string;
      rating: string;
    }),
  };
}
