export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-16 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} CleanUp Community. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
