import AnimatedPage from './AnimatedPage';
import { ArrowLeft } from 'lucide-react';

const SkeletonElement = ({ className }: { className?: string }) => (
  <div className={`bg-gray-700/50 animate-pulse rounded ${className}`} />
);

const ProjectDetailSkeleton = () => {
  return (
    <AnimatedPage className="container mx-auto py-16 text-white min-h-screen">
      <div className="inline-flex items-center gap-2 text-neon-cyan mb-8">
        <ArrowLeft size={20} />
        <span>Loading Project...</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <SkeletonElement className="h-10 w-3/5 mb-2 md:mb-0" />
        <div className="flex items-center gap-6">
          <SkeletonElement className="h-6 w-16" />
          <SkeletonElement className="h-6 w-16" />
          <SkeletonElement className="h-6 w-16" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <SkeletonElement className="h-12 w-40 rounded-full" />
        <SkeletonElement className="h-12 w-40 rounded-full" />
      </div>

      <SkeletonElement className="w-full h-96 mb-8" />

      <div className="flex gap-2 mb-8">
        <SkeletonElement className="h-8 w-24 rounded-full" />
        <SkeletonElement className="h-8 w-24 rounded-full" />
        <SkeletonElement className="h-8 w-24 rounded-full" />
      </div>

      <SkeletonElement className="h-6 w-full mb-4" />
      <SkeletonElement className="h-6 w-full mb-4" />
      <SkeletonElement className="h-6 w-4/5" />

      <div className="mt-12">
        <SkeletonElement className="h-8 w-1/3 mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SkeletonElement className="h-7 w-1/4 mb-4" />
            <SkeletonElement className="h-6 w-full" />
          </div>
          <div>
            <SkeletonElement className="h-7 w-1/4 mb-4" />
            <div className="flex flex-wrap gap-4">
              <SkeletonElement className="w-12 h-12 rounded-full" />
              <SkeletonElement className="w-12 h-12 rounded-full" />
              <SkeletonElement className="w-12 h-12 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProjectDetailSkeleton; 