import { data } from "../data/diary";
import { Link } from "../components/element/link";

function Diary() {
  return (
    <>
      <div className="diary">
        {data.blog.map((entry) => (
          <Link
            text={entry.title}
            to={"/diary/entry/" + entry.id}
            key={entry.id}
          />
        ))}
      </div>
    </>
  );
}
export { Diary };
