import React, {useState, useEffect} from 'react';

import Toggle from './components/Toggle';

const App = () => {
  const [followersNum, setFollowersNum] = useState('50000');
  const [price, setPrice] = useState(0);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  useEffect(() => {
    const price = Math.round(0.00016 * +followersNum);
    isYearlyBilling ? setPrice(price) : setPrice(price * (1 - 0.25));
  }, [followersNum, isYearlyBilling]);

  return (
    <div className="flex flex-col px-8 py-16 items-center bg-pattern bg-cover h-screen">
      <h1 className="font-bold text-xl text-dark-desaturated-blue mb-4">Simple, traffic based pricing</h1>
      <p className="text-sm text-grayish-blue">Sign-up for our 30-day trial.</p>
      <p className="text-sm text-grayish-blue">No credit card required.</p>
      <div className="flex flex-col items-center bg-white p-8 mt-12 rounded-md shadow-md w-full mb-8 sm:w-1/2">
        <span className="text-xs text-grayish-blue font-bold uppercase mb-8">{`${followersNum.slice(0,-3)}K`} Pageviews</span>
        <input
          onChange={e => setFollowersNum(e.target.value)}
          type="range"
          name="price"
          min="50000"
          max="1000000"
          step="50000"
        />
        <div className="flex flex-row items-center mt-8">
          <span className="font-bold text-4xl text-dark-desaturated-blue mr-2">$ {price}</span>
          <span className="text-sm text-grayish-blue">/month</span>
        </div>
        <div className="flex flex-row items-center justify-center my-4 py-8 w-full border-b-2 mb-8">
          <span className="text-xs text-grayish-blue">Monthly billing</span>
          <Toggle isYearlyBilling={isYearlyBilling} setIsYearlyBilling={setIsYearlyBilling} />
          <span className="text-xs text-grayish-blue">Yearly billing</span>
          <span className="rounded-full bg-light-grayish-red font-bold text-xs text-light-red px-2 py-1 sm:ml-4">-25%</span>
        </div>
        <div className="flex flex-col items-center justify-between w-full sm:flex-row">
          <div className="flex flex-col">
            <span className="text-sm text-grayish-blue mb-2">✓ Unlimited websites</span>
            <span className="text-sm text-grayish-blue mb-2">✓ 100% data ownership</span>
            <span className="text-sm text-grayish-blue mb-4 sm:mb-0">✓ Email reports</span>
          </div>
          <button className="rounded-full bg-dark-desaturated-blue text-white py-4 px-12 mt-4 sm:mt-0">Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
