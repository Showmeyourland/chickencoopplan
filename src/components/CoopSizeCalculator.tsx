import { useState, useCallback } from 'react';
import { Calculator, Home, Trees, AlertTriangle, Lightbulb } from 'lucide-react';

interface CalculatorResults {
  totalIndoor: number;
  totalRun: number;
  indoorPerBird: number;
  runPerBird: number;
  planningBirds: number;
  coopDimensions: string[];
  runDimensions: string[];
  costLow: number;
  costHigh: number;
  breedName: string;
  breedMultiplier: number;
  accessDesc: string;
  climateNote: string;
  managementNote: string;
  expansionFactor: number;
}

const CoopSizeCalculator = () => {
  const [birdCount, setBirdCount] = useState(4);
  const [breedSize, setBreedSize] = useState('standard');
  const [outdoorAccess, setOutdoorAccess] = useState('large-run');
  const [climate, setClimate] = useState('temperate');
  const [management, setManagement] = useState('intensive');
  const [expansion, setExpansion] = useState('none');

  const breedMultipliers: Record<string, { indoor: number; run: number; name: string }> = {
    'bantam': { indoor: 0.7, run: 0.7, name: 'Bantam' },
    'standard': { indoor: 1.0, run: 1.0, name: 'Standard' },
    'large': { indoor: 1.4, run: 1.4, name: 'Large/Giant' }
  };

  const accessMultipliers: Record<string, { indoor: number; run: number; runDesc: string }> = {
    'free-range': { indoor: 0.9, run: 0.6, runDesc: '6-8 sq ft (minimal run needed)' },
    'large-run': { indoor: 1.0, run: 1.0, runDesc: '10-15 sq ft' },
    'small-run': { indoor: 1.1, run: 1.5, runDesc: '15-20 sq ft' },
    'confined': { indoor: 2.0, run: 0, runDesc: 'No run (all indoor space)' }
  };

  const climateMultipliers: Record<string, { indoor: number; run: number; note: string }> = {
    'cold': { indoor: 1.2, run: 0.9, note: 'Extended indoor time during winter' },
    'temperate': { indoor: 1.0, run: 1.0, note: 'Moderate climate conditions' },
    'hot': { indoor: 0.9, run: 1.2, note: 'More outdoor shade required' }
  };

  const managementMultipliers: Record<string, { indoor: number; run: number; note: string }> = {
    'intensive': { indoor: 0.9, run: 0.9, note: 'Daily cleaning allows tighter spacing' },
    'moderate': { indoor: 1.0, run: 1.0, note: 'Weekly maintenance schedule' },
    'minimal': { indoor: 1.3, run: 1.2, note: 'Extra space for natural management' }
  };

  const expansionMultipliers: Record<string, number> = {
    'none': 1.0,
    '25percent': 1.25,
    '50percent': 1.5,
    'double': 2.0
  };

  const suggestDimensions = useCallback((sqFt: number): string[] => {
    const options: string[] = [];
    for (let width = 4; width <= 12; width++) {
      for (let length = width; length <= 16; length++) {
        const area = width * length;
        if (area >= sqFt && area <= sqFt * 1.2) {
          options.push(`${width}×${length} (${area} sq ft)`);
        }
      }
    }
    return options.slice(0, 3);
  }, []);

  const calculateResults = useCallback((): CalculatorResults => {
    const baseIndoor = 4;
    const baseRun = 10;

    const indoorPerBird = baseIndoor * 
      breedMultipliers[breedSize].indoor * 
      accessMultipliers[outdoorAccess].indoor * 
      climateMultipliers[climate].indoor * 
      managementMultipliers[management].indoor;

    const runPerBird = baseRun * 
      breedMultipliers[breedSize].run * 
      accessMultipliers[outdoorAccess].run * 
      climateMultipliers[climate].run * 
      managementMultipliers[management].run;

    const expansionFactor = expansionMultipliers[expansion];
    const planningBirds = Math.ceil(birdCount * expansionFactor);

    const totalIndoor = Math.ceil(indoorPerBird * planningBirds);
    const totalRun = Math.ceil(runPerBird * planningBirds);

    const coopDimensions = suggestDimensions(totalIndoor);
    const runDimensions = totalRun > 0 ? suggestDimensions(totalRun) : ['No run needed'];

    const costLow = totalIndoor * 25;
    const costHigh = totalIndoor * 45;

    return {
      totalIndoor,
      totalRun,
      indoorPerBird,
      runPerBird,
      planningBirds,
      coopDimensions,
      runDimensions,
      costLow,
      costHigh,
      breedName: breedMultipliers[breedSize].name,
      breedMultiplier: breedMultipliers[breedSize].indoor,
      accessDesc: accessMultipliers[outdoorAccess].runDesc,
      climateNote: climateMultipliers[climate].note,
      managementNote: managementMultipliers[management].note,
      expansionFactor
    };
  }, [birdCount, breedSize, outdoorAccess, climate, management, expansion, suggestDimensions]);

  const results = calculateResults();

  return (
    <div className="bg-card border border-border rounded-xl p-6 my-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="h-6 w-6 text-primary" />
        <h3 className="text-xl font-bold text-foreground">Advanced Chicken Coop Size Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Number of Birds</label>
          <input
            type="number"
            value={birdCount}
            onChange={(e) => setBirdCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
            min="1"
            max="50"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Breed Size</label>
          <select
            value={breedSize}
            onChange={(e) => setBreedSize(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="bantam">Bantam (2-3 lbs)</option>
            <option value="standard">Standard (4-7 lbs)</option>
            <option value="large">Large (8-12 lbs)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Outdoor Access</label>
          <select
            value={outdoorAccess}
            onChange={(e) => setOutdoorAccess(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="free-range">Free Range (8+ hours)</option>
            <option value="large-run">Large Run (100+ sq ft)</option>
            <option value="small-run">Small Run (50-99 sq ft)</option>
            <option value="confined">Confined to Coop Only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Climate Zone</label>
          <select
            value={climate}
            onChange={(e) => setClimate(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="cold">Cold Climate (0°F or below)</option>
            <option value="temperate">Temperate (10-90°F)</option>
            <option value="hot">Hot Climate (100°F+)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Management Style</label>
          <select
            value={management}
            onChange={(e) => setManagement(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="intensive">Daily Cleaning</option>
            <option value="moderate">Weekly Maintenance</option>
            <option value="minimal">Minimal Intervention</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Expansion Plans</label>
          <select
            value={expansion}
            onChange={(e) => setExpansion(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="none">Current Size Only</option>
            <option value="25percent">+25% Growth</option>
            <option value="50percent">+50% Growth</option>
            <option value="double">Double Flock</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-foreground mb-4">Your Space Requirements</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-background rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Home className="h-5 w-5 text-primary" />
              <h5 className="font-semibold text-foreground">Indoor Coop Space</h5>
            </div>
            <p className="text-2xl font-bold text-primary">{results.totalIndoor} sq ft</p>
            <p className="text-sm text-muted-foreground">
              {results.indoorPerBird.toFixed(1)} sq ft × {results.planningBirds} birds
            </p>
            {results.coopDimensions.length > 0 && (
              <div className="mt-2">
                <p className="text-xs font-medium text-muted-foreground">Suggested:</p>
                <ul className="text-sm text-muted-foreground">
                  {results.coopDimensions.map((dim, i) => (
                    <li key={i}>• {dim}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-background rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trees className="h-5 w-5 text-accent" />
              <h5 className="font-semibold text-foreground">Outdoor Run Space</h5>
            </div>
            {results.totalRun > 0 ? (
              <>
                <p className="text-2xl font-bold text-accent">{results.totalRun} sq ft</p>
                <p className="text-sm text-muted-foreground">
                  {results.runPerBird.toFixed(1)} sq ft × {results.planningBirds} birds
                </p>
                <div className="mt-2">
                  <p className="text-xs font-medium text-muted-foreground">Suggested:</p>
                  <ul className="text-sm text-muted-foreground">
                    {results.runDimensions.map((dim, i) => (
                      <li key={i}>• {dim}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground">Confined to coop only - all space met by indoor area</p>
            )}
          </div>
        </div>

        <div className="bg-background rounded-lg p-4 mb-4">
          <h5 className="font-semibold text-foreground mb-2">📊 Your Specific Factors</h5>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Breed:</strong> {results.breedName} ({results.breedMultiplier}× space multiplier)</li>
            <li>• <strong>Access:</strong> {results.accessDesc}</li>
            <li>• <strong>Climate:</strong> {results.climateNote}</li>
            <li>• <strong>Management:</strong> {results.managementNote}</li>
            {results.planningBirds > birdCount && (
              <li>• <strong>Expansion:</strong> Planning for {results.planningBirds} birds ({Math.round((results.expansionFactor - 1) * 100)}% growth)</li>
            )}
          </ul>
        </div>

        <div className="bg-background rounded-lg p-4">
          <h5 className="font-semibold text-foreground mb-2">💰 Estimated Construction Cost</h5>
          <p className="text-xl font-bold text-primary">
            ${results.costLow.toLocaleString()} - ${results.costHigh.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">Based on $25-45 per square foot (materials only)</p>
        </div>

        {results.totalIndoor < 16 && (
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mt-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Small Coop Warning</h5>
              <p className="text-sm text-muted-foreground">Your calculated space is compact. Maximize free-range time and consider building a larger run.</p>
            </div>
          </div>
        )}

        {results.totalIndoor > 100 && (
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4 flex gap-3">
            <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-semibold text-foreground">Large Coop Considerations</h5>
              <p className="text-sm text-muted-foreground">Check permit requirements, consider walk-in height (6+ feet), and plan electrical for lighting and automation.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoopSizeCalculator;
