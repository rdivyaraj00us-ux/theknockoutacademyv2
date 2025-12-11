import { AlertCircle, CheckCircle2 } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "Scattered resources across dozens of websites",
    "Outdated courses that waste your time and money",
    "Theory without practical, actionable steps",
    "No clear path from beginner to professional",
  ];

  const solutions = [
    "Everything organized in clear, themed bundles",
    "Practical guides you can implement today",
    "Real templates and workflows included",
    "Beginner-to-Expert learning pathway",
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Tired of Information Overload?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop wasting time searching for resources. We've done the work for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Problems */}
          <div className="p-6 rounded-xl bg-destructive/5 border border-destructive/20">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
              <AlertCircle className="h-5 w-5 text-destructive" />
              The Problem
            </h3>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs text-destructive font-bold">✕</span>
                  </span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              The Solution
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
