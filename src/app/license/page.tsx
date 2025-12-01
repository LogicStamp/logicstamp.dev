import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'MIT License | LogicStamp',
  description: 'MIT License for LogicStamp - Copyright (c) 2025 LogicStamp Contributors',
}

export default function LicensePage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 mt-8 md:mt-12">
        <AnimatedSection direction="up" delay={0}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              MIT License
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Copyright (c) 2025 LogicStamp Contributors
            </p>
            
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <Footer />
    </main>
  )
}















