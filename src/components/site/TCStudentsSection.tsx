import { useEffect, useState } from "react";
import { Section, SectionTitle } from "@/components/site/Page";

type YearItem = {
  year: string;
};

type Student = {
  admission_no: string;
  student_name: string;
  DOB: string;
  father_name: string;
  last_class: string;
  tc_no: string;
  data_of_issue: string;
  year: string;
};

export default function TCStudentsSection() {
  const [years, setYears] = useState<YearItem[]>([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  // Fetch available years
  useEffect(() => {
    fetch("https://risenshineps.com/api/tc/get_tc_year.php")
      .then((res) => res.json())
      .then((data: YearItem[]) => {
        setYears(data);

        // Auto select latest year
        if (data.length > 0) {
          setSelectedYear(data[0].year);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch students for selected year
  useEffect(() => {
    if (!selectedYear) return;

    setLoading(true);

    fetch(
      `https://risenshineps.com/api/tc/get_tc_student.php?year=${selectedYear}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.data || []);
        setVisibleCount(5); // reset on year change
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [selectedYear]);

  return (
    <Section className="!pt-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SectionTitle
          eyebrow="TC Students"
          title="TC Student Records"
        />

        {/* Year Select */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="h-11 rounded-xl border border-border bg-background px-4 text-sm outline-none"
        >
          {years.map((item) => (
            <option key={item.year} value={item.year}>
              {item.year}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted">
            <tr>
              <th className="text-left p-4">Student Name</th>
              <th className="text-left p-4">Father Name</th>
              <th className="text-left p-4">DOB</th>
              <th className="text-left p-4">Last Class</th>
              <th className="text-left p-4">TC No</th>
              <th className="text-left p-4">Date of Issue</th>
              <th className="text-left p-4">Admission No</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3} className="p-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : students.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-6 text-center">
                  No students found
                </td>
              </tr>
            ) : (
              students
                .slice(0, visibleCount)
                .map((student, index) => (
                  <tr
                    key={index}
                    className="border-t border-border"
                  >
                    <td className="p-4">
                      {student.student_name}
                    </td>

                    <td className="p-4">
                      {student.father_name || "-"}
                    </td>

                    <td className="p-4">
                      {student.DOB}
                    </td>

                    <td className="p-4">
                      {student.last_class}
                    </td>

                    <td className="p-4">
                      {student.tc_no}
                    </td>

                    <td className="p-4">
                      {student.data_of_issue}
                    </td>

                    <td className="p-4">
                      {student.admission_no}
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      {!loading && students.length > 0 && (
        <div className="mt-5 flex justify-center gap-3">
          {students.length > visibleCount && (
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 5)
              }
              className="h-11 px-6 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Show More
            </button>
          )}

          {visibleCount > 5 && (
            <button
              onClick={() => setVisibleCount(5)}
              className="h-11 px-6 rounded-xl border border-border text-sm hover:bg-muted transition"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </Section>
  );
}