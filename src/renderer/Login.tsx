import { Link } from 'react-router-dom';
import { ReactComponent as TempleIcon } from './loginTemple.svg';
import { ReactComponent as LedgerIcon } from './ledger.svg';
import { ReactComponent as ImportIcon } from './import.svg';
import { ReactComponent as CreateWalletIcon } from './createWallet.svg';
import './main.css';

const Login = () => (
  <div
    className="
          min-h-screen
          w-full
          max-w-screen-md
          mx-auto
          px-4
          flex flex-col
          items-center
          justify-center
        "
  >
    <div className="-mt-32 mb-6 text-2xl text-gray-600 font-light">
      Welcome to
    </div>
    <TempleIcon />
    <div className="w-full my-4 flex items-stretch">
      <div className="w-1/2 p-4">
        <Link
          className="
                relative
                block
                w-full
                pb-2/3
                bg-primary-orange
                overflow-hidden
                rounded-lg
                transition
                duration-300
                ease-in-out
                transform
                hover:scale-110
                focus:scale-110
                shadow-md
                hover:shadow-lg
                focus:shadow-lg
              "
          to="/import-wallet"
        >
          <div className="absolute inset-0 p-1">
            <div
              className="
                    w-full
                    h-full
                    overflow-hidden
                    rounded-md
                    px-10
                    py-4
                    flex flex-col
                    shadow-inner
                    bg-primary-orange-lighter
                    text-primary-orange text-shadow-black-orange
                  "
            >
              <div className="flex-1 flex flex-col items-center justify-end">
                <ImportIcon className="transform rotate-90 transform scale-125 stroke-current" />
              </div>
              <h1 className="pb-1 text-xl font-semibold text-center">
                Import existing Wallet
              </h1>
              <div className="flex-1">
                <p className="my-1 text-center text-xs text-primary-orange">
                  Already have a wallet? Import it using your seed phrase or
                  encrypted keystore file
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-1/2 p-4">
        <Link
          className="
                relative
                block
                w-full
                pb-2/3
                bg-primary-orange
                overflow-hidden
                rounded-lg
                transition
                duration-300
                ease-in-out
                transform
                hover:scale-110
                focus:scale-110
                shadow-md
                hover:shadow-lg
                focus:shadow-lg
              "
          to="/create-wallet"
        >
          <div className="absolute inset-0 p-1">
            <div
              className="
                    w-full
                    h-full
                    overflow-hidden
                    rounded-md
                    px-10
                    py-4
                    flex flex-col
                    text-white text-shadow-black-orange
                  "
            >
              <div className="flex-1 flex flex-col items-center justify-end">
                <CreateWalletIcon />
              </div>
              <h1 className="pb-1 text-xl font-semibold text-center">
                Create a new Wallet
              </h1>
              <div className="flex-1">
                <p
                  className="
                        my-1
                        text-center text-xs text-primary-orange-lighter
                      "
                >
                  New to Temple Wallet? Lets set it up! This will create a new
                  wallet and seed phrase
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
    <div className="mt-12 mb-4 text-base text-gray-600 font-light">
      <p className="mb-2 text-lg">
        Create the Temple wallet account and you may:
      </p>
      <p className="mb-1 flex items-center">
        <span className="text-lg pr-2">•</span>work with your
        <LedgerIcon />
        Ledger device
      </p>
      <p className="mb-1 flex items-center">
        <span className="text-lg pr-2">•</span>send and receive any Tezos based
        tokens
      </p>
      <p className="mb-1 flex items-center">
        <span className="text-lg pr-2">•</span>connect and interact with Tezos
        dApps
      </p>
    </div>
  </div>
);

export default Login;
