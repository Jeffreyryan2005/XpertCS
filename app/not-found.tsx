export default function NotFound() {
  return (
    <div className="mx-auto max-w-screen-md px-6 py-24 text-center">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-muted-foreground">The page you’re looking for doesn’t exist or has moved.</p>
      <p className="mt-6">
        <a
          href="/"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
        >
          Go back home
        </a>
      </p>
    </div>
  )
}
