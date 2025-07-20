import AnimatedPage from './AnimatedPage';
import { ArrowLeft } from 'lucide-react';

const SkeletonElement = ({ className }: { className?: string }) => (
  <div className={`bg-gray-700/50 animate-pulse rounded ${className}`} />
);

const ProjectDetailSkeleton = () => {
  return (
    <AnimatedPage className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative container mx-auto px-4 py-16">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-12">
            <div className="inline-flex items-center gap-2 text-neon-cyan">
              <ArrowLeft size={20} />
              <span>Torna indietro</span>
            </div>
            
            <div className="flex gap-4">
              <SkeletonElement className="h-10 w-24" />
              <SkeletonElement className="h-10 w-24" />
            </div>
          </div>

          {/* Project Header */}
          <div className="text-center mb-16">
            <SkeletonElement className="h-6 w-32 mx-auto mb-6" />
            <SkeletonElement className="h-16 w-96 mx-auto mb-6" />
            <SkeletonElement className="h-6 w-3/4 mx-auto mb-4" />
            <SkeletonElement className="h-6 w-1/2 mx-auto mb-8" />

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <SkeletonElement className="h-10 w-24 rounded-full" />
              <SkeletonElement className="h-10 w-24 rounded-full" />
              <SkeletonElement className="h-10 w-24 rounded-full" />
            </div>

            {/* Repository Stats */}
            <div className="flex justify-center items-center gap-8 bg-dark-surface/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 max-w-md mx-auto">
              <SkeletonElement className="h-6 w-16" />
              <SkeletonElement className="h-6 w-16" />
              <SkeletonElement className="h-6 w-16" />
              <SkeletonElement className="h-6 w-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Screenshots Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <SkeletonElement className="h-10 w-64 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Colonna Sinistra: Bottoni */}
            <div className="space-y-6">
              <SkeletonElement className="h-8 w-48" />
              <div className="bg-dark-surface/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-4 rounded-xl border border-gray-700/50">
                      <div className="flex items-center gap-3 mb-2">
                        <SkeletonElement className="w-3 h-3 rounded-full" />
                        <SkeletonElement className="h-6 w-32" />
                      </div>
                      <SkeletonElement className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Colonna Destra: Screenshot */}
            <div className="space-y-6">
              <SkeletonElement className="h-8 w-32" />
              <div className="bg-dark-surface/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                <SkeletonElement className="aspect-[9/16] w-full rounded-xl mb-4" />
                <div className="text-center">
                  <SkeletonElement className="h-6 w-48 mx-auto mb-2" />
                  <SkeletonElement className="h-4 w-64 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <SkeletonElement className="h-10 w-80 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SkeletonElement className="h-48 rounded-2xl" />
            <SkeletonElement className="h-48 rounded-2xl" />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <SkeletonElement className="h-10 w-80 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <SkeletonElement className="w-3 h-3 rounded-full mt-2" />
                <SkeletonElement className="h-6 flex-1" />
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <SkeletonElement className="h-8 w-48 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-20 mx-auto" />
          </div>
          
          <div className="bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <div className="flex flex-wrap gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <SkeletonElement className="w-4 h-4" />
                    <SkeletonElement className="h-4 w-20" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3].map((j) => (
                      <SkeletonElement key={j} className="h-6 w-16 rounded-lg" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <SkeletonElement className="h-10 w-80 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-24 mx-auto" />
          </div>
          
          <div className="space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative flex items-start gap-8">
                <SkeletonElement className="w-16 h-16 rounded-full flex-shrink-0" />
                <SkeletonElement className="flex-1 h-32 rounded-2xl" />
              </div>
            ))}
          </div>
        </section>

        {/* Metrics Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <SkeletonElement className="h-10 w-80 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-dark-surface/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
                <SkeletonElement className="h-6 w-24 mx-auto mb-4" />
                <div className="space-y-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="text-center">
                      <SkeletonElement className="h-8 w-20 mx-auto mb-2" />
                      <SkeletonElement className="h-4 w-16 mx-auto" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Learnings Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <SkeletonElement className="h-10 w-80 mx-auto mb-4" />
            <SkeletonElement className="h-1 w-24 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <SkeletonElement className="h-8 w-48 mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <SkeletonElement key={i} className="h-20 rounded-xl" />
                ))}
              </div>
            </div>
            <div>
              <SkeletonElement className="h-8 w-48 mb-6" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <SkeletonElement key={i} className="h-20 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default ProjectDetailSkeleton; 