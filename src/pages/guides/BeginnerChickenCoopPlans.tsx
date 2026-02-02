import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertTriangle, Clock, DollarSign, Wrench, Target, HelpCircle } from 'lucide-react';
import BlogLayout from '@/components/BlogLayout';
import { articles } from '@/lib/articles';

const BeginnerChickenCoopPlans = () => {
  const article = articles.find(a => a.slug === 'beginner-chicken-coop-plans')!;

  // Skill Assessment Tool State
  const [skillAssessment, setSkillAssessment] = useState({
    tapeMeasure: false,
    level: false,
    drilling: false,
    cutting: false,
    lifting: false,
    time: false,
  });

  const skillCount = Object.values(skillAssessment).filter(Boolean).length;
  const getSkillRating = () => {
    if (skillCount >= 6) return { label: 'Ready to Build!', color: 'text-green-600', message: 'You have all the essential skills for a successful first build.' };
    if (skillCount >= 4) return { label: 'Almost Ready', color: 'text-yellow-600', message: 'Practice a few more skills before starting. Consider a simpler design.' };
    if (skillCount >= 2) return { label: 'Needs Practice', color: 'text-orange-600', message: 'Spend time with basic tools before tackling a coop project.' };
    return { label: 'Start with Basics', color: 'text-red-600', message: 'Take a basic DIY class or practice simple projects first.' };
  };

  const skillRating = getSkillRating();

  return (
    <BlogLayout article={article}>
      {/* Introduction */}
      <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-8">
        <p className="text-lg leading-relaxed">
          <strong>You don't need carpentry experience to build a professional chicken coop.</strong> After teaching 20+ first-time builders across Phoenix neighborhoods—including complete novices who had never used a circular saw—I've identified the exact approach that transforms intimidated beginners into confident coop builders in a single weekend.
        </p>
      </div>

      <p className="text-muted-foreground mb-8">
        The secret isn't simplified construction—it's simplified instruction. Quality beginner plans break complex projects into manageable steps, anticipate common mistakes, and provide the detailed guidance that experienced builders take for granted. This comprehensive guide reveals exactly what makes chicken coop plans truly beginner-friendly and how to choose designs that guarantee first-time success.
      </p>

      {/* Interactive Skill Assessment Tool */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-xl text-foreground">Beginner Skill Assessment Tool</h3>
        </div>
        <p className="text-muted-foreground mb-6">Check the skills you're comfortable with to see if you're ready to build:</p>
        
        <div className="grid md:grid-cols-2 gap-3 mb-6">
          {[
            { key: 'tapeMeasure', label: 'Reading a tape measure (fractions like 1/2", 1/4")' },
            { key: 'level', label: 'Using a level to check flat/vertical surfaces' },
            { key: 'drilling', label: 'Basic drilling (pilot holes, driving screws)' },
            { key: 'cutting', label: 'Safe straight cuts with circular or miter saw' },
            { key: 'lifting', label: 'Lifting 25-30 pounds comfortably' },
            { key: 'time', label: 'Spending 4-6 hours working on a project' },
          ].map(({ key, label }) => (
            <label 
              key={key}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                skillAssessment[key as keyof typeof skillAssessment]
                  ? 'bg-primary/10 border-primary'
                  : 'bg-background border-border hover:border-primary/50'
              }`}
            >
              <input
                type="checkbox"
                checked={skillAssessment[key as keyof typeof skillAssessment]}
                onChange={(e) => setSkillAssessment(prev => ({ ...prev, [key]: e.target.checked }))}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                skillAssessment[key as keyof typeof skillAssessment]
                  ? 'bg-primary border-primary'
                  : 'border-muted-foreground'
              }`}>
                {skillAssessment[key as keyof typeof skillAssessment] && (
                  <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                )}
              </div>
              <span className="text-sm text-foreground">{label}</span>
            </label>
          ))}
        </div>

        <div className={`p-4 rounded-lg ${
          skillCount >= 6 ? 'bg-green-50 border border-green-200' :
          skillCount >= 4 ? 'bg-yellow-50 border border-yellow-200' :
          skillCount >= 2 ? 'bg-orange-50 border border-orange-200' :
          'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`font-bold ${skillRating.color}`}>{skillCount}/6 Skills</span>
            <span className={`font-semibold ${skillRating.color}`}>— {skillRating.label}</span>
          </div>
          <p className="text-sm text-muted-foreground">{skillRating.message}</p>
        </div>
      </div>

      {/* What Makes Beginner-Friendly */}
      <section id="what-makes-beginner-friendly" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">What Makes Plans Truly Beginner-Friendly</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Beginner-friendly plans anticipate inexperience rather than assuming knowledge.</strong> The difference between intimidating plans and confidence-building plans isn't project complexity—it's instructional detail and mistake prevention.
        </p>

        <h3 className="text-xl font-display text-foreground mb-4">Visual Learning Support</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Step-by-step photographs:</strong> Every cut, every assembly stage, every connection method</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Multiple angle views:</strong> Show what components look like from builder's perspective</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Before/during/after photos:</strong> Clear progression through each stage</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Common mistake photos:</strong> "This is wrong" examples with corrections</span>
          </li>
        </ul>

        <p className="text-muted-foreground mb-6">
          <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline">Our complete building guide</Link> includes step-by-step photo guides for every cut, eliminating the guesswork that stops most first-time projects.
        </p>

        <h3 className="text-xl font-display text-foreground mb-4">Detailed Instruction Approach</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Assumed knowledge = zero:</strong> Plans explain why each step matters</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Tool usage guidance:</strong> How to use tools safely and effectively</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Measurement verification:</strong> "Measure twice, cut once" with specific check methods</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span><strong>Assembly sequence logic:</strong> Why this order prevents problems later</span>
          </li>
        </ul>

        <h3 className="text-xl font-display text-foreground mb-4">Mistake Prevention Systems</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <span><strong>Warning callouts:</strong> "STOP: Check this before proceeding"</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <span><strong>Common error alerts:</strong> "Most beginners do this wrong..."</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <span><strong>Quality checkpoints:</strong> Verification steps at critical stages</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <span><strong>Recovery procedures:</strong> How to fix mistakes without starting over</span>
          </li>
        </ul>
      </section>

      {/* Skill Level Reality */}
      <section id="skill-level-reality" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Honest Skill Level Requirements</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Successful beginner projects require basic comfort with tools, not carpentry expertise.</strong> If you can measure accurately, cut straight lines, and drill holes, you can build a quality chicken coop.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Skills You Need
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Reading a tape measure (understanding fractions)</li>
              <li>• Using a level to check flat and vertical</li>
              <li>• Basic drilling (pilot holes and driving screws)</li>
              <li>• Safe cutting with circular or miter saw</li>
            </ul>
          </div>
          
          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              Skills You DON'T Need
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Complex joinery or woodworking techniques</li>
              <li>• Experience with framing or construction</li>
              <li>• Electrical or plumbing knowledge</li>
              <li>• Advanced tool operation</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">Learning curve expectations:</strong> Most tool skills develop during the first few cuts. Quality beginner plans include practice recommendations—make your first cuts on scrap lumber to build confidence before cutting actual project pieces.
        </p>

        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h4 className="font-display text-lg text-foreground mb-3">Physical Requirements</h4>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li>• Lift 25-30 pounds (a single 2×4×8 board)</li>
            <li>• Work comfortably while kneeling or bending</li>
            <li>• Handle power tools with steady hands</li>
            <li>• Spend 4-6 hours on feet over a weekend</li>
          </ul>
        </div>
      </section>

      {/* Tool Requirements */}
      <section id="tool-requirements" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Basic Tool Requirements (You Probably Own These)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Most beginner-friendly coop builds require only 6-8 basic tools.</strong> If you own a toolbox for household repairs, you likely have 80% of what's needed. <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">Our materials guide</Link> includes clear alternatives for any specialized equipment.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-primary" />
              Essential Tools (Must Have)
            </h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Tape measure:</strong> 25-foot minimum for measuring lumber</li>
              <li><strong>Level:</strong> 2-foot or 4-foot for checking alignment</li>
              <li><strong>Drill/driver:</strong> Cordless drill with bits and attachments</li>
              <li><strong>Circular saw OR miter saw:</strong> For cutting lumber</li>
              <li><strong>Square:</strong> Speed square or framing square for marking</li>
              <li><strong>Safety gear:</strong> Safety glasses and hearing protection</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
              <Wrench className="h-5 w-5 text-muted-foreground" />
              Helpful Tools (Nice to Have)
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Clamps:</strong> Hold pieces while drilling (4-6 clamps ideal)</li>
              <li><strong>Socket set:</strong> For lag bolts and heavy-duty connections</li>
              <li><strong>Hammer:</strong> For adjustments and nail-in hardware</li>
              <li><strong>Utility knife:</strong> Cutting hardware cloth and materials</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-6">
          <h4 className="font-display text-lg text-foreground mb-3">Tool Rental Options</h4>
          <p className="text-sm text-muted-foreground">
            Don't own a circular saw? Most home improvement stores rent quality tools for $40-60/day. Many beginners find miter saws easier to use than circular saws for accurate crosscuts.
          </p>
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h4 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Budget Tool Recommendations
          </h4>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li><strong>Cordless drill:</strong> Ryobi ONE+ ($79-99 with battery)</li>
            <li><strong>Circular saw:</strong> Ryobi 7-1/4" ($89-109)</li>
            <li><strong>Speed square:</strong> Swanson 7" ($15-20)</li>
            <li><strong>Level:</strong> Empire 24" ($25-35)</li>
          </ul>
        </div>
      </section>

      {/* Size Recommendations */}
      <section id="size-recommendations" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Best Coop Sizes for First-Time Builders</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Start with designs sized for 4-6 chickens.</strong> These provide meaningful egg production while keeping projects manageable for beginners. Larger coops introduce complexity that can overwhelm first-time builders.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">4×6 Coops (4-5 chickens) — Recommended</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li><strong>Why it works:</strong> Uses standard 8-foot lumber with minimal cutting</li>
              <li><strong>Manageable size:</strong> Components are light enough for one person</li>
              <li><strong>Reasonable cost:</strong> $400-600 in materials</li>
              <li><strong>Weekend project:</strong> Buildable in 2-3 days for beginners</li>
            </ul>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">4×8 Coops (6-7 chickens)</h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li><strong>Popular choice:</strong> Good balance of flock size and build complexity</li>
              <li><strong>Standard materials:</strong> Efficient use of 4×8 plywood sheets</li>
              <li><strong>Room for mistakes:</strong> Larger size forgives minor measurement errors</li>
              <li><strong>Growth accommodation:</strong> Can handle flock expansion</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">Use our size calculator</Link> to determine the right coop dimensions for your planned flock size.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h4 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Avoid as First Projects
          </h4>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li><strong>Coops under 4×4:</strong> Too cramped, require precision cuts</li>
            <li><strong>Coops over 6×10:</strong> Heavy components, complex assembly</li>
            <li><strong>Multi-level designs:</strong> Increase complexity significantly</li>
            <li><strong>Custom shapes:</strong> Hexagonal, round, or angular designs</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="step-by-step-process" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">The Step-by-Step Building Process</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Quality beginner plans break construction into logical phases that build skills progressively.</strong> Each phase teaches techniques used in subsequent stages, creating confidence through manageable accomplishments.
        </p>

        <div className="space-y-4 mb-6">
          {[
            { phase: 'Phase 1', title: 'Planning and Preparation', time: 'Day 1 morning', items: ['Site selection and ground preparation', 'Material delivery and organization', 'Tool setup and safety briefing', 'Plan review and question resolution'] },
            { phase: 'Phase 2', title: 'Foundation and Floor', time: 'Day 1 afternoon', items: ['Foundation layout using stakes and string', 'Level adjustment and corner verification', 'Floor frame assembly (simplest component)', 'First experience with measuring, cutting, drilling'] },
            { phase: 'Phase 3', title: 'Wall Framing', time: 'Day 2 morning', items: ['Wall assembly on flat ground (easier than vertical)', 'Door and window opening creation', 'Practice with square checking and adjustment', 'Understanding of structural connections'] },
            { phase: 'Phase 4', title: 'Assembly and Roof', time: 'Day 2 afternoon', items: ['Wall raising and connection', 'Roof system installation', 'Structural integrity verification', 'Weather-tight closure'] },
            { phase: 'Phase 5', title: 'Finishing and Details', time: 'Day 3', items: ['Siding and trim installation', 'Hardware cloth and predator proofing', 'Door hanging and latch installation', 'Interior fittings and accessories'] },
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">{item.phase}</span>
                <h4 className="font-display text-lg text-foreground">{item.title}</h4>
                <span className="text-sm text-muted-foreground ml-auto flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {item.time}
                </span>
              </div>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {item.items.map((listItem, i) => (
                  <li key={i}>• {listItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          <Link to="/guides/small-chicken-coop-plans" className="text-primary hover:underline">Browse our small coop plans</Link> designed specifically for first-time builders—plans that follow this progressive skill-building approach.
        </p>
      </section>

      {/* Common Mistakes */}
      <section id="common-mistakes" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">10 Most Common Beginner Mistakes (And How to Avoid Them)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Every beginner makes predictable mistakes.</strong> Quality plans anticipate these errors and provide specific prevention strategies. Learn more about <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">costly mistakes to avoid</Link>.
        </p>

        <div className="space-y-4">
          {[
            { number: 1, title: 'Skipping the planning phase', problem: 'Missing materials, wrong sizes, frustrating delays', prevention: 'Read plans completely before buying anything', tip: 'Make a complete shopping list with quantities verified' },
            { number: 2, title: 'Measuring inaccurately', problem: "Parts don't fit, gaps in assembly, structural weakness", prevention: 'Measure twice, mark clearly, verify with a second measurement', tip: 'Use a pencil for marking—pen bleeds and creates thick lines' },
            { number: 3, title: 'Cutting without thinking', problem: 'Wrong lengths, wasted materials, dangerous situations', prevention: 'Mark cut lines clearly and check measurements again', tip: 'Practice cuts on scrap lumber before cutting project pieces' },
            { number: 4, title: 'Ignoring square and level', problem: "Crooked coops, doors that don't close, structural problems", prevention: 'Check square and level at every assembly stage', tip: 'A slightly off foundation affects everything built on top' },
            { number: 5, title: 'Over-tightening screws', problem: 'Stripped screw heads, cracked lumber, weak connections', prevention: 'Use clutch settings on drills, hand-tighten final turns', tip: 'Pilot holes prevent splitting and make driving easier' },
            { number: 6, title: 'Wrong fastener choices', problem: 'Loose joints, rust problems, structural failure', prevention: 'Use galvanized screws for outdoor projects', tip: '2.5" screws for 2×4 connections, 1.5" for plywood' },
            { number: 7, title: 'Inadequate safety planning', problem: 'Injuries, accidents, project delays', prevention: 'Always wear safety glasses and hearing protection', tip: 'Secure lumber before cutting—never hold pieces by hand' },
            { number: 8, title: 'Rushing assembly', problem: 'Misalignment, forgotten steps, rework required', prevention: 'Take breaks, verify each step before proceeding', tip: "It's faster to do it right than to fix mistakes" },
            { number: 9, title: 'Poor organization', problem: 'Lost parts, damaged materials, inefficient work', prevention: 'Organize materials by assembly stage', tip: 'Keep hardware in labeled containers or bags' },
            { number: 10, title: 'Perfectionism paralysis', problem: 'Projects never get finished, unnecessary stress', prevention: 'Accept "good enough" for first projects', tip: "Chickens don't care about minor imperfections" },
          ].map((mistake) => (
            <div key={mistake.number} className="bg-card border border-border rounded-xl p-5">
              <h4 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center">
                  {mistake.number}
                </span>
                {mistake.title}
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-red-600">What happens:</span>
                  <p className="text-muted-foreground">{mistake.problem}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-600">Prevention:</span>
                  <p className="text-muted-foreground">{mistake.prevention}</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Pro tip:</span>
                  <p className="text-muted-foreground">{mistake.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Material Selection */}
      <section id="material-selection" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Beginner-Friendly Material Choices</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Choose materials that forgive mistakes and are easy to work with.</strong> Premium materials can wait until you've built confidence with basic projects. See our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">complete materials guide</Link> for detailed specifications.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Pressure-Treated Lumber (Foundation)</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Why:</strong> Ground contact resistance, longer lifespan</li>
              <li><strong>Use for:</strong> Skids, floor frames, bottom plates</li>
              <li><strong>Beginner tip:</strong> Slightly more expensive but prevents early failures</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Standard Pine/Fir (Framing)</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Why:</strong> Easy to cut, readily available, cost-effective</li>
              <li><strong>Use for:</strong> Wall studs, roof rafters, trim</li>
              <li><strong>Beginner tip:</strong> Choose straight pieces—warped lumber creates problems</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Plywood (Sheathing)</h4>
            <ul className="text-sm space-y-1">
              <li><strong>OSB alternative:</strong> Cheaper but less forgiving of moisture</li>
              <li><strong>Thickness:</strong> 1/2" for walls, 5/8" for floors</li>
              <li><strong>Beginner tip:</strong> Mark cut lines clearly—plywood splinters easily</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Hardware Cloth Specifications</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Size:</strong> 1/2-inch aperture, 19-gauge galvanized</li>
              <li><strong>Why not chicken wire:</strong> Provides no <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator protection</Link></li>
              <li><strong>Beginner tip:</strong> Buy 10% extra—first-time installation includes mistakes</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-5">
          <h4 className="font-display text-lg text-foreground mb-3">Fastener Simplification</h4>
          <ul className="text-sm space-y-1">
            <li><strong>Galvanized screws:</strong> 2.5" for framing, 1.5" for sheathing</li>
            <li><strong>Avoid nails:</strong> Screws are more forgiving for beginners</li>
            <li><strong>Hardware cloth:</strong> Screws with washers, not staples</li>
          </ul>
        </div>
      </section>

      {/* Time Expectations */}
      <section id="time-expectations" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Realistic Time Expectations</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Beginner projects take 2-3 times longer than experienced builder estimates.</strong> Plan accordingly and don't schedule tight deadlines that create stress and mistakes.
        </p>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-primary/10 p-4 border-b border-border">
            <h4 className="font-display text-lg text-foreground flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Realistic Beginner Timeline (4×6 Coop)
            </h4>
          </div>
          <div className="divide-y divide-border">
            <div className="p-4">
              <h5 className="font-semibold text-foreground mb-2">Preparation Day</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Site prep: 2-3 hours (leveling, organizing materials)</li>
                <li>• Plan review: 1 hour (understanding each step)</li>
                <li>• Tool setup: 30 minutes (organizing work area)</li>
              </ul>
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-foreground mb-2">Construction Day 1</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Foundation: 2-3 hours (measuring, cutting, assembly)</li>
                <li>• Floor frame: 2-3 hours (first major component)</li>
                <li>• Learning curve: Extra time for developing tool skills</li>
              </ul>
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-foreground mb-2">Construction Day 2</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Wall framing: 4-5 hours (more complex than floor)</li>
                <li>• Wall assembly: 2-3 hours (connecting components)</li>
                <li>• Roof framing: 2-3 hours (if energy remains)</li>
              </ul>
            </div>
            <div className="p-4">
              <h5 className="font-semibold text-foreground mb-2">Construction Day 3</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Roof completion: 2-3 hours (sheathing, roofing)</li>
                <li>• Finishing: 3-4 hours (siding, hardware cloth, doors)</li>
                <li>• Final touches: 1-2 hours (interior fittings)</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mt-4">
          See our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">cost breakdown guide</Link> for accurate budget planning alongside your timeline.
        </p>
      </section>

      {/* When to Get Help */}
      <section id="when-to-get-help" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">When to Ask for Help (And Who to Ask)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Knowing when to ask for help prevents costly mistakes and dangerous situations.</strong> Even experienced builders consult others for specialized tasks.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              When to Get Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Heavy lifting (raising walls, placing roof panels)</li>
              <li>• Any electrical work (lighting, outlets)</li>
              <li>• Cutting on ladders or elevated surfaces</li>
              <li>• When measurements consistently don't match</li>
              <li>• Before making cuts you're unsure about</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Who to Ask</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Local hardware store staff:</strong> Tool selection, material advice</li>
              <li><strong>YouTube tutorials:</strong> Specific technique demonstrations</li>
              <li><strong>Experienced friends/family:</strong> Extra hands and knowledge</li>
              <li><strong>Online communities:</strong> Troubleshooting specific problems</li>
              <li><strong>Local chicken groups:</strong> Coop-specific advice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Confidence Building */}
      <section id="confidence-building" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Building Confidence Through Small Wins</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Confidence grows through successful completion of progressively complex tasks.</strong> Quality beginner plans build skills systematically rather than throwing you into difficult work immediately.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-display text-lg text-foreground mb-4">Confidence-Building Sequence</h4>
          <ol className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <span><strong>Practice cuts on scrap:</strong> Get comfortable with your saw before cutting project pieces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <span><strong>Build the floor first:</strong> Simplest component, develops core skills</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <span><strong>Assemble walls flat:</strong> Easier than building vertically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <span><strong>Raise walls with help:</strong> Team effort for the exciting part</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
              <span><strong>Finish with visible details:</strong> Trim and doors show your accomplishment</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Recommended Plans */}
      <section id="recommended-plans" className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Recommended Beginner Plans</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Not all "beginner" plans are truly beginner-friendly.</strong> Look for plans that include all the elements discussed in this guide. Use our <Link to="/guides/free-coop-plans-quality-checklist" className="text-primary hover:underline">quality checklist</Link> to evaluate any plan before starting.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Best for True Beginners</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <Link to="/guides/small-chicken-coop-plans" className="text-primary hover:underline">Small chicken coop plans</Link> (4-6 birds)</li>
              <li>• <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4×4 coop plans</Link> (smallest manageable size)</li>
              <li>• Simple shed-style roof designs</li>
              <li>• Ground-level builds (no elevation)</li>
            </ul>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">After Your First Build</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">Large coop plans</Link> (bigger flock)</li>
              <li>• <Link to="/guides/mobile-chicken-coop-plans" className="text-primary hover:underline">Mobile coop designs</Link> (chicken tractors)</li>
              <li>• Elevated coops with storage underneath</li>
              <li>• Multi-section designs with separate areas</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
          <h4 className="font-display text-lg text-foreground mb-3">Ready to Start?</h4>
          <p className="text-muted-foreground mb-4">
            Browse our collection of <Link to="/recommended-plans" className="text-primary hover:underline">recommended plans</Link> vetted for beginner-friendliness, or check out our <Link to="/guides/free-chicken-coop-plans" className="text-primary hover:underline">free plan resources</Link> to get started without investment.
          </p>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Your First Coop: Start Simple, Build Confidence</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <p className="text-lg mb-4">
            <strong>Building a chicken coop as a beginner is absolutely achievable.</strong> Success comes from choosing appropriately sized projects, using quality plans with detailed instructions, and accepting that learning takes time.
          </p>
          <p className="text-muted-foreground mb-4">
            Your first coop doesn't need to be perfect—it needs to be safe, functional, and completed. The skills you develop building a simple 4×6 coop will serve you for every future project.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Start with manageable goals, celebrate small wins, and remember: every experienced builder started exactly where you are now.</strong>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-display text-foreground mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-lg text-foreground mb-2">Can I really build a coop with no experience?</h3>
            <p className="text-muted-foreground text-sm">
              Yes—if you choose appropriate plans. Start with a simple 4×6 design using basic tools. Most beginners successfully complete their first coop in 2-3 weekends with zero prior building experience.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-lg text-foreground mb-2">What's the easiest coop design for beginners?</h3>
            <p className="text-muted-foreground text-sm">
              Ground-level coops with simple shed-style (single-slope) roofs are easiest. Avoid elevated designs, gable roofs, or coops with multiple sections for your first build. A 4×6 or 4×8 rectangle provides the best balance of simplicity and function.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-lg text-foreground mb-2">How long will my first coop take to build?</h3>
            <p className="text-muted-foreground text-sm">
              Plan for 3-4 full days of work over 2 weekends for a simple 4×6 coop. Experienced builders might complete the same project in 1-2 days, but beginners need extra time for learning, measuring, and correcting mistakes.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-lg text-foreground mb-2">What if I make mistakes during construction?</h3>
            <p className="text-muted-foreground text-sm">
              Most mistakes are fixable. Cut a board too short? Use it elsewhere or buy a replacement (lumber is cheap). Drilled a hole in the wrong place? Fill it with wood filler. Screwed something crooked? Unscrew and try again. Quality plans include recovery procedures for common errors.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-lg text-foreground mb-2">Should I buy tools or rent them?</h3>
            <p className="text-muted-foreground text-sm">
              Buy a cordless drill and basic measuring tools—you'll use these for many projects. Rent specialized tools like miter saws if you're unsure about future projects. A full basic tool set costs $200-300 and pays for itself after 2-3 projects.
            </p>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default BeginnerChickenCoopPlans;
