import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Jaspreet</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/000931438/cprg306-assignments">
          My GitHub Repo
        </Link>
      </p>
    </div>
  );
}
