import { useRegisterSW } from 'virtual:pwa-register/react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, X } from 'lucide-react';

export default function PWAUpdateToast() {
    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegistered(r) {
            console.log('SW Registered: ' + r);
        },
        onRegisterError(error) {
            console.log('SW registration error', error);
        },
    });

    const close = () => {
        setOfflineReady(false);
        setNeedRefresh(false);
    };

    return (
        <AnimatePresence>
            {(offlineReady || needRefresh) && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-20 right-4 z-[70] max-w-xs w-full bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-4 flex flex-col gap-3"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                                {offlineReady ? 'Prêt pour le mode hors ligne' : 'Mise à jour disponible'}
                            </h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                {offlineReady
                                    ? 'L\'application est prête à être utilisée sans internet.'
                                    : 'Une nouvelle version est disponible. Mettez à jour pour voir les changements.'}
                            </p>
                        </div>
                        <button
                            onClick={close}
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {needRefresh && (
                        <button
                            onClick={() => updateServiceWorker(true)}
                            className="w-full bg-gold-500 hover:bg-gold-600 text-white text-sm font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <RefreshCw size={16} />
                            Mettre à jour
                        </button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
