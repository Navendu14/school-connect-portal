import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

type BookEntry = {
  class_name: string;
  subject: string;
  book_name: string;
  rate: number | null;
};

type ClassItem = {
  class_name: string;
};

type BooksResponse = {
  success: boolean;
  data: BookEntry[];
};

type Props = {
  classApiUrl: string;
  booksApiUrl: string;
};

export default function BookPriceList({
  classApiUrl,
  booksApiUrl,
}: Props) {
  const [classes, setClasses] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("");

  const [books, setBooks] = useState<BookEntry[]>([]);

  const [loadingClasses, setLoadingClasses] = useState(true);
  const [loadingBooks, setLoadingBooks] = useState(false);

  const [error, setError] = useState(false);

  // Fetch Classes
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoadingClasses(true);

        const res = await fetch(classApiUrl);

        if (!res.ok) {
          throw new Error("Failed to fetch classes");
        }

        const data: ClassItem[] = await res.json();

        const classNames = data.map((item) => item.class_name);

        setClasses(classNames);

        // Select first class automatically
        if (classNames.length > 0) {
          setSelectedClass(classNames[0]);
        }

        setLoadingClasses(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoadingClasses(false);
      }
    };

    fetchClasses();
  }, [classApiUrl]);

  // Fetch Books
  useEffect(() => {
    if (!selectedClass) return;

    const fetchBooks = async () => {
      try {
        setLoadingBooks(true);

        const res = await fetch(
          `${booksApiUrl}?class=${encodeURIComponent(selectedClass)}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }

        const data: BooksResponse = await res.json();

        setBooks(data.data || []);

        setLoadingBooks(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoadingBooks(false);
      }
    };

    fetchBooks();
  }, [selectedClass, booksApiUrl]);

  if (loadingClasses) {
    return (
      <div className="flex items-center justify-center gap-2 py-10 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span className="text-sm">Loading books...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
        Unable to load books at this time.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Class Buttons */}
      <div className="flex flex-wrap gap-1.5">
        {classes.map((className) => (
          <button
            key={className}
            onClick={() => setSelectedClass(className)}
            className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
              selectedClass === className
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/60 text-muted-foreground hover:bg-secondary"
            }`}
          >
            {className}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full text-xs">
          <thead className="bg-secondary/60">
            <tr>
              <th className="text-left p-2.5 font-semibold">#</th>
              <th className="text-left p-2.5 font-semibold">Subject</th>
              <th className="text-left p-2.5 font-semibold">Book</th>
              <th className="text-left p-2.5 font-semibold">Rate</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {loadingBooks ? (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-muted-foreground"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading books...
                  </div>
                </td>
              </tr>
            ) : books.length > 0 ? (
              books.map((book, index) => (
                <tr key={index}>
                  <td className="p-2.5 text-muted-foreground">
                    {index + 1}
                  </td>

                  <td className="p-2.5 font-medium">
                    {book.subject}
                  </td>

                  <td className="p-2.5 text-muted-foreground">
                    {book.book_name}
                  </td>

                  <td className="p-2.5 text-muted-foreground">
                    {book.rate != null ? `₹${book.rate}` : "—"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="p-6 text-center text-muted-foreground"
                >
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}