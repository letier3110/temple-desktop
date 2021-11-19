import { ReactComponent as TempleIcon } from './createTemple.svg';
import { ReactComponent as ArrowBack } from './chevronLeft.svg';
import { ReactComponent as OkIcon } from './ok.svg';
import './main.css';

const CreateWallet = () => (
  <div className="pb-20 relative">
    <header className="bg-primary-orange Header_inner-shadow__1d-xa pb-20 -mb-20">
      <div className="w-full max-w-screen-sm mx-auto px-4 py-4">
        <div className="px-4">
          <div className="flex items-stretch">
            <a className="flex-shrink-0 pr-4" href="/fullpage.html#/">
              <div className="flex items-center">
                <TempleIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
    <div className="w-full max-w-screen-sm mx-auto px-4">
      <div
        className="bg-white rounded-md shadow-lg"
        style={{ minHeight: '20rem' }}
      >
        <div
          className="
                sticky
                z-20
                rounded-t
                shadow-sm
                bg-gray-100
                overflow-hidden
                p-1
                flex
                items-center
                transition
                ease-in-out
                duration-300
              "
          style={{ top: '-1px', minHeight: '2.75rem' }}
        >
          <div className="flex-1">
            <button
              className="
                    px-4
                    py-2
                    rounded
                    flex
                    items-center
                    text-gray-600 text-shadow-black text-sm
                    font-semibold
                    leading-none
                    hover:bg-black hover:bg-opacity-5
                    transition
                    duration-300
                    ease-in-out
                    opacity-90
                    hover:opacity-100
                  "
            >
              <ArrowBack />
              Back
            </button>
          </div>
          <div className="flex-1" />
        </div>
        <div className="p-4">
          <div className="py-4">
            <h1 className="mb-2 text-2xl font-light text-gray-700 text-center">
              Create a new Wallet
            </h1>
            <hr className="my-4" />
            <form className="w-full max-w-sm mx-auto my-8">
              <div className="w-full flex flex-col mb-8">
                <label className="mb-4 leading-tight flex flex-col">
                  <span className="text-base font-semibold text-gray-700">
                    Password
                  </span>
                  <span
                    className="mt-1 text-xs font-light text-gray-600"
                    style={{ maxWidth: '90%' }}
                  >
                    A password is used to protect the wallet.
                  </span>
                </label>
                <div className="relative mb-2 flex items-stretch">
                  <input
                    className="
                          appearance-none
                          w-full
                          py-3
                          pl-4
                          pr-4
                          border-2 border-gray-300
                          focus:border-primary-orange
                          bg-gray-100
                          focus:bg-transparent
                          focus:outline-none
                          focus:shadow-outline
                          transition
                          ease-in-out
                          duration-200
                          rounded-md
                          text-gray-700 text-lg
                          leading-tight
                          placeholder-alphagray
                        "
                    id="newwallet-password"
                    spellCheck="false"
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="********"
                    value=""
                  />
                </div>
              </div>
              <div className="w-full flex flex-col mb-8">
                <label className="mb-4 leading-tight flex flex-col">
                  <span className="text-base font-semibold text-gray-700">
                    Repeat Password
                  </span>
                  <span
                    className="mt-1 text-xs font-light text-gray-600"
                    style={{ maxWidth: '90%' }}
                  >
                    Please enter the password again.
                  </span>
                </label>
                <div className="relative mb-2 flex items-stretch">
                  <input
                    className="
                          appearance-none
                          w-full
                          py-3
                          pl-4
                          pr-4
                          border-2 border-gray-300
                          focus:border-primary-orange
                          bg-gray-100
                          focus:bg-transparent
                          focus:outline-none
                          focus:shadow-outline
                          transition
                          ease-in-out
                          duration-200
                          rounded-md
                          text-gray-700 text-lg
                          leading-tight
                          placeholder-alphagray
                        "
                    id="newwallet-repassword"
                    spellCheck="false"
                    autoComplete="off"
                    type="password"
                    name="repassword"
                    placeholder="********"
                    value=""
                  />
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <label
                  className="
                        mb-2
                        p-4
                        bg-gray-100
                        border-2 border-gray-300
                        rounded-md
                        overflow-hidden
                        cursor-pointer
                        flex
                        items-center
                      "
                >
                  <div
                    className="
                          h-6
                          w-6
                          flex-shrink-0
                          bg-black-40
                          border border-gray-400
                          rounded-md
                          overflow-hidden
                          disable-outline-for-click
                          transition
                          ease-in-out
                          duration-200
                          text-white
                          flex
                          justify-center
                          items-center
                        "
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      name="termsaccepted"
                    />
                    <OkIcon />
                  </div>
                  <div className="ml-4 leading-tight flex flex-col">
                    <span className="text-sm font-semibold text-gray-700">
                      Accept terms
                    </span>
                    <span className="mt-1 text-xs font-light text-gray-600">
                      I have read and agree to
                      <br />
                      the
                      <a
                        href="https://templewallet.com/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-secondary"
                      >
                        Terms of Usage
                      </a>
                      and
                      <a
                        href="https://templewallet.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-secondary"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                </label>
              </div>
              <button
                className="
                      relative
                      px-8
                      rounded
                      border-2
                      bg-primary-orange
                      border-primary-orange
                      flex
                      items-center
                      text-primary-orange-lighter text-base
                      font-semibold
                      transition
                      duration-200
                      ease-in-out
                      opacity-90
                      hover:opacity-100
                      focus:opacity-100
                      shadow-sm
                      hover:shadow
                      focus:shadow
                    "
                style={{ paddingTop: '0.625rem', paddingBottom: '0.625rem' }}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CreateWallet;
