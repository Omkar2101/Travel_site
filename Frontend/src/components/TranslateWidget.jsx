import React, { useEffect, useState, useCallback } from 'react';

const GoogleTranslate = () => {
  const [open, setOpen] = useState(false);
  const [scriptId, setScriptId] = useState('');

  // Function to load the Google Translate script
  const loadGoogleTranslate = (id) => {
    if (!document.getElementById(id)) {
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.id = id;
      document.body.appendChild(script);
    }
  };

  // Function to initialize Google Translate
  const initializeGoogleTranslate = useCallback(() => {
    window.googleTranslateElementInit = () => {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        translateElement.innerHTML = '';
      }

      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr,it',
      }, 'google_translate_element');
    };
  }, []);

  const handleTranslate = () => {
    if (!open) {
      const id = `google-translate-script-${Date.now()}`;
      setScriptId(id);
      loadGoogleTranslate(id);
      initializeGoogleTranslate();
    } else {
      const scriptElement = document.getElementById(scriptId);
      if (scriptElement) {
        scriptElement.remove();
      }
      setScriptId('');
    }
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      initializeGoogleTranslate();
    }
  }, [open, initializeGoogleTranslate]);

  return (
    <>
      <button
        onClick={handleTranslate}
        className="px-6 py-2 bg-blue-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
      >
        Translate
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
          <div className="my-4 p-2 rounded-lg shadow-lg bg-white border border-gray-300 max-w-md w-full relative">
            <button
              aria-controls="drawer-navigation"
              onClick={handleTranslate}
              type="button"
              className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 111.414 1.414L11.414 10l4.293 4.293a1 1 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">Select Language</h2>
            <div id="google_translate_element" className="flex justify-center p-2"></div>
          </div>
        </div>
      )}

      <style jsx>{`
        body { top: 0px !important; }

        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-balloon-frame {
          display: none !important;
        }

        .goog-te-menu2 {
          display: none !important;
        }

        #google_translate_element select {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 8px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        #google_translate_element select:hover {
          border-color: #4A90E2;
        }
      `}</style>
    </>
  );
};

export default GoogleTranslate;
