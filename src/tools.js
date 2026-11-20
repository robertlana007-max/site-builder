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
    slug: 'age-calculator', cat: 'Time tools', name: 'Age Calculator',
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
      ['Is a kilobyte 1000 or 1024 bytes?', 'Both are used, so the converter has both: Kilobyte (kB), Megabyte (MB) and so on use 1000, and Kibibyte (KiB), Mebibyte (MiB) and so on use 1024, as Windows does.']
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
      ['How is the bill split?', 'The total including tip is divided equally by the number of people. If it does not divide evenly to the cent, some people pay one cent more so the shares add up exactly to the total.']
    ]
  },
  {
    slug: 'days-between-dates', cat: 'Time tools', name: 'Days Between Dates',
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
    desc: 'Generate SHA-256, MD5, SHA-1, SHA-384 and SHA-512 hashes of any text or file instantly. Computed in your browser, nothing is uploaded.',
    card: 'MD5, SHA-1, SHA-256, SHA-384 and SHA-512 of text or files.',
    intro: 'Calculate MD5 and SHA hashes of any text as you type, or of a file. Nothing leaves your browser.',
    steps: ['Type or paste your text, or choose a file.', 'The five hashes update as you type.', 'Click Copy next to the one you need.'],
    faq: [
      ['What is a hash?', 'A fixed-length fingerprint of some data. The same input always gives the same hash, and a tiny change gives a completely different one.'],
      ['Can a hash be reversed?', 'No. Hashes are one-way. The original text cannot be calculated from the hash.'],
      ['Which one should I use?', 'SHA-256 is the usual choice. MD5 and SHA-1 are no longer considered secure and are included only for checksums and old values.']
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
  },
  {
    slug: 'merge-pdf', cat: 'PDF tools', name: 'Merge PDF',
    title: 'Merge PDF - Combine PDF Files Free, No Upload',
    desc: 'Combine several PDF files into one, in the order you choose. Runs in your browser, so your files are never uploaded. Free, no sign-up.',
    card: 'Combine several PDFs into one file.',
    intro: 'Join two or more PDF files into a single document. The files are merged on your own device and are never sent to a server.',
    steps: ['Click the box or drop your PDF files onto it.', 'Use the arrows to put the files in the right order.', 'Click Merge PDFs.', 'Click Download merged PDF.'],
    faq: [
      ['Are my PDFs uploaded?', 'No. The files are read and merged by your browser. They never leave your device.'],
      ['How many files can I merge?', 'There is no fixed limit. Very large files may be slow on a phone because all the work happens on your device.'],
      ['Can I merge password-protected PDFs?', 'No. Remove the password first, then merge.'],
      ['Does merging reduce quality?', 'No. Pages are copied as they are, without re-compressing anything.']
    ]
  },
  {
    slug: 'split-pdf', cat: 'PDF tools', name: 'Split PDF',
    title: 'Split PDF - Extract Pages from a PDF Free',
    desc: 'Extract selected pages from a PDF into a new file, or split every page into its own PDF. Works in your browser with no upload.',
    card: 'Extract pages or split into single-page PDFs.',
    intro: 'Pull out the pages you need from a PDF, or split it into one file per page.',
    steps: ['Choose a PDF.', 'Type the pages you want, such as 1-3, 5.', 'Choose one PDF or a separate PDF for every page.', 'Click Split PDF, then Download.'],
    faq: [
      ['How do I write page ranges?', 'Use commas between pages and a hyphen for a range. For example 1-3, 5 means pages 1, 2, 3 and 5.'],
      ['Can I change the page order?', 'Yes. Pages come out in the order you type them, so 5, 1-3 puts page 5 first.'],
      ['What do I get when I split every page?', 'A ZIP file containing one PDF for each page you listed.']
    ]
  },
  {
    slug: 'compress-pdf', cat: 'PDF tools', name: 'Compress PDF',
    title: 'Compress PDF - Reduce PDF File Size Free, No Upload',
    desc: 'Make a PDF smaller for email or upload limits. Best for scanned documents and image-heavy PDFs. Runs in your browser, no upload.',
    card: 'Shrink scanned and image-heavy PDFs.',
    intro: 'Reduce the size of a PDF so it fits email and upload limits. Works best on scans and PDFs with many photos.',
    steps: ['Choose a PDF.', 'Pick a compression level. Start with Medium.', 'Click Compress PDF and compare the sizes.', 'Download the result if you are happy with it.'],
    faq: [
      ['How does this compress the PDF?', 'Each page is redrawn as a compressed picture and a new PDF is built from those pictures.'],
      ['Will I still be able to select text?', 'No. Pages become images, so text can no longer be selected or searched. Keep your original if you need that.'],
      ['Why did my file not get smaller?', 'PDFs that are mostly text are already tiny. Turning them into pictures makes them larger, so the tool tells you to keep the original.'],
      ['Is my file uploaded?', 'No. Compression happens on your device.']
    ]
  },
  {
    slug: 'jpg-to-pdf', cat: 'PDF tools', name: 'JPG to PDF',
    title: 'JPG to PDF - Convert Images to PDF Free',
    desc: 'Turn JPG, PNG or WebP images into a PDF, one image per page. Choose the page size and order. No upload, no sign-up.',
    card: 'Turn photos and scans into one PDF.',
    intro: 'Combine photos, screenshots or scanned pages into a single PDF, with one image on each page.',
    steps: ['Click the box or drop your images onto it.', 'Use the arrows to set the page order.', 'Choose a page size and margin.', 'Click Create PDF, then Download.'],
    faq: [
      ['Which image types are supported?', 'JPG and PNG are placed in the PDF unchanged. WebP and other types your browser can open are converted to JPG first.'],
      ['Which page size should I pick?', 'Choose A4 or US Letter for printing. Choose "Same as each image" to keep every picture at its full size.'],
      ['Does it reduce image quality?', 'JPG and PNG images are embedded as they are, with no extra compression.']
    ]
  },
  {
    slug: 'pdf-to-jpg', cat: 'PDF tools', name: 'PDF to JPG',
    title: 'PDF to JPG - Convert PDF Pages to Images Free',
    desc: 'Convert every page of a PDF into a JPG or PNG image and download them one by one or as a ZIP. No upload, no sign-up.',
    card: 'Save every PDF page as a JPG or PNG.',
    intro: 'Turn each page of a PDF into a picture you can share, post or paste into a document.',
    steps: ['Choose a PDF.', 'Pick JPG or PNG and a resolution.', 'Click Convert to images.', 'Tap a page to save it, or download them all as a ZIP.'],
    faq: [
      ['JPG or PNG?', 'JPG gives smaller files and suits most pages. PNG is sharper for text and diagrams but the files are larger.'],
      ['Which resolution should I use?', 'High is right for most uses. Use Very high for printing or zooming in, and Standard when you need small files.'],
      ['Is there a page limit?', 'Up to 200 pages per file. Split larger PDFs first.']
    ]
  },
  {
    slug: 'pdf-to-text', cat: 'PDF tools', name: 'PDF to Text',
    title: 'PDF to Text - Extract Text from a PDF Free',
    desc: 'Extract all the text from a PDF so you can copy it or save it as a .txt file. Works in your browser with no upload.',
    card: 'Copy all the text out of a PDF.',
    intro: 'Get the words out of a PDF so you can copy, edit or search them.',
    steps: ['Choose a PDF.', 'Click Extract text.', 'Copy the text or download it as a .txt file.'],
    faq: [
      ['Why did I get no text?', 'The PDF is probably a scan. Scanned pages are pictures of text, and reading them needs OCR, which this tool does not do.'],
      ['Is the layout kept?', 'Line breaks are kept where the PDF has them. Columns, tables and fonts are not.'],
      ['Is my PDF uploaded?', 'No. The text is read on your device.']
    ]
  },
  {
    slug: 'rotate-pdf', cat: 'PDF tools', name: 'Rotate PDF',
    title: 'Rotate PDF - Turn PDF Pages Free and Save',
    desc: 'Rotate all pages or selected pages of a PDF by 90 or 180 degrees and save the result. No upload, no sign-up.',
    card: 'Turn sideways or upside-down pages.',
    intro: 'Fix pages that are sideways or upside down and save the PDF the right way up.',
    steps: ['Choose a PDF.', 'Choose the direction to rotate.', 'Leave Pages empty for the whole file, or type the pages to rotate.', 'Click Rotate PDF, then Download.'],
    faq: [
      ['Is the rotation permanent?', 'Yes. The downloaded file opens rotated in every PDF reader.'],
      ['Can I rotate only some pages?', 'Yes. Type the pages, for example 2, 5-7.'],
      ['Does rotating change quality?', 'No. Only the page direction changes.']
    ]
  },
  {
    slug: 'delete-pdf-pages', cat: 'PDF tools', name: 'Delete PDF Pages',
    title: 'Delete PDF Pages - Remove Pages from a PDF Free',
    desc: 'Remove unwanted pages from a PDF and download the rest. Runs in your browser, so the file is never uploaded.',
    card: 'Remove unwanted pages from a PDF.',
    intro: 'Remove blank, duplicate or unwanted pages from a PDF.',
    steps: ['Choose a PDF.', 'Type the pages to delete, such as 2, 4-6.', 'Click Delete pages, then Download PDF.'],
    faq: [
      ['Is my original file changed?', 'No. A new PDF is created without the deleted pages. Your original stays as it is.'],
      ['Can I delete several pages at once?', 'Yes. Separate pages with commas and use a hyphen for a range.'],
      ['Can I undo it?', 'Just run the tool again on your original file.']
    ]
  },
  {
    slug: 'add-page-numbers-to-pdf', cat: 'PDF tools', name: 'Add Page Numbers to PDF',
    title: 'Add Page Numbers to PDF - Free Online Tool',
    desc: 'Add page numbers to every page of a PDF. Choose the position, format, size and starting number. No upload, no sign-up.',
    card: 'Number every page of a PDF.',
    intro: 'Stamp page numbers onto a PDF, in the corner and format you choose.',
    steps: ['Choose a PDF.', 'Pick the position and number format.', 'Set the starting number if it should not be 1.', 'Click Add page numbers, then Download.'],
    faq: [
      ['Can I start from a number other than 1?', 'Yes. Change "Start at" to any whole number from 0 up. With "1 / 10" or "Page 1 of 10", the second number is the last number printed, so starting at 31 on a 20-page file shows "of 50".'],
      ['Can I skip the cover page?', 'Not directly. Split the cover off first, number the rest, then merge the two files.'],
      ['Will the numbers cover my content?', 'They sit in the page margin, about one centimetre from the edge. Check the result if your pages have very small margins.']
    ]
  },
  {
    slug: 'watermark-pdf', cat: 'PDF tools', name: 'Watermark PDF',
    title: 'Watermark PDF - Add a Text Watermark Free',
    desc: 'Add a text watermark such as CONFIDENTIAL or DRAFT across every page of a PDF. Choose the style, strength and color. No upload.',
    card: 'Stamp DRAFT or CONFIDENTIAL on every page.',
    intro: 'Mark every page of a PDF with a see-through text watermark.',
    steps: ['Choose a PDF.', 'Type the watermark text.', 'Choose the style, strength and color.', 'Click Add watermark, then Download.'],
    faq: [
      ['Can someone remove the watermark?', 'It becomes part of each page, but a person with PDF editing software could remove it. It discourages casual copying rather than preventing it.'],
      ['Which characters can I use?', 'Latin letters, numbers and common symbols. Other scripts are not supported by the built-in font.'],
      ['Does it hide the text underneath?', 'No. The watermark is see-through. Use Light if the page must stay easy to read.']
    ]
  },
  {
    slug: 'credit-card-payoff-calculator', cat: 'Finance calculators', name: 'Credit Card Payoff Calculator',
    title: 'Credit Card Payoff Calculator - Months & Interest',
    desc: 'See how long it will take to pay off a credit card and how much interest you will pay, or find the payment needed to clear it by a date.',
    card: 'How long to clear a card, and the interest.',
    intro: 'Find out how long your credit card will take to pay off, what it costs in interest, and what to pay to clear it sooner.',
    steps: ['Enter your balance and the card\'s APR.', 'Enter what you pay each month.', 'Read the payoff time and total interest.', 'Use the second box to find the payment for a target number of months.'],
    faq: [
      ['How is the interest calculated?', 'Each month, interest of APR ÷ 12 is added to the balance, then your payment is taken off. This assumes you make no new purchases.'],
      ['Why does it say the balance would never go down?', 'Your payment is less than or equal to the interest added each month, so nothing is left to reduce the debt.'],
      ['How can I pay less interest?', 'Pay more each month. Even a small increase shortens the payoff time a lot, because less interest builds up.'],
      ['Is this financial advice?', 'No. It is an estimate. Your card issuer may calculate interest daily and add fees.']
    ]
  },
  {
    slug: 'profit-margin-calculator', cat: 'Finance calculators', name: 'Profit Margin Calculator',
    title: 'Profit Margin Calculator - Margin, Markup & Price',
    desc: 'Calculate profit, profit margin and markup from cost and selling price, or find the price needed to hit a target margin.',
    card: 'Margin, markup and the price to charge.',
    intro: 'Work out your profit margin and markup, or find the selling price that gives the margin you want.',
    steps: ['Enter what the item costs you and what you sell it for.', 'Read the profit, margin and markup.', 'Or enter a cost and a target margin to get the price to charge.'],
    faq: [
      ['What is the difference between margin and markup?', 'Margin is profit as a share of the selling price. Markup is profit as a share of the cost. A product that costs 60 and sells for 100 has a 40% margin and a 66.67% markup.'],
      ['How do I price for a target margin?', 'Divide the cost by 1 minus the margin as a decimal. For a 40% margin on a cost of 60: 60 ÷ 0.6 = 100.'],
      ['Is this gross or net margin?', 'It depends on what you include in cost. Using only the cost of the goods gives gross margin.']
    ]
  },
  {
    slug: 'gpa-calculator', cat: 'Calculators', name: 'GPA Calculator',
    title: 'GPA Calculator - College & High School (4.0 Scale)',
    desc: 'Calculate your GPA on the 4.0 scale from your grades and credit hours. Add as many courses as you need.',
    card: 'GPA from your grades and credits.',
    intro: 'Calculate your grade point average from letter grades and credit hours.',
    steps: ['Enter the credits for each course.', 'Choose the grade you got.', 'Click Add course for more rows.', 'Read your GPA below.'],
    faq: [
      ['How is GPA calculated?', 'Each grade is turned into points, multiplied by the course credits, added up, then divided by the total credits.'],
      ['What points does each grade get?', 'A and A+ are 4.0, A- 3.7, B+ 3.3, B 3.0, B- 2.7, C+ 2.3, C 2.0, C- 1.7, D+ 1.3, D 1.0 and F 0.'],
      ['My school uses a different scale. Is this right for me?', 'Scales differ between schools. Check your school\'s own table if your result does not match your transcript.']
    ]
  },
  {
    slug: 'calorie-calculator', cat: 'Calculators', name: 'Calorie Calculator',
    title: 'Calorie Calculator - Daily Calories to Lose or Maintain Weight',
    desc: 'Estimate how many calories you need each day to maintain, lose or gain weight, based on your age, size and activity level.',
    card: 'Daily calories to maintain, lose or gain.',
    intro: 'Estimate the calories you burn each day and how many to eat to maintain, lose or gain weight.',
    steps: ['Choose your units and sex.', 'Enter your age, weight and height.', 'Pick the activity level closest to your week.', 'Read your daily calorie targets.'],
    faq: [
      ['Which formula does this use?', 'The Mifflin-St Jeor equation for calories burned at rest, multiplied by a standard activity factor.'],
      ['How fast will I lose weight?', 'A deficit of about 500 calories a day is commonly linked with losing roughly half a kilogram, or one pound, a week. Real results vary.'],
      ['How accurate is it?', 'It is an estimate for adults. Individual needs can differ by a few hundred calories. It is not medical advice.']
    ]
  },
  {
    slug: 'roman-numeral-converter', cat: 'Calculators', name: 'Roman Numeral Converter',
    title: 'Roman Numeral Converter - Numbers to Roman & Back',
    desc: 'Convert numbers to Roman numerals and Roman numerals to numbers, from 1 to 3999. Checks that the numeral is valid.',
    card: 'Numbers to Roman numerals and back.',
    intro: 'Convert a number to Roman numerals, or read a Roman numeral as a number.',
    steps: ['Type a number from 1 to 3999, or type a Roman numeral.', 'The other box updates as you type.'],
    faq: [
      ['Why does it stop at 3999?', 'Standard Roman numerals have no symbol above M (1000), and no symbol repeats more than three times, so 3999 (MMMCMXCIX) is the largest.'],
      ['How do Roman numerals work?', 'Symbols are added together, largest first. A smaller symbol before a larger one is subtracted, so IV is 4 and IX is 9.'],
      ['Is there a Roman numeral for zero?', 'No. The system has no zero.']
    ]
  },
  {
    slug: 'number-to-words', cat: 'Text tools', name: 'Number to Words',
    title: 'Number to Words Converter - Spell Out Numbers & Check Amounts',
    desc: 'Convert numbers into English words, or write an amount in dollars and cents for a check. Handles decimals and very large numbers.',
    card: 'Spell out any number in English words.',
    intro: 'Turn digits into English words, for writing checks, contracts and invoices.',
    steps: ['Type a number.', 'Choose a plain number or dollars and cents.', 'Click Copy.'],
    faq: [
      ['How do I write an amount on a check?', 'Choose "Dollars and cents". The cents are written as a fraction, for example "One thousand two hundred thirty-four dollars and 56/100".'],
      ['How large a number can it handle?', 'Up to 18 digits, which is hundreds of quadrillions.'],
      ['Does it use "and"?', 'No. It follows the American style, as in "one hundred five", which is the usual style on checks.']
    ]
  },
  {
    slug: 'text-compare', cat: 'Text tools', name: 'Text Compare',
    title: 'Text Compare - Find Differences Between Two Texts',
    desc: 'Compare two texts and see which lines were added or removed. A free online diff checker that runs in your browser.',
    card: 'See what changed between two texts.',
    intro: 'Paste two versions of a text to see exactly which lines were added and removed.',
    steps: ['Paste the original text on the left.', 'Paste the changed text on the right.', 'Click Compare.', 'Lines marked + were added and lines marked − were removed.'],
    faq: [
      ['How are the texts compared?', 'Line by line. A line that changed is shown as the old line removed and the new line added.'],
      ['Is my text uploaded?', 'No. The comparison happens in your browser.'],
      ['Can it ignore small differences?', 'Yes. Tick the options to ignore leading and trailing spaces or upper and lower case.']
    ]
  },
  {
    slug: 'text-to-binary', cat: 'Developer tools', name: 'Text to Binary',
    title: 'Text to Binary Converter - Binary to Text Translator',
    desc: 'Convert text to binary code and binary back to text. Supports every language and emoji using UTF-8.',
    card: 'Translate text to binary code and back.',
    intro: 'Translate text into the 0s and 1s a computer stores, or turn binary back into readable text.',
    steps: ['Type text or paste binary.', 'Click Text to binary or Binary to text.', 'Click Copy.'],
    faq: [
      ['How is text turned into binary?', 'Each character is stored as one or more bytes using UTF-8, and each byte is written as eight binary digits.'],
      ['Why do some characters use more than 8 digits?', 'English letters take one byte. Accented letters, other scripts and emoji take two to four bytes each.'],
      ['Do spaces between groups matter when decoding?', 'No. Spaces and line breaks are ignored, as long as the total number of digits is a multiple of 8.']
    ]
  },
  {
    slug: 'countdown-timer', cat: 'Time tools', name: 'Online Timer',
    title: 'Online Timer - Free Countdown Timer with Alarm',
    desc: 'A simple online countdown timer with an alarm sound. Set hours, minutes and seconds or use a quick preset.',
    card: 'Countdown timer with an alarm.',
    intro: 'Set a countdown for cooking, studying, workouts or breaks. A sound plays when the time is up.',
    steps: ['Set the hours, minutes and seconds, or tap a preset.', 'Click Start.', 'Keep the page open. The remaining time also shows in the browser tab.'],
    faq: [
      ['Does the timer work if I switch tabs?', 'Yes. It keeps the correct time in the background as long as the page stays open.'],
      ['Why did I not hear the alarm?', 'Check that your device is not muted and the sound option is ticked. Phones may silence a page while the screen is locked.'],
      ['Can I pause it?', 'Yes. Click Pause, then Resume to continue from where you stopped.']
    ]
  },
  {
    slug: 'stopwatch', cat: 'Time tools', name: 'Online Stopwatch',
    title: 'Online Stopwatch - Free Stopwatch with Lap Times',
    desc: 'A free online stopwatch accurate to a hundredth of a second, with lap times, pause and reset.',
    card: 'Stopwatch with laps, to 1/100 second.',
    intro: 'Time anything to a hundredth of a second and record lap times.',
    steps: ['Click Start.', 'Click Lap to record a split without stopping.', 'Click Pause to stop, and Reset to clear.'],
    faq: [
      ['How accurate is it?', 'It uses your device\'s high-resolution clock and shows hundredths of a second.'],
      ['Does it keep running in another tab?', 'Yes. The time is measured from the clock, so it stays correct even when the page is in the background.'],
      ['What is a lap time?', 'The time since the previous lap. The Total column shows the time since you pressed Start.']
    ]
  },
  {
    slug: 'edit-pdf', cat: 'PDF tools', name: 'Edit PDF Text',
    title: 'Edit PDF Text Online - Change Text in a PDF Free, No Upload',
    desc: 'Click any line in a PDF and retype it. The editor reuses the PDF\'s own font where it can, so the change blends in. Free, no upload, no sign-up.',
    card: 'Click a line and retype it, in the PDF\'s own font.',
    intro: 'Fix a typo, change a date or update a name in a PDF. Click the line, type the new text and save. The editor keeps the original font whenever the PDF contains the letters you type.',
    steps: ['Choose a PDF.', 'Click the line of text you want to change and type the new text.', 'Use the arrows to move between pages.', 'Click Save edited PDF, then Download.'],
    faq: [
      ['Does the new text use the same font?', 'When the PDF carries its own font and that font contains every letter you typed, yes: the new text is written in that exact font. PDFs usually store only the letters they already use, so if you type a letter that appears nowhere else in that font, the closest standard font (Helvetica, Times or Courier, with matching bold and italic) is used instead. The tool tells you how many changes used each.'],
      ['How does it change the text?', 'It takes the old words out of the page and writes your new text in the same place, size and colour. When a line is stored in a way that cannot be safely split, the old line is painted over with the page colour instead, and the tool tells you that it is only covered.'],
      ['Can I edit a scanned PDF?', 'Often, yes. When a page has no real text, the tool reads the scan with text recognition (English, upright pages) so you can click the lines. Results depend on how clear the scan is; for a single photo or picture, the Image Text Editor gives you more control.'],
      ['Can I move text or change its size?', 'Not yet. You can replace or delete a line, and the new text keeps the position and size of the old one.'],
      ['Is my PDF uploaded?', 'No. The file is opened and saved on your own device.']
    ]
  },
  {
    slug: 'image-text-editor', cat: 'Image tools', name: 'Image Text Editor',
    title: 'Edit Text in Image Online - Change Text on a Photo Free',
    desc: 'Click the writing in a picture and change it. The editor finds the text, hides the old words and writes yours in the same place, size and colour. No upload.',
    card: 'Click the writing in a picture and change it.',
    intro: 'Change a price, a date or a name written in a picture. The editor finds the writing for you: click a line, type the new words, save.',
    steps: ['Choose a picture and wait a moment while the editor finds the writing.', 'Click a highlighted line in the picture.', 'Type the new text. Change the font, size or colour if needed.', 'Press Save picture, then Download.'],
    faq: [
      ['How does it edit text that is part of a picture?', 'It reads the picture to find each line of writing. When you click a line, it paints over the old words with the colour around them and writes your new text in the same position, size and colour.'],
      ['Will the new text be in exactly the same font?', 'Not always. A picture holds only pixels, with no font information, so the editor picks the closest of a few plain fonts by comparing shapes and sizes. You can switch to another font from the list if one fits better.'],
      ['It did not find the writing in my picture. Why?', 'Automatic finding works for printed Latin letters and numbers that are reasonably sharp. Handwriting, very small or stylised text, and other scripts such as Urdu or Arabic may be missed. Use Cover old text and Add text to do those by hand.'],
      ['Why can I see a box where the old text was?', 'Hiding works best on a plain background. On a photo or a pattern the covered patch is one flat colour, so it shows.'],
      ['Is my picture uploaded?', 'No. Finding and editing the text both happen on your own device.']
    ]
  },
  {
    slug: 'online-notepad', cat: 'Text tools', name: 'GetToolNest Notepad', wide: true,
    title: 'GetToolNest Notepad - Free Online Notepad & Code Editor with Tabs',
    desc: 'GetToolNest Notepad is a free online notepad and code editor that works like a desktop editor: unlimited lines, tabs, syntax colours for 30+ languages, find and replace with regex, line tools, and it saves your tabs automatically.',
    card: 'Full notepad: tabs, code colours, find and replace, bookmarks.',
    intro: 'GetToolNest Notepad is a full text and code editor in your browser, in the spirit of desktop editors such as Notepad++: write as many lines as you like, open many files in tabs, colour code in more than 30 languages, find and replace with regular expressions, bookmark lines, sort and clean lines, and save. Your tabs are kept in this browser, so they are still there tomorrow.',
    steps: ['Start typing, press Alt+N for a new tab, or open files with Ctrl+O (or drop them on the editor).', 'Pick the language from the Language menu, or rename the tab with an extension such as .py or .html.', 'Use Search for find and replace, and Lines or Edit for sorting, cleaning and changing case.', 'Press Ctrl+S to save the current tab, or File → Save all as ZIP.'],
    faq: [
      ['Is this the real Notepad++?', 'No. Notepad++ is a Windows program. This is an independent online editor with many of the same everyday features: tabs, syntax colouring, find and replace with regular expressions, line operations, code folding, multiple cursors, word wrap and zoom.'],
      ['Are my files uploaded?', 'No. Files you open are read by your browser and stay on your device. Your tabs are saved in this browser’s storage, not on a server.'],
      ['Will my tabs still be here later?', 'Yes, on the same browser and device. Clearing your browser data erases them, so save anything important with Ctrl+S.'],
      ['Which languages are coloured?', 'JavaScript, TypeScript, JSON, HTML, XML, CSS, SCSS, LESS, Python, Java, C, C++, C#, Kotlin, Dart, PHP, SQL, Markdown, Shell, PowerShell, YAML, TOML, INI, Go, Rust, Ruby, Lua, Perl, R, Swift, Dockerfile, Nginx and Diff.'],
      ['How do I edit several lines at once?', 'Hold Ctrl (Cmd on Mac) and click to add more cursors, or hold Alt and drag to select a column.'],
      ['Is there a limit on lines or file size?', 'No fixed limit. You can write or paste as many lines as you like; only lines on screen are drawn, so long files stay smooth. Files over 50 MB ask before opening because very large files can slow a phone down.'],
      ['How do bookmarks work?', 'Click a line number or press Ctrl+F2 to put a blue dot on that line. F2 jumps to the next bookmark. In the Search menu you can bookmark every line that matches a search, then copy or remove those lines.']
    ]
  }
];
