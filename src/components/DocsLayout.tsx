import DocsSidebar from '@/components/DocsSidebar'

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
          <aside className="w-full lg:w-64 lg:shrink-0 mb-8 lg:mb-0 lg:sticky lg:top-24 lg:self-start">
            <DocsSidebar />
          </aside>
          <main className="flex-1">
            <div className="max-w-3xl space-y-8 lg:ml-4">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}


