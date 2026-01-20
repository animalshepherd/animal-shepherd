import { useTranslations } from "next-intl";
import { Button } from "./components/ui/Button";

export default function NotFound() {
  const t = useTranslations("404");

  return (
    <main className="bg-primary flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-8xl font-black text-secondary mb-2">404</h1>
      <h2 className="text-3xl font-bold text-secondary-dark mb-4">
        {t("title")}
      </h2>
      <p className="text-secondary/70 max-w-md mb-10 leading-relaxed">
        {t("description")}
      </p>
      <Button href="/" variant="secondary" size="md">
        {t("button")}
      </Button>
    </main>
  );
}
