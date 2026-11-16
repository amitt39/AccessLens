import { Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function InputSection() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUrl = (urlValue) => {
    setUrl(urlValue);
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const trimmedUrl = url.trim();

      if (!trimmedUrl) {
        setError("Enter a website address to start the accessibility scan.");
        return;
      }

      // Reject explicit unsupported schemes before adding a default protocol.
      if (
        /^[a-z][a-z\d+.-]*:/i.test(trimmedUrl) &&
        !/^https?:\/\//i.test(trimmedUrl)
      ) {
        setError(
          "Use a website URL that starts with http:// or https://. Other link types aren’t supported.",
        );
        return;
      }

      const normalizedUrl = /^https?:\/\//i.test(trimmedUrl)
        ? trimmedUrl
        : `https://${trimmedUrl}`;

      let parsedUrl;
      try {
        parsedUrl = new URL(normalizedUrl);
      } catch {
        setError(
          "That doesn’t look like a valid website address. Try a domain such as example.com.",
        );
        return;
      }

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        setError(
          "Use a website URL that starts with http:// or https://. Other link types aren’t supported.",
        );
        return;
      }

      const hostname = parsedUrl.hostname;
      const hostnameIsValid =
        hostname.length <= 253 &&
        hostname.includes(".") &&
        hostname
          .split(".")
          .every((label) => /^[a-z\d](?:[a-z\d-]*[a-z\d])?$/i.test(label));

      if (!hostnameIsValid) {
        setError(
          "Please enter a complete website address, such as example.com.",
        );
        return;
      }

      setUrl(parsedUrl.href);
      setError("");
      
      navigate("/scan", {
        state: { url: parsedUrl.href },
      });
    } catch (submissionError) {
      console.error("Unable to submit website URL", submissionError);
      setError(
        "We couldn’t start the scan right now. Please try again in a moment.",
      );
    }
  };

  return (
    <>
      <div className="mt-4 flex w-full max-w-2xl gap-2">
        <form
          className="flex w-full flex-col items-start gap-2 sm:flex-row"
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="relative min-w-0 flex-1">
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="website-url"
                type="url"
                value={url}
                onChange={(e) => {
                  handleUrl(e.target.value);
                }}
                className={`w-full rounded-xl border py-3 pl-12 pr-4 outline-none transition-colors focus:ring-2 focus:ring-[#14201a]/20 ${
                  error
                    ? "border-red-600 focus:border-red-600"
                    : "border-[#14201a] focus:border-[#14201a]"
                }`}
                placeholder="https://example.com"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "website-url-error" : undefined}
              />
            </div>
            {error && (
              <p
                id="website-url-error"
                className="mt-2 max-w-full text-left text-sm font-medium leading-5 text-red-700"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full shrink-0 cursor-pointer whitespace-nowrap rounded-xl border border-black bg-linear-to-b from-[#26352e] to-[#14201a] px-6 py-3 font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_10px_rgba(20,32,26,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_6px_16px_rgba(20,32,26,0.45)] active:translate-y-0 active:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14201a] sm:w-auto
  "
          >
            Scan Website
          </button>
        </form>
      </div>
    </>
  );
}
