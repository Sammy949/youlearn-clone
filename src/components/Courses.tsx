const CourseCard = ({
  cardTitle,
  cardDescription,
}: {
  cardTitle: string;
  cardDescription: string;
}) => {
  return (
    <div className="gap-2 flex flex-col">
      <div className="w-60 h-40 rounded-md bg-slate-300/10" />
      <div>
        <h2 className="font-semibold">{cardTitle}</h2>
        <p className="text-gray-400">{cardDescription}</p>
      </div>
    </div>
  );
};

const courseList = [
  {
    id: 1,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 2,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 3,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 4,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 5,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 6,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 7,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
  {
    id: 8,
    courseTitle: "Course Title",
    courseDescription: "Course Description",
  },
];
const Courses = () => {
  return (
    <section className="flex items-center justify-center flex-wrap my-10 mx-auto gap-x-3 gap-y-5 max-w-[1000px]">
      {courseList.map((course) => (
        <div key={course.id}>
          <CourseCard
            cardTitle={course.courseTitle}
            cardDescription={course.courseDescription}
          />
        </div>
      ))}
    </section>
  );
};
export default Courses;
