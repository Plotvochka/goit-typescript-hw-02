import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (query: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("query") as HTMLInputElement | null;

    if (!input) {
      toast.error("Input field not found!");
      return;
    }

    const query = input.value.trim();

    if (!query) {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.formField}
        />
        <button type="submit" className={css.searchIcon}>
          Search
        </button>
      </form>
    </header>
  );
}
