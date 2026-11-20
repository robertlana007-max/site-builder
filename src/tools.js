// Tool metadata. The interactive part of each tool lives in src/tools/<slug>.html.
// To add a tool: add an entry here, add its HTML file, then run `node build.js`.
module.exports = [
  {
    slug: 'image-compressor', cat: 'Image tools', name: 'Image Compressor',
    title: 'Image Compressor - Reduce JPG, PNG & WebP Size Free',
    desc: 'Compress JPG, PNG and WebP images in your browser. Pick the quality, see the size saved and download. No upload, no sign-up.',
    card: 'Shrink JPG, PNG and WebP files without uploading them.',
    intro: 'Make image files smaller so they load faster and fit upload limits. Everything happens on your device, so your photos stay private.',
    steps: ['Click the box or drop an image onto it.', 'Move the quality slider until the size and the preview both look right.', 'Optionally set a max width to shrink large photos further.', 'Click Download image.'],
    faq: [
      ['Are my images uploaded to a server?', 'No. The image is compressed by your own browser and is never sent anywhere.'],
      ['Which quality setting should I use?', '60 to 80 percent is a good range for photos. Most people cannot see the difference, and the file is often less than half the original size.'],
      ['Why did my PNG become a JPG?', 'PNG is lossless, so it cannot be shrunk much by lowering quality. Converting to JPG or WebP gives far smaller files. Choose WebP if you need to keep transparency.']
    ]
  },
  {
    slug: 'image-resizer', cat: 'Image tools', name: 'Image Resizer',
    title: 'Image Resizer - Resize Photos to Any Pixel Size Free',
    desc: 'Resize an image to exact pixel dimensions online. Keep the aspect ratio or set a custom width and height. Runs in your browser.',
    card: 'Change an image to exact pixel dimensions.',
    intro: 'Resize a photo to the exact width and height you need for a profile picture, a form upload or a website.',
    steps: ['Choose an image.', 'Type the new width or height. With aspect ratio locked, the other side updates by itself.', 'Pick PNG, JPG or WebP.', 'Click Resize image, then Download.'],
    faq: [
      ['Will resizing reduce quality?', 'Making an image smaller keeps it sharp. Making it larger than the original will look soft, because the extra pixels have to be invented.'],
      ['What does "keep aspect ratio" do?', 'It keeps the shape of the picture the same so that people and objects are not stretched or squashed.'],
      ['Is there a size limit?', 'Output can be up to 10,000 pixels on each side. Very large images may be slow on older phones.']
    ]
  },
  {
    slug: 'qr-code-generator', cat: 'Generators', name: 'QR Code Generator',
    title: 'QR Code Generator - Create Free QR Codes Instantly',
    desc: 'Create a QR code for any link or text and download it as a PNG. Free, no sign-up, and the codes never expire.',
    card: 'Turn any link or text into a QR code PNG.',
    intro: 'Type a link or any text and get a QR code you can download and print. The code contains your text directly, so it never expires.',
    steps: ['Type or paste your link or text.', 'Choose the image size. Use 1024 px for printing.', 'Click Download PNG.'],
    faq: [
      ['Do these QR codes expire?', 'No. The text is stored inside the code itself. There is no redirect and no account, so it keeps working forever.'],
      ['What is error correction?', 'It is spare data that lets a code still scan when part of it is dirty or damaged. Higher levels survive more damage but make the pattern denser.'],
      ['Can I use the codes commercially?', 'Yes. You can use them on packaging, menus, posters and business cards at no cost.']
    ]
  },
  {
    slug: 'password-generator', cat: 'Generators', name: 'Password Generator',
    title: 'Password Generator - Strong Random Passwords',
    desc: 'Generate strong, random passwords with the length and characters you choose. Created on your device and never stored or sent.',
    card: 'Create strong random passwords on your device.',
    intro: 'Create a strong random password in one click. It is generated on your device with a cryptographic random source and is never saved or sent.',
    steps: ['Set the length. 16 or more is a good default.', 'Tick the character types the website allows.', 'Click Copy and paste it into your password manager.'],
    faq: [
      ['Is it safe to generate a password online?', 'This page creates the password inside your browser using the Web Crypto API. Nothing is sent over the internet.'],
      ['How long should a password be?', 'Use at least 12 characters for everyday accounts and 16 or more for email, banking and anything important.'],
      ['How do I remember random passwords?', 'You should not have to. Store them in a password manager and use a different password on every site.']
    ]
  },
  {
    slug: 'word-counter', cat: 'Text tools', name: 'Word Counter',
    title: 'Word Counter - Count Words & Characters Online',
    desc: 'Count words, characters, sentences and paragraphs as you type, with an estimated reading time. Free and private.',
    card: 'Count words, characters, sentences and reading time.',
    intro: 'Paste or type your text to see the word count, character count, sentences, paragraphs and reading time update live.',
    steps: ['Type or paste your text into the box.', 'Read the counts below. They update as you type.'],
    faq: [
      ['How is reading time calculated?', 'It assumes an average reading speed of 200 words per minute.'],
      ['Do spaces count as characters?', 'The Characters figure includes spaces. Without spaces shows the count with all spaces and line breaks removed.'],
      ['Is my text saved?', 'No. The text stays in your browser and disappears when you close the page.']
    ]
  },
  {
    slug: 'case-converter', cat: 'Text tools', name: 'Case Converter',
    title: 'Case Converter - UPPERCASE, lowercase, Title Case',
    desc: 'Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case or kebab-case with one click.',
    card: 'Switch text between upper, lower, title and code cases.',
    intro: 'Fix text typed with caps lock on, format a headline, or turn a phrase into a variable name.',
    steps: ['Paste your text.', 'Click the case you want.', 'Click Copy.'],
    faq: [
      ['What is title case?', 'Title case capitalises the first letter of every word, as in "The Quick Brown Fox".'],
      ['What are camelCase, snake_case and kebab-case?', 'They are ways of joining words without spaces, used for names in code, file names and URLs.'],
      ['Does it work with accented letters?', 'Yes. Upper and lower case conversion follows Unicode rules, so letters like é and ü are handled correctly.']
    ]
  },
  {
    slug: 'json-formatter', cat: 'Developer tools', name: 'JSON Formatter',
    title: 'JSON Formatter & Validator - Beautify or Minify JSON',
    desc: 'Format, validate and minify JSON online. Clear error messages show where the JSON is broken. Your data stays in the browser.',
    card: 'Beautify, validate and minify JSON.',
    intro: 'Paste JSON to make it readable, check that it is valid, or minify it. Your data is processed locally and never uploaded.',
    steps: ['Paste your JSON.', 'Click Format for readable output or Minify for the smallest output.', 'If it is invalid, the message shows what went wrong and where.'],
    faq: [
      ['Is my JSON sent to a server?', 'No. Parsing and formatting happen in your browser, so it is safe for API responses and config files.'],
      ['Why is my JSON invalid?', 'Common causes are a trailing comma, single quotes instead of double quotes, and keys without quotes.'],
      ['Does formatting change my data?', 'Only the whitespace changes. Note that duplicate keys collapse to the last value and very large numbers may lose precision, as with any standard JSON parser.']
    ]
  },
  {
    slug: 'age-calculator', cat: 'Calculators', name: 'Age Calculator',
    title: 'Age Calculator - Exact Age in Years, Months & Days',
    desc: 'Work out an exact age in years, months and days from a date of birth, plus total weeks, total days and days to the next birthday.',
    card: 'Exact age in years, months and days.',
    intro: 'Enter a date of birth to get the exact age today or on any other date.',
    steps: ['Pick the date of birth.', 'Leave the second date as today, or change it to check an age on another date.'],
    faq: [
      ['How is age calculated?', 'Full years are counted first, then full months, then the days left over, the same way ages are counted on official forms.'],
      ['How are leap-year birthdays handled?', 'A birthday on 29 February is treated as 28 February in years that are not leap years.'],
      ['Can I calculate the time between any two dates?', 'Yes. Put the earlier date in the first box and the later date in the second.']
    ]
  },
  {
    slug: 'percentage-calculator', cat: 'Calculators', name: 'Percentage Calculator',
    title: 'Percentage Calculator - Percent Of, Change & Ratio',
    desc: 'Three percentage calculators in one: find X% of a number, what percent one number is of another, and percentage increase or decrease.',
    card: 'Percent of a number, ratio and percentage change.',
    intro: 'Answer the three most common percentage questions without remembering the formulas.',
    steps: ['Choose the question that matches yours.', 'Fill in the two numbers.', 'The answer appears right away.'],
    faq: [
      ['How do I calculate a percentage of a number?', 'Divide the percentage by 100 and multiply by the number. For example 15% of 200 is 0.15 × 200 = 30.'],
      ['How do I calculate percentage change?', 'Subtract the old value from the new value, divide by the old value, then multiply by 100.'],
      ['How do I work out a discount?', 'Use the first calculator to find the discount amount, then subtract it from the original price.']
    ]
  },
  {
    slug: 'loan-calculator', cat: 'Finance calculators', name: 'Loan Calculator',
    title: 'Loan & EMI Calculator - Monthly Payment and Interest',
    desc: 'Calculate the monthly payment (EMI), total interest and a yearly breakdown for a mortgage, car loan or personal loan.',
    card: 'Monthly payment, total interest and yearly schedule.',
    intro: 'See what a loan really costs: the monthly payment, the total interest and how the balance falls year by year.',
    steps: ['Enter the amount you want to borrow.', 'Enter the yearly interest rate and the term in years.', 'Read the monthly payment and scroll down for the yearly breakdown.'],
    faq: [
      ['What formula is used?', 'The standard fixed-rate amortisation formula: payment = P × r ÷ (1 − (1 + r)^−n), where r is the monthly rate and n is the number of monthly payments.'],
      ['Does this include taxes, insurance or fees?', 'No. It covers principal and interest only. Your lender may add other charges.'],
      ['Is this financial advice?', 'No. The figures are estimates to help you compare options. Confirm exact numbers with your lender.']
    ]
  },
  {
    slug: 'bmi-calculator', cat: 'Calculators', name: 'BMI Calculator',
    title: 'BMI Calculator - Body Mass Index (Metric & Imperial)',
    desc: 'Calculate your body mass index in metric or imperial units and see the healthy weight range for your height.',
    card: 'Body mass index and healthy weight range.',
    intro: 'Enter your weight and height to see your BMI, its category and the healthy weight range for your height.',
    steps: ['Choose metric or imperial units.', 'Enter your weight and height.', 'Read your BMI and category.'],
    faq: [
      ['How is BMI calculated?', 'BMI is weight in kilograms divided by height in metres squared.'],
      ['What is a healthy BMI?', 'For adults, the World Health Organization classes 18.5 to 24.9 as a healthy weight, 25 to 29.9 as overweight and 30 or more as obese.'],
      ['Is BMI accurate for everyone?', 'No. It can mislead for athletes, children, older adults and pregnant women. Speak to a doctor for personal advice.']
    ]
  },
  {
    slug: 'unit-converter', cat: 'Calculators', name: 'Unit Converter',
    title: 'Unit Converter - Length, Weight, Temperature & More',
    desc: 'Convert length, weight, temperature, area, volume, speed, data and time units instantly. Free and works offline once loaded.',
    card: 'Length, weight, temperature, area, volume and more.',
    intro: 'Convert between metric and imperial units across eight categories.',
    steps: ['Pick a category.', 'Enter a value and choose the units to convert from and to.', 'Use Swap units to reverse the conversion.'],
    faq: [
      ['Which units are supported?', 'Length, weight, temperature, area, volume, speed, digital data and time, including both metric and imperial units.'],
      ['How accurate are the results?', 'Conversions use the exact official definitions, such as 1 inch = 2.54 cm, and are shown to 10 significant digits.'],
      ['Is a kilobyte 1000 or 1024 bytes?', 'This converter uses 1024, the convention used by most operating systems.']
    ]
  },
  {
    slug: 'image-converter', cat: 'Image tools', name: 'Image Converter',
    title: 'Image Converter - PNG to JPG, JPG to PNG, WebP Free',
    desc: 'Convert images between PNG, JPG and WebP in your browser. PNG to JPG, JPG to PNG, WebP to JPG and more. No upload, no sign-up.',
    card: 'Convert between PNG, JPG and WebP.',
    intro: 'Change an image from one format to another, such as PNG to JPG or WebP to PNG. The conversion happens on your device.',
    steps: ['Click the box or drop an image onto it.', 'Choose the format you want.', 'For JPG or WebP, set the quality.', 'Click Convert, then Download.'],
    faq: [
      ['Which format should I choose?', 'Use JPG for photos, PNG for screenshots, logos and anything with transparency, and WebP when you want the smallest file for a website.'],
      ['What happens to transparent areas in a JPG?', 'JPG cannot store transparency, so transparent areas become white.'],
      ['Is the original image changed?', 'No. Your original file is left untouched and a new file is created for download.']
    ]
  },
  {
    slug: 'mortgage-calculator', cat: 'Finance calculators', name: 'Mortgage Calculator',
    title: 'Mortgage Calculator - Monthly Payment with Tax & Insurance',
    desc: 'Estimate your monthly mortgage payment including principal, interest, property tax, home insurance and HOA fees.',
    card: 'Monthly house payment with tax and insurance.',
    intro: 'Estimate the full monthly cost of a home loan: principal and interest plus property tax, insurance and HOA fees.',
    steps: ['Enter the home price and your down payment.', 'Enter the interest rate and choose the loan term.', 'Add yearly property tax and insurance, and monthly HOA fees if any.', 'Read the total monthly payment.'],
    faq: [
      ['What is included in the monthly payment?', 'Principal and interest on the loan, plus one twelfth of the yearly property tax and insurance, plus any monthly HOA fee.'],
      ['Does it include mortgage insurance (PMI)?', 'No. If your down payment is under 20 percent your lender may add PMI, which is not included here.'],
      ['How much difference does the term make?', 'A shorter term has a higher monthly payment but far less total interest. Switch between 30 and 15 years to compare.'],
      ['Is this financial advice?', 'No. It is an estimate for comparing options. Ask a lender for an exact quote.']
    ]
  },
  {
    slug: 'compound-interest-calculator', cat: 'Finance calculators', name: 'Compound Interest Calculator',
    title: 'Compound Interest Calculator - Savings & Investment Growth',
    desc: 'See how savings or investments grow with compound interest and monthly contributions, with a year-by-year table.',
    card: 'How savings grow with interest and monthly deposits.',
    intro: 'See how money grows over time when interest is earned on interest, with optional monthly contributions.',
    steps: ['Enter your starting amount and monthly contribution.', 'Enter the yearly interest rate and the number of years.', 'Choose how often interest is compounded.', 'Read the future value and the year-by-year table.'],
    faq: [
      ['What is compound interest?', 'It is interest earned on both your original money and the interest already added, so growth speeds up over time.'],
      ['When are contributions added?', 'At the end of each month.'],
      ['Does this account for inflation or tax?', 'No. Results are before inflation, fees and taxes, and real investment returns vary from year to year.']
    ]
  },
  {
    slug: 'salary-calculator', cat: 'Finance calculators', name: 'Salary Calculator',
    title: 'Salary Calculator - Hourly to Salary & Salary to Hourly',
    desc: 'Convert an hourly wage to yearly salary or a salary to hourly pay. See hourly, daily, weekly, biweekly, monthly and yearly amounts.',
    card: 'Convert hourly pay to salary and back.',
    intro: 'Convert pay between hourly, daily, weekly, biweekly, monthly and yearly amounts.',
    steps: ['Enter what you are paid and choose per hour, day, week, month or year.', 'Adjust hours per week, days per week and weeks per year if they differ from the defaults.', 'Read every pay period at once.'],
    faq: [
      ['How is hourly pay converted to salary?', 'Hourly pay × hours per week × weeks per year. At 40 hours and 52 weeks, 25 an hour is 52,000 a year.'],
      ['Are these amounts after tax?', 'No. They are gross amounts before tax and deductions.'],
      ['What if I get unpaid time off?', 'Lower the weeks per year. For example, use 50 if you take two unpaid weeks.']
    ]
  },
  {
    slug: 'sales-tax-calculator', cat: 'Finance calculators', name: 'Sales Tax Calculator',
    title: 'Sales Tax & VAT Calculator - Add or Remove Tax',
    desc: 'Add sales tax or VAT to a price, or remove tax from a total to find the price before tax. Works with any tax rate.',
    card: 'Add tax to a price or remove it from a total.',
    intro: 'Add sales tax, VAT or GST to a price, or work backwards from a total to find the price before tax.',
    steps: ['Enter the amount and the tax rate.', 'Choose whether the amount is before tax or already includes tax.', 'Read the price before tax, the tax and the total.'],
    faq: [
      ['How do I remove tax from a total?', 'Divide the total by 1 plus the tax rate as a decimal. For a total of 120 with 20% tax, 120 ÷ 1.20 = 100.'],
      ['Does this work for VAT and GST?', 'Yes. Sales tax, VAT and GST are all a percentage added to a price, so the maths is the same.'],
      ['What is my tax rate?', 'Rates depend on your country, state and sometimes city. Check your local tax authority for the current rate.']
    ]
  },
  {
    slug: 'discount-calculator', cat: 'Finance calculators', name: 'Discount Calculator',
    title: 'Discount Calculator - Sale Price & Savings',
    desc: 'Work out the sale price and how much you save from a percent-off discount, with optional sales tax.',
    card: 'Sale price and savings from a percent off.',
    intro: 'Find the price after a percent-off discount and how much you save.',
    steps: ['Enter the original price.', 'Enter the discount percentage.', 'Optionally add sales tax to see the final amount you pay.'],
    faq: [
      ['How is the sale price calculated?', 'Multiply the price by the discount percent divided by 100 to get the saving, then subtract it from the price.'],
      ['Is tax applied before or after the discount?', 'After. Tax is calculated on the discounted price, which is how most shops charge it.'],
      ['How do I stack two discounts?', 'Apply the first discount, then enter the result as the new original price and apply the second.']
    ]
  },
  {
    slug: 'tip-calculator', cat: 'Finance calculators', name: 'Tip Calculator',
    title: 'Tip Calculator - Tip Amount & Bill Split',
    desc: 'Calculate the tip and total for a bill and split it evenly between any number of people.',
    card: 'Tip amount, total and split per person.',
    intro: 'Work out the tip and total for a bill, and split it evenly between friends.',
    steps: ['Enter the bill amount.', 'Pick a tip percentage or type your own.', 'Enter how many people are splitting the bill.'],
    faq: [
      ['How much should I tip?', 'It depends on the country. In the United States 15 to 20 percent is usual at restaurants. In many other countries tipping is smaller or optional.'],
      ['Is the tip worked out before or after tax?', 'On whatever amount you enter. Enter the pre-tax subtotal if you want to tip on that.'],
      ['How is the bill split?', 'The total including tip is divided equally by the number of people.']
    ]
  },
  {
    slug: 'days-between-dates', cat: 'Calculators', name: 'Days Between Dates',
    title: 'Days Between Dates Calculator - Count Days & Weekdays',
    desc: 'Count the days, weeks, months and working days between two dates. Optionally include the end date.',
    card: 'Count days, weeks and weekdays between two dates.',
    intro: 'Count how many days, weeks and weekdays there are between any two dates.',
    steps: ['Pick the start date and the end date.', 'Tick the box if the end date should be counted as a full day.', 'Read the totals.'],
    faq: [
      ['Is the end date included?', 'Not by default, which matches how most deadlines are counted. Tick the box to include it.'],
      ['Are public holidays removed from weekdays?', 'No. Weekdays are every Monday to Friday in the range. Holidays differ by country, so subtract them yourself.'],
      ['Does it handle leap years?', 'Yes. Real calendar dates are used, so 29 February is counted when it exists.']
    ]
  },
  {
    slug: 'random-number-generator', cat: 'Generators', name: 'Random Number Generator',
    title: 'Random Number Generator - Pick Numbers in Any Range',
    desc: 'Generate one or many random numbers in any range, with or without repeats. Good for raffles, games and picking winners.',
    card: 'Random numbers in any range, with or without repeats.',
    intro: 'Pick one or many random whole numbers between two values. Useful for draws, games and decisions.',
    steps: ['Enter the lowest and highest numbers.', 'Choose how many numbers you want.', 'Tick No repeats for a draw where each number can appear once.', 'Click Generate.'],
    faq: [
      ['How random are the numbers?', 'They come from your browser\'s cryptographic random source, and every number in the range is equally likely.'],
      ['Are both end numbers included?', 'Yes. A range of 1 to 10 can return 1, 10 or anything in between.'],
      ['Can I use it for a giveaway?', 'Yes. Number your entries, set the range to match, and generate the winners with No repeats ticked.']
    ]
  },
  {
    slug: 'uuid-generator', cat: 'Generators', name: 'UUID Generator',
    title: 'UUID Generator - Random Version 4 UUIDs / GUIDs',
    desc: 'Generate random version 4 UUIDs (GUIDs) one at a time or in bulk. Uppercase and no-hyphen options. Created in your browser.',
    card: 'Random v4 UUIDs, one or in bulk.',
    intro: 'Create random version 4 UUIDs, also known as GUIDs, for databases, tests and config files.',
    steps: ['Choose how many UUIDs you need.', 'Tick the options for uppercase or no hyphens if you need them.', 'Click Copy all.'],
    faq: [
      ['What is a UUID?', 'A 128-bit identifier written as 32 hexadecimal digits. It is designed to be unique without a central authority handing out numbers.'],
      ['Can two UUIDs be the same?', 'In theory yes, but version 4 has 122 random bits, so a collision is so unlikely it can be ignored in practice.'],
      ['Is a GUID the same as a UUID?', 'Yes. GUID is the name Microsoft uses for the same thing.']
    ]
  },
  {
    slug: 'lorem-ipsum-generator', cat: 'Generators', name: 'Lorem Ipsum Generator',
    title: 'Lorem Ipsum Generator - Placeholder Text',
    desc: 'Generate lorem ipsum placeholder text by paragraphs, sentences or words and copy it with one click.',
    card: 'Placeholder text by paragraph, sentence or word.',
    intro: 'Generate placeholder text for designs, mock-ups and layouts.',
    steps: ['Choose how many paragraphs, sentences or words you need.', 'Click Generate for a fresh version.', 'Click Copy.'],
    faq: [
      ['What is lorem ipsum?', 'It is scrambled Latin-like text that designers use to fill a layout before the real words are ready.'],
      ['Why not use real text?', 'Readable text distracts people into reading it. Placeholder text keeps attention on the design.'],
      ['Can I use the text freely?', 'Yes. Lorem ipsum is not copyrighted.']
    ]
  },
  {
    slug: 'remove-duplicate-lines', cat: 'Text tools', name: 'Remove Duplicate Lines',
    title: 'Remove Duplicate Lines - Clean Up Lists Online',
    desc: 'Remove duplicate lines from a list, with options to ignore case, trim spaces, drop empty lines and sort alphabetically.',
    card: 'Delete repeated lines from any list.',
    intro: 'Clean up a list of emails, keywords or names by removing lines that appear more than once.',
    steps: ['Paste your list with one item on each line.', 'Choose the options you want.', 'Click Remove duplicates, then Copy.'],
    faq: [
      ['Which copy of a duplicate is kept?', 'The first one. Later copies are removed and the original order is kept unless you choose to sort.'],
      ['Are "Apple" and "apple" duplicates?', 'Only when Ignore upper/lower case is ticked.'],
      ['Is there a limit on list size?', 'There is no fixed limit. Lists with hundreds of thousands of lines work on most devices.']
    ]
  },
  {
    slug: 'base64-encoder', cat: 'Developer tools', name: 'Base64 Encoder / Decoder',
    title: 'Base64 Encode & Decode - Free Online Tool',
    desc: 'Encode text to Base64 or decode Base64 back to text. Full UTF-8 support, including emoji. Runs in your browser.',
    card: 'Encode text to Base64 and decode it back.',
    intro: 'Convert text to Base64 and back. Accented letters, non-Latin scripts and emoji are handled correctly.',
    steps: ['Paste your text or Base64 string.', 'Click Encode or Decode.', 'Click Copy.'],
    faq: [
      ['What is Base64 used for?', 'It turns any data into plain letters and digits so it can travel safely in places that only accept text, such as email, JSON and data URLs.'],
      ['Is Base64 encryption?', 'No. Anyone can decode it. Do not use it to hide passwords or secrets.'],
      ['Does it support URL-safe Base64?', 'Decoding accepts both the standard and URL-safe alphabets, with or without padding.']
    ]
  },
  {
    slug: 'url-encoder', cat: 'Developer tools', name: 'URL Encoder / Decoder',
    title: 'URL Encode & Decode - Percent-Encoding Tool',
    desc: 'Encode text for safe use in a URL or decode percent-encoded URLs back to readable text.',
    card: 'Percent-encode and decode URLs.',
    intro: 'Make text safe to put in a link, or turn an encoded link full of % signs back into readable text.',
    steps: ['Paste your text or URL.', 'Tick Keep URL structure when encoding a whole link.', 'Click Encode or Decode.'],
    faq: [
      ['What is URL encoding?', 'It replaces characters that are not allowed in a URL, such as spaces and symbols, with a % sign followed by a code. A space becomes %20.'],
      ['When should I keep the URL structure?', 'Tick it for a complete link so that characters like : / ? and & keep their meaning. Leave it unticked for a single value such as a search term.'],
      ['Why does decoding fail?', 'The text has a % that is not followed by two valid hexadecimal digits.']
    ]
  },
  {
    slug: 'hash-generator', cat: 'Developer tools', name: 'Hash Generator',
    title: 'SHA-256 Hash Generator - SHA-1, SHA-384, SHA-512',
    desc: 'Generate SHA-256, SHA-1, SHA-384 and SHA-512 hashes of any text instantly. Computed in your browser, nothing is uploaded.',
    card: 'SHA-1, SHA-256, SHA-384 and SHA-512 of any text.',
    intro: 'Calculate SHA hashes of any text as you type. The text never leaves your browser.',
    steps: ['Type or paste your text.', 'The four hashes update as you type.', 'Click Copy next to the one you need.'],
    faq: [
      ['What is a hash?', 'A fixed-length fingerprint of some data. The same input always gives the same hash, and a tiny change gives a completely different one.'],
      ['Can a hash be reversed?', 'No. Hashes are one-way. The original text cannot be calculated from the hash.'],
      ['Which one should I use?', 'SHA-256 is the usual choice. SHA-1 is no longer considered secure and is included only for checking old values.']
    ]
  },
  {
    slug: 'color-converter', cat: 'Developer tools', name: 'Color Converter',
    title: 'Color Converter - HEX to RGB, RGB to HEX, HSL',
    desc: 'Convert colors between HEX, RGB and HSL with a live preview and color picker. Copy any format with one click.',
    card: 'Convert between HEX, RGB and HSL.',
    intro: 'Pick a color or type a code to convert between HEX, RGB and HSL.',
    steps: ['Use the color picker or type a HEX, RGB or HSL value.', 'Check the preview.', 'Click Copy next to the format you need.'],
    faq: [
      ['What formats can I type?', 'HEX such as #4f46e5 or #fff, RGB such as rgb(79, 70, 229), and HSL such as hsl(243, 75%, 59%).'],
      ['What is the difference between RGB and HSL?', 'RGB describes a color by its red, green and blue light. HSL describes it by hue, saturation and lightness, which is easier to adjust by eye.'],
      ['Why does HSL change slightly when converted back?', 'HSL values are rounded to whole numbers, so a round trip can shift a color by one step.']
    ]
  }
];
