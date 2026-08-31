import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Sparkles,
  Play,
  RotateCcw,
  Zap,
  CheckCircle,
  Activity,
  Sliders,
  Settings
} from 'lucide-react';
import { ThreeDPrinterCanvas } from '../ThreeDPrinterCanvas';
import { ThreeDRobotActuator } from '../ThreeDRobotActuator';

interface SimulationsViewProps {
  onOpenQuoteModal: () => void;
}

export const SimulationsView: React.FC<SimulationsViewProps> = ({ onOpenQuoteModal }) => {
  const [activeSimulationTab, setActiveSimulationTab] = useState<'printer' | 'robot'>('printer');

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-blue-50/70 to-white pt-12 pb-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-700">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>REAL-TIME BROWSER-BASED HARDWARE KINEMATICS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-blue-950 tracking-tight">
            3D SIMULATION <span className="text-blue-600">LABORATORY</span>
          </h1>
          <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
            Test and inspect our virtual hardware environments: interactive G-code additive slicer layer deposition and 6-axis industrial robotic arm inverse kinematics.
          </p>

          {/* Simulation Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={() => setActiveSimulationTab('printer')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeSimulationTab === 'printer'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-950 hover:bg-slate-100'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>3D Additive Layer & Slicer Simulation</span>
            </button>

            <button
              onClick={() => setActiveSimulationTab('robot')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeSimulationTab === 'robot'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-blue-950 hover:bg-slate-100'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>6-Axis Industrial Robotic Arm Kinematics</span>
            </button>
          </div>
        </div>
      </section>

      {/* Active Simulation Stage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeSimulationTab === 'printer' ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-display font-extrabold text-blue-950">
                  Industrial FDM / SLA Additive Build Chamber
                </h3>
                <p className="text-xs text-slate-600">
                  Simulate G-Code layer extrusion, nozzle temperature control, heated build plate, and infill geometries.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 font-semibold">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>60 FPS WEBGL CANVAS</span>
              </div>
            </div>

            {/* 3D Printer Simulation Canvas */}
            <ThreeDPrinterCanvas />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-display font-extrabold text-blue-950">
                  6-Axis Articulated Industrial Robot Actuator
                </h3>
                <p className="text-xs text-slate-600">
                  Inspect joint angles J1-J6, pneumatic end-effector grasping, payload kinematics, and automated motion cycles.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 font-semibold">
                <Activity className="w-3.5 h-3.5 text-blue-600" />
                <span>INVERSE KINEMATICS ENGINE</span>
              </div>
            </div>

            {/* 6-Axis Robotic Arm Canvas */}
            <ThreeDRobotActuator />
          </div>
        )}
      </section>

      {/* Engineering Assistance Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-blue-900 text-white border border-blue-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h4 className="text-xl font-display font-extrabold">Need Custom Hardware Simulation or Tool DFM?</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our engineering team conducts full Mouldflow rheological analysis, FEA stress simulation, and kinematic path planning for complex tooling and automation lines.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-bold text-xs shadow-lg shadow-cyan-400/25 transition-all"
          >
            Consult Engineering Specialist
          </button>
        </div>
      </section>
    </div>
  );
};
