export const Identities = () => {
  return (
    <div className="flex flex-col">
      <p className="text-lg font-semibold">I am Seattle based:</p>
      <ul className="list-disc ml-6 mt-1">
        <li className="mb-2">
          <div className="w-full justify-between flex">
            <div className="flex gap-2 align-middle">
              <p className="italic">Founder</p>
              <p>🧗🏻‍♂️</p>
              {/* i lead */}
            </div>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <p className="italic">UI/UX Designer</p>
              <p>👨🏻‍🎨</p>
              {/* i observe */}
            </div>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <p className="italic">Engineer</p>
              <p>🛠️</p>
              {/* i solve */}
            </div>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <p className="italic">Cyclist & Runner</p>
              <p>🚴🏻‍♂️ ... 🏃🏻‍♂️</p>
              {/* this is a lil mac reference */}
            </div>
          </div>
        </li>
        <li className="mb-2">
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <p className="italic">Practicing Christian</p>
              <p>✝️ 🏋🏻‍♂️</p>
              {/* and I am getting better everyday */}
            </div>
          </div>
        </li>
        <li>
          <div className="flex w-full justify-between">
            <div className="flex gap-2">
              <p className="italic">Home Chef</p>
              <p>👨🏻‍🍳</p>
              {/* i think good food is important */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
