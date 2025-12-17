import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import InvoicesView from './components/InvoicesView';
import SettingsView from './components/SettingsView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <DashboardView onChangeView={setCurrentView} />;
      case ViewState.INVOICES:
        return <InvoicesView onClose={() => setCurrentView(ViewState.DASHBOARD)} />;
      case ViewState.SETTINGS:
        return <SettingsView onClose={() => setCurrentView(ViewState.DASHBOARD)} />;
      default:
        return <DashboardView onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-tally-bg text-black overflow-hidden font-sans text-sm select-none">
      {/* Top Header */}
      <div className="bg-tally-green text-white px-2 py-1 flex justify-between items-center h-8 border-b border-white/20 shadow-sm z-50">
        <div className="flex items-center gap-4">
          <span className="font-bold italic text-lg tracking-wider font-serif">Tally.ERP 9</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex gap-1">
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">P: Print</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">E: Export</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">M: E-Mail</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">O: Upload</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">S: Shop</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">G: Language</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">K: Keyboard</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 cursor-pointer">H: Help</span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative border-r-4 border-tally-bg">
           {renderContent()}
        </div>

        {/* Right Sidebar (Button Bar) */}
        <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      </div>

      {/* Footer / Info Panel */}
      <div className="bg-tally-green text-white h-auto min-h-[140px] flex flex-col justify-between border-t-2 border-white/30">
        {/* Calc/Status Area */}
        <div className="flex-1 flex">
            <div className="w-1/2 p-2 border-r border-white/20">
               <div className="text-xs text-white/70 mb-1">Ctrl + M</div>
               <div className="font-mono text-xl bg-tally-green text-right pr-2">0.00</div>
            </div>
            <div className="w-1/2 p-2">
               <div className="text-xs text-white/70 mb-1">Ctrl + N</div>
            </div>
        </div>
        
        {/* Bottom Status Bar */}
        <div className="bg-[#004d39] px-2 py-1 flex justify-between items-center text-xs border-t border-white/20">
            <div className="flex gap-6">
                <span>Product: <strong className="text-white">Tally.ERP 9</strong></span>
                <span>Version: <strong>Release 6.6.3</strong></span>
                <span>License: <strong>Educational Mode</strong></span>
                <span>Configuration: <strong>Gateway</strong></span>
            </div>
            <div className="flex gap-6">
                 <span>Calculator</span>
                 <span>{currentTime.toLocaleTimeString()}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;