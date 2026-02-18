import { motion } from 'framer-motion';

interface SkeletonLoaderProps {
    type: 'gallery' | 'testimonials' | 'contact' | 'beforeafter';
}

export default function SkeletonLoader({ type }: SkeletonLoaderProps) {
    if (type === 'gallery') {
        return (
            <section className="py-24 md:py-32 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-6 w-32 h-6 animate-pulse" />
                        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-48 mx-auto animate-pulse" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (type === 'testimonials') {
        return (
            <section className="py-24 md:py-32 bg-slate-50 dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-6 w-40 h-6 animate-pulse" />
                        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-72 mx-auto mb-4 animate-pulse" />
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-56 mx-auto animate-pulse" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg animate-pulse">
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <div key={s} className="w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                    ))}
                                </div>
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2 animate-pulse" />
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-4 animate-pulse" />
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                                    <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                    <div className="flex-1">
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-24 mb-2 animate-pulse" />
                                        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-16 animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (type === 'contact') {
        return (
            <section className="py-24 md:py-32 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700 mb-6 w-40 h-6 animate-pulse" />
                        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-64 mx-auto mb-4 animate-pulse" />
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-52 mx-auto animate-pulse" />
                    </div>
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2 space-y-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800 animate-pulse">
                                    <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                    <div className="flex-1">
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-20 mb-2" />
                                        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:col-span-3">
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 animate-pulse">
                                <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-48 mb-4" />
                                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-32 mb-6" />
                                <div className="space-y-4">
                                    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                    <div className="h-24 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (type === 'beforeafter') {
        return (
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-32 mx-auto mb-3 animate-pulse" />
                        <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-48 mx-auto mb-4 animate-pulse" />
                        <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-64 mx-auto animate-pulse" />
                    </div>
                    <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden aspect-[16/9] bg-slate-200 dark:bg-slate-700 animate-pulse" />
                </div>
            </section>
        );
    }

    return null;
}
