import { CanvasRevealEffect } from "./atoms/CanvasRevealEffect";
import { approachPhases } from "@/data";
import Card from "./atoms/Card";
import AceternityIcon from "./atoms/AceternityIcon";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {approachPhases.map((phase) => (
          <Card
            key={phase.title}
            title={phase.title}
            icon={<AceternityIcon order={phase.order} />}
            des={phase.des}
          >
            <CanvasRevealEffect
              animationSpeed={phase.animationSpeed}
              containerClassName={phase.containerClassName}
              colors={phase.colors}
              dotSize={phase.dotSize}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Approach;
