import React from 'react';
import DownloadIcon from './icons/DownloadIcon';

interface ChecklistActionBarProps {
    selectedCount: number;
    onDownload: () => void;
    onCancel: () => void;
}

const ChecklistActionBar: React.FC<ChecklistActionBarProps> = ({ selectedCount, onDownload, onCancel }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-800/80 backdrop-blur-lg border-t border-slate-700 p-4 animate-slide-up z-20">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div>
                    <h3 className="font-bold text-lg text-slate-200">Plan Creator Mode</h3>
                    <p className="text-sm text-cyan-400">{selectedCount} dork{selectedCount !== 1 ? 's' : ''} selected</p>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDownload}
                        disabled={selectedCount === 0}
                        className="flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors shadow-md disabled:bg-slate-600 disabled:cursor-not-allowed"
                    >
                        <DownloadIcon className="w-5 h-5 mr-2" />
                        Download Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChecklistActionBar;
