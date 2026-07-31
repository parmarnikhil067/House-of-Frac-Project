import { useThemeStore } from '@/stores';

export default function Profile() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
                 bg-[var(--color-background)] text-[var(--color-text)] transition-colors"
    >
      <h1 className="text-3xl font-bold">Profile Page</h1>

      <button
        onClick={toggleTheme}
        className="mt-6 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-black font-semibold"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <a href="/">Home</a>
    </div>
  );
}
