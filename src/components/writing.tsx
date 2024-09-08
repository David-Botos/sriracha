export const WritingPieces = () => {
  interface Writing {
    title: string;
    isFinished: boolean;
    link: string;
    description: string;
  }
  const writings: Writing[] = [
    // TODO: add links and write articles
    {
      title: "Radical Simplicity",
      isFinished: false,
      link: "",
      description:
        "I have found that often times even incredibly complex problems have shockingly simple, but often times hard, solutions. I believe in striking at the heart of the problem, and not missing.",
    },
    {
      title: "Radical Integrity",
      isFinished: false,
      link: "",
      description:
        "Most real value takes time and hard work. I'm not interested in less than that. I carry myself and my relationships with integrity so folks that work with me know what they will get, even if what I make is couture.",
    },
    {
      title: `The Engineer's Hippocratic Oath`,
      isFinished: false,
      link: "",
      description:
        "Engineers and doctors both hold priviledged knowledge. Clients and patients alike pay well for someone well educated with high integrity. I do everything within my power to do no harm with my keystrokes.",
    },
    {
      title: `David's Restaurant Framework for Case Analysis`,
      isFinished: false,
      link: "",
      description:
        "Folks who run restaurants do so out of a love for the craft of food and hospitality.  It's a hard business.  I believe that by putting your business into the framework of a restaurant, and being honest about the grease and grime, is pivotal to business success.",
    },
  ];

  interface Reading {
    title: string;
    author: string;
    link: string;
  }
  const readings: Reading[] = [
    // TODO: add links and write articles
    { title: "Unreasonable Hospitality", author: "Will Guidara", link: "" },
    {
      title: "ESP32-C3-Mini-1 Datasheet v1.6",
      author: "EspressIf Engineers",
      link: "",
    },
    { title: "Leonardo Da Vinci", author: "Walter Isaacson", link: "" },
  ];

  {
    /* TODO: create a useReducer for managing the reading progress of each piece */
  }

  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className="flex gap-2 items-center mb-2">
          <p className="text-sm">📝</p>
          <p className="italic">What I stand for in my work:</p>
        </div>
        <ul className="flex flex-col gap-4">
          {writings.map((writing) => (
            <li className="justify-center">
              <div className="flex flex-col gap-0.5">
                <p className="text-redSriracha underline font-semibold">
                  {writing.title}
                </p>
                <p className="text-sm">{writing.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex gap-2 items-center mb-2">
          <p className="text-sm">📚</p>
          <p className="italic">Here is what I am trying to read:</p>
        </div>
        <ul className="flex flex-col gap-5">
          {readings.map((reading) => (
            <li className="justify-center flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <p className="text-redSriracha underline font-semibold">
                  {reading.title}
                </p>
                <p className="text-right text-xs">{reading.author}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex relative gap-2">
                  <div className="h-1.5 w-60 rounded-sm bg-brownSriracha opacity-20"></div>
                  <div className="h-1.5 w-20 rounded-l-sm bg-brownSriracha absolute"></div>
                </div>
                <p className="text-xs italic">30% Complete</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
