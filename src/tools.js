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
  },
  {
      slug: 'invoice-generator', cat: 'Finance calculators', name: 'Invoice Generator',
      title: 'Free Invoice Generator - Make a PDF Invoice Online',
      desc: 'Create a professional invoice with your logo, items, discount, tax and balance due, then download a real PDF or print it. Free and private.',
      card: 'Make a professional PDF invoice in minutes.',
      intro: 'Fill in your business, client and items to build a clean invoice with a live preview, then download it as a PDF or print it.',
      steps: ['Add your business details, logo and the client you are billing.', 'Enter your items with quantity and unit price, plus any discount, tax, shipping or amount paid.', 'Check the live preview, then press Download PDF or Print.', 'Press New invoice for the next one: your details stay and the number goes up.'],
      faq: [
        ['Is this invoice generator free?', 'Yes. It is free with no sign-up, no watermark and no limit on how many invoices you make.'],
        ['Are my invoices uploaded anywhere?', 'No. Everything runs in your browser. Your draft, logo and last invoice number are saved only on this device.'],
        ['Can I use rupees, euros or pounds?', 'Yes. Choose USD, EUR, GBP, PKR, INR, AED, SAR, CAD or AUD, or type your own currency symbol. Symbols such as ₨, ₹, € and £ appear correctly in the PDF.'],
        ['How are tax and discount calculated?', 'The discount is taken off the subtotal first, then each tax is worked out on the discounted amount. Shipping is added after tax, and any amount paid is subtracted to give the balance due.'],
        ['Is the PDF text real or a picture?', 'Real text. The PDF is small and sharp, and the amounts and names can be searched and copied.'],
        ['Can an invoice have many items?', 'Yes. Long invoices continue onto extra pages, with the table header repeated and page numbers on every page.']
      ],
      icon: '<path d="M6 2h9l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M14 2v6h6M8 13h8M8 17h5"/><path d="M10 9.5H8"/>'
  },
  {
      slug: 'image-to-text', cat: 'Image tools', name: 'Image to Text (OCR)',
      title: 'Image to Text Converter - Free OCR Online, No Upload',
      desc: 'Copy text from photos, screenshots and scans. Paste with Ctrl+V or drop several images, then copy or download the text. Free OCR that runs on your device.',
      card: 'Copy the text out of photos and screenshots.',
      intro: 'Turn the words in a picture into text you can copy and edit. Drop images or paste a screenshot, and the text appears in seconds. The reading happens on your device, so your pictures stay private.',
      steps: ['Drop one or more images on the box, or press Ctrl+V to paste a screenshot.', 'Wait while each image is read. The bar shows the progress.', 'Choose whether to keep line breaks or join lines into paragraphs, and correct any mistakes.', 'Press Copy text or Download .txt.'],
      faq: [
        ['Are my images uploaded?', 'No. The text is read by your own browser. The text reader downloads its English data from this site the first time (about 7 MB) and then works offline.'],
        ['Which languages can it read?', 'English. Other languages that use the Latin alphabet may partly work, but accented letters are often misread, and scripts such as Arabic, Chinese or Hindi are not supported yet.'],
        ['Can it read handwriting?', 'Only very neat printed handwriting, and not reliably. It is made for printed text, screenshots and scans.'],
        ['What if my picture is sideways or upside down?', 'With Orientation set to Automatic, the tool tries the picture turned 90, 180 and 270 degrees when the upright reading looks poor, and keeps the best result. You can also set the orientation by hand.'],
        ['How accurate is it?', 'On clear screenshots and flat, sharp scans it is usually close to perfect. Blurry, angled or low-contrast photos produce more mistakes, so always check names and numbers.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 12h10M7 15h6"/><path d="M3 8V6a2 2 0 0 1 2-2h2M21 8V6a2 2 0 0 0-2-2h-2"/>'
  },
  {
      slug: 'crop-image', cat: 'Image tools', name: 'Crop Image',
      title: 'Crop Image Online - Free Photo Cropper for 1:1, 4:5, 16:9',
      desc: 'Crop photos by dragging a box or typing exact pixels. Presets for square, Instagram 4:5, 16:9, Story 9:16 and passport size. Rotate, flip, no upload.',
      card: 'Cut photos to any size or shape, on any device.',
      intro: 'Crop a picture to exactly the part you want. Drag the box, pick a ready-made shape for Instagram, YouTube or a passport photo, or type exact pixel sizes. Your picture never leaves your device.',
      steps: ['Choose or drop an image.', 'Pick a shape, such as Square 1:1 or Story 9:16, or keep Free.', 'Drag the box and its handles, or type the exact width, height and position.', 'Choose JPG, PNG or WebP, press Crop image, then Download.'],
      faq: [
        ['Does cropping reduce the quality?', 'No. The crop is cut from your original picture at full resolution. Saving as PNG keeps every pixel exactly; JPG and WebP use the quality you choose.'],
        ['Can I crop on my phone?', 'Yes. The crop box and its handles work with your finger, and the page does not scroll while you drag.'],
        ['What size is the passport photo?', 'The passport shape is 35 × 45 mm. With the resize option ticked, the result is 413 × 531 pixels, which prints at exactly 35 × 45 mm at 300 dpi. Check your country\'s rules for head size and background.'],
        ['Can I rotate or mirror the picture?', 'Yes. Rotate it left or right by 90 degrees, or flip it horizontally or vertically, before you crop.'],
        ['Is my image uploaded?', 'No. Everything happens in your browser.']
      ],
      icon: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>'
  },
  {
      slug: 'sign-pdf', cat: 'PDF tools', name: 'Sign PDF',
      title: 'Sign PDF Online Free - Add Signature, Date & Text, No Upload',
      desc: 'Draw, type or upload your signature and place it on any PDF page. Add the date and text, move and resize, then download. Free, private, no sign-up.',
      card: 'Draw or type your signature and add it to a PDF.',
      intro: 'Sign a PDF without printing it. Draw your signature, type it in a handwriting style or upload a photo of it, then tap where it goes. Add the date or any text, and download the signed file. Nothing is uploaded.',
      steps: ['Choose your PDF.', 'Draw, type or upload your signature and press Use this signature.', 'Tap the page where it goes, then drag to move and use the round handle to resize. Add a date or text if needed.', 'Press Save signed PDF, then Download.'],
      faq: [
        ['Is my document or signature uploaded?', 'No. The PDF is opened and saved by your browser, and your signature is never stored or sent anywhere.'],
        ['Can I sign on my phone?', 'Yes. Draw your signature with your finger, tap the page to place it, and drag or resize it by touch.'],
        ['Does signing change the rest of the PDF?', 'No. Your signature, date and text are drawn on top of the pages you chose. The original text, pages and page sizes are kept as they were.'],
        ['Can I add the same signature to several pages?', 'Yes. Tap your signature button above the page to place it again, or select an item and press Put on every page.'],
        ['Is this a legally valid electronic signature?', 'Many countries accept a drawn or typed signature for everyday agreements, but some documents require a certified digital signature. If in doubt, ask the person who will receive the document.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8 17c1.5-2 2.5-3 3-2s-.5 2 .5 2 1.5-1.5 2.5-1.5 1 1 2 1"/>'
  },
  {
      slug: 'organize-pdf', cat: 'PDF tools', name: 'Organize PDF',
      title: 'Organize PDF - Reorder, Rotate & Delete PDF Pages Free',
      desc: 'Drag PDF pages into a new order, rotate or delete pages, add blank pages and combine several PDFs. Runs in your browser, no upload.',
      card: 'Drag pages into order, rotate or delete them.',
      intro: 'See every page of your PDF as a thumbnail, then drag them into the right order, turn or remove pages and save a new PDF.',
      steps: ['Choose one or more PDFs. Every page appears as a thumbnail.', 'Drag pages to reorder them, or use the arrow buttons under each page.', 'Rotate, delete or add blank pages. Tick pages to change several at once.', 'Click Save PDF, then Download PDF.'],
      faq: [
        ['Is my PDF uploaded anywhere?', 'No. The pages are shown and rearranged by your own browser, and the new PDF is made on your device.'],
        ['Does it lower the quality of my pages?', 'No. Each page is copied as it is, with its text, images and links. Only the order and direction change.'],
        ['Can I combine pages from different PDFs?', 'Yes. Add several PDFs and their pages appear together. Mix them in any order before saving.'],
        ['How do I move pages on a phone?', 'Hold the ⠿ handle in the corner of a page and drag it, or tap the arrow buttons under the page.'],
        ['I deleted the wrong page. Can I get it back?', 'Yes. Press Undo (or Ctrl+Z) to step back through your changes.'],
        ['Can I open a password-protected PDF?', 'Not directly. Remove the password in a PDF reader that knows it, then add the unlocked copy.']
      ],
      icon: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="9" rx="1"/><rect x="3" y="15" width="7" height="6" rx="1"/><path d="M14 18h7M18 15l3 3-3 3"/>'
  },
  {
      slug: 'watermark-image', cat: 'Image tools', name: 'Watermark Image',
      title: 'Watermark Image - Add Text or Logo to Photos Free',
      desc: 'Add a text or logo watermark to one photo or a whole batch. Set size, colour, opacity, angle and position, or tile it. No upload.',
      card: 'Stamp your name or logo on photos, in bulk.',
      intro: 'Protect your photos with a text or logo watermark. Style it once and it is scaled to fit every image in the batch.',
      steps: ['Choose one or more images.', 'Type your watermark text and pick its size, colour, opacity, angle and position, or turn on tiling.', 'Optionally add a logo image and place it.', 'Download the current image, or all of them as a ZIP.'],
      faq: [
        ['Are my photos uploaded?', 'No. The watermark is drawn by your own browser and your photos never leave your device.'],
        ['Will my watermark look the same on big and small photos?', 'Yes. Sizes are set as a share of each image, so a large and a small photo get a watermark of the same relative size.'],
        ['Does it keep my image format?', 'Yes. With "Same as original", JPG stays JPG, PNG stays PNG and WebP stays WebP. You can also convert to another format.'],
        ['Which logo file works best?', 'A PNG with a transparent background. A JPG logo works too but shows its rectangle background.'],
        ['Can a watermark be removed?', 'A tiled, semi-transparent watermark is much harder to remove than a small one in a corner, but no watermark is impossible to remove.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 16l5-5 4 4 3-3 6 6"/><path d="M13 9h5"/><circle cx="8" cy="8.5" r="1.5"/>'
  },
  {
      slug: 'meme-generator', cat: 'Image tools', name: 'Meme Generator',
      title: 'Meme Generator - Add Top & Bottom Text to Any Picture',
      desc: 'Make a meme from your own picture with classic bold top and bottom text. Add extra text boxes, drag them anywhere and download PNG or JPG.',
      card: 'Classic top and bottom text on your picture.',
      intro: 'Turn any picture into a meme with big white outlined text. Add more captions, drag them into place and download.',
      steps: ['Choose or paste a picture, or start with a plain background.', 'Type the top and bottom text.', 'Add more text boxes if you like and drag any text to move it.', 'Pick the size and colours, then click Download meme.'],
      faq: [
        ['Is my picture uploaded?', 'No. The meme is made in your browser and your picture stays on your device.'],
        ['Are there ready-made meme templates?', 'No. Use your own picture or one you are allowed to use, or start from a plain coloured background.'],
        ['Why does the font look different on my phone?', 'The tool uses Impact when your device has it. Phones without Impact get the closest bold font they have.'],
        ['Long text does not fit. What can I do?', 'Text wraps onto new lines on its own and long captions shrink a little. You can also lower the text size.'],
        ['Will there be a watermark on my meme?', 'No. The downloaded image has only your picture and your text.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10M7 17h10"/><circle cx="9.5" cy="12" r="1"/><circle cx="14.5" cy="12" r="1"/>'
  },
  {
      slug: 'color-picker', cat: 'Image tools', name: 'Color Picker from Image',
      title: 'Color Picker from Image - Get HEX, RGB & HSL Online',
      desc: 'Click any pixel of an image to get its HEX, RGB and HSL colour codes, with a zoom loupe. Also extracts the main colour palette. No upload.',
      card: 'Get the HEX code of any colour in a picture.',
      intro: 'Pick exact colours from any image or screenshot with a magnifying loupe, and get its main colour palette in one click.',
      steps: ['Choose, drop or paste an image.', 'Move over the image and click, or tap, the colour you want.', 'Copy the HEX, RGB or HSL code.', 'Use the main colours list to grab the whole palette.'],
      faq: [
        ['Is my image uploaded?', 'No. The colours are read by your own browser and the image never leaves your device.'],
        ['How do I pick a colour on a phone?', 'Touch the image and slide your finger. A loupe above your finger shows the exact pixel, and the colour is picked when you lift your finger.'],
        ['Why is the colour slightly different from my design file?', 'Images saved as JPG change colours a little when compressed. Use the 3 × 3 average setting for a steadier reading of photos.'],
        ['How are the main colours found?', 'The tool groups similar pixels together (k-means clustering) and lists the groups from most to least common, with the share of the image each covers.'],
        ['Can I pick a colour from outside the browser?', 'In Chrome and Edge on a computer, the Pick from screen button lets you pick from anywhere on your screen.']
      ],
      icon: '<path d="M14.5 4.5l5 5M17 2.5a2.1 2.1 0 0 1 3 3L9 16.5l-4 1 1-4z"/><path d="M4 21h4"/>'
  },
  {
    slug: 'time-zone-converter', cat: 'Time tools', name: 'Time Zone Converter',
    title: 'Time Zone Converter - Compare Times Around the World',
    desc: 'Convert a date and time to many time zones at once: Pakistan, India, UAE, UK, US and more. Handles daylight saving correctly. Free and private.',
    card: 'See one time in many time zones at once.',
    intro: 'Pick a date, a time and a time zone, and see the same moment in Pakistan, India, the UAE, the UK, the US and any other zone you add. Daylight saving is handled for you.',
    steps: ['Press Now for the current time, or pick a date and time.', 'Choose the time zone that time is in.', 'Read the time in every zone in the list. +1 day means it is already the next day there.', 'Search to add more zones, remove the ones you do not need, then click Copy summary.'],
    faq: [
      ['Does it handle daylight saving time?', 'Yes. The converter uses the time zone rules built into your browser, so changes like the US clocks moving in March and November or Europe in March and October are applied for the exact date you pick.'],
      ['What happens with a time that does not exist?', 'When the clocks jump forward, an hour is skipped, for example 2:30 AM in New York on the second Sunday of March. The tool tells you and shows the same moment on the new clock time.'],
      ['What about a time that happens twice?', 'When the clocks go back, one hour happens twice. The tool shows the first one and lets you switch to the second.'],
      ['What does +1 day mean?', 'It means that in that zone it is already the next calendar day. −1 day means it is still the previous day.'],
      ['Is my zone list saved?', 'Yes. The zones you add or remove are remembered in this browser on this device, so the list is ready next time.']
    ],
    icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/><path d="M16.5 16.5L19 19"/>'
  },
  {
    slug: 'pregnancy-due-date-calculator', cat: 'Calculators', name: 'Pregnancy Due Date Calculator',
    title: 'Pregnancy Due Date Calculator - Week by Week',
    desc: 'Estimate your due date from your last period, conception date, IVF transfer or ultrasound. See your week, trimester and key milestones. Free and private.',
    card: 'Estimate your due date, pregnancy week and trimester.',
    intro: 'Find your estimated due date, how many weeks pregnant you are today, your trimester and the dates of key scans and tests. Use your last period, conception date, IVF transfer or an ultrasound.',
    steps: ['Choose what you know: your last period, the conception date, an IVF transfer or a scan.', 'Enter the date. For a last period, set your usual cycle length if it is not 28 days.', 'Read your due date, pregnancy week, trimester and milestone dates.', 'Click Copy summary to keep the dates.'],
    faq: [
      ['How is the due date calculated?', "From the first day of your last period, the due date is 280 days (40 weeks) later. This is Naegele's rule. If your cycle is longer or shorter than 28 days, the date moves by the difference."],
      ['How accurate is the due date?', 'It is an estimate. Only about 1 in 20 babies are born on the due date itself. Most arrive within two weeks before or after it.'],
      ['How do I calculate the due date after IVF?', 'Choose IVF embryo transfer, enter the transfer date and pick day 3 or day 5. The due date is 263 days after a day 3 transfer and 261 days after a day 5 transfer.'],
      ['Which date should I trust if my scan disagrees?', 'An early ultrasound is usually more accurate than the period date. Your doctor or midwife decides your official due date, so always follow their advice.'],
      ['Is my information saved or sent anywhere?', 'No. Everything is calculated in your browser, and the dates you type are not saved or sent.']
    ],
    icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M12 18.5l-2.6-2.5a1.6 1.6 0 0 1 2.6-1.9 1.6 1.6 0 0 1 2.6 1.9z"/>'
  },
  {
    slug: 'qr-code-scanner', cat: 'Generators', name: 'QR Code Scanner',
    title: 'QR Code Scanner - Scan QR Codes Online with Camera',
    desc: 'Scan a QR code with your camera or from a screenshot or photo. See links before opening them, read Wi-Fi passwords and contacts. Free and private.',
    card: 'Scan QR codes from your camera or an image.',
    intro: 'Scan a QR code with your phone or laptop camera, or upload or paste a picture of one. You see the full content before anything opens, and Wi-Fi codes, contacts, phone numbers and emails are shown clearly.',
    steps: ['Click Scan with camera and allow camera access, or drop, choose or paste an image.', 'Hold the QR code inside the frame until it is found.', 'Check the result. For links, read the full address shown before opening it.', 'Copy the text, open the link, or use the Wi-Fi password or contact.'],
    faq: [
      ['Is the image or camera feed uploaded?', 'No. The code is decoded on your device. Nothing from your camera or your images is sent to a server.'],
      ['Why does the camera not start?', 'Your browser needs permission to use the camera. If you blocked it, allow it in the site settings next to the address bar. You can always upload a screenshot or photo instead.'],
      ['Is it safe to open links from QR codes?', 'The scanner never opens a link by itself. It shows the full address and warns about tricks such as look-alike letters, so you can decide. Only http and https links can be opened from here.'],
      ['Can it read Wi-Fi QR codes?', 'Yes. It shows the network name, password and security type, with a button to copy the password.'],
      ['Where is my scan history kept?', 'Only in this browser on this device. You can clear it at any time with Clear history.']
    ],
    icon: '<path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3"/><path d="M3 12h18"/>'
  },
  {
    slug: 'regex-tester', cat: 'Developer tools', name: 'Regex Tester',
    title: 'Regex Tester - Test JavaScript Regular Expressions',
    desc: 'Test regular expressions with live match highlighting, capture groups, named groups and a replace preview. Ready-made patterns included. Runs in your browser.',
    card: 'Test regular expressions with live highlighting.',
    intro: 'Write a regular expression and see every match highlighted in your text as you type, with capture groups, positions and a live replace preview. It uses the JavaScript regex engine in your browser.',
    steps: ['Type a pattern, or pick one from Common patterns.', 'Tick the flags you need, such as g for all matches or i to ignore case.', 'Paste your test text and check the highlighted matches and group details.', 'Optionally type a replacement like $1 to preview the replaced text, then copy it.'],
    faq: [
      ['Which regex flavour does this use?', 'JavaScript (ECMAScript), the same engine your browser uses. Most patterns also work in other languages, but features like lookbehind or named groups can differ.'],
      ['Why does it say my pattern took too long?', 'Some patterns, such as (a+)+ on a long text, can take an extremely long time. The tester runs each pattern in the background and stops it after 2 seconds so the page never freezes.'],
      ['How do I use groups in the replacement?', 'Use $1, $2 and so on for numbered groups, $<name> for named groups, $& for the whole match and $$ for a dollar sign.'],
      ['Why is only one match found?', 'Without the g (global) flag JavaScript stops at the first match. Tick g to find all of them.'],
      ['Is my text sent anywhere?', 'No. The pattern and text never leave your browser.']
    ],
    icon: '<path d="M17 3v10M12.7 5.5l8.6 5M12.7 10.5l8.6-5"/><rect x="3" y="15" width="6" height="6" rx="1"/>'
  },
  {
    slug: 'markdown-to-html', cat: 'Developer tools', name: 'Markdown to HTML',
    title: 'Markdown to HTML Converter - Live Preview, Free',
    desc: 'Convert Markdown to clean HTML with a live preview. Supports GitHub tables, task lists and code blocks. Copy the HTML or download .html and .md files.',
    card: 'Convert Markdown to HTML with a live preview.',
    intro: 'Write or paste Markdown and see the formatted result instantly. Copy the HTML, or download a complete .html page or the .md file. Unsafe code is always removed.',
    steps: ['Type or paste Markdown, open a .md file, or press Load sample.', 'Check the formatted result in the Preview tab.', 'Switch to HTML source to see the generated code.', 'Click Copy HTML, or download the .html page or the .md file.'],
    faq: [
      ['Which Markdown features are supported?', 'Headings, bold, italic, links, images, lists, quotes, code, and the GitHub extras: tables, task lists, strikethrough, fenced code blocks and automatic links.'],
      ['Can I use HTML inside my Markdown?', 'Yes. Normal HTML is kept, but scripts, event handlers like onclick, javascript: links, iframes, forms and style blocks are removed for safety.'],
      ['What is in the downloaded .html file?', 'A complete web page with a title from your first heading and simple, readable styling. It opens in any browser.'],
      ['Is my text uploaded?', 'No. The conversion runs in your browser and your text is not saved or sent anywhere.']
    ],
    icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 15V9l2.5 3L11 9v6M17 9v6M14.5 12.5L17 15l2.5-2.5"/>'
  },
  {
      slug: 'screen-recorder', cat: 'Media tools', name: 'Screen Recorder',
      title: 'Free Online Screen Recorder - Record Screen with Audio',
      desc: 'Record your screen, a window or a browser tab with sound and microphone, then save it as MP4 or WebM. No install, no watermark, nothing uploaded.',
      card: 'Record your screen, a window or a tab with sound.',
      intro: 'Record your whole screen, one window or a browser tab, with computer sound and your microphone, right in your browser. Watch it back and download the video. Nothing is uploaded.',
      steps: ['Choose what to start with, the video format and whether to record sound and your microphone.', 'Press Start recording and pick the screen, window or tab in the box your browser shows, then press Share.', 'Use Pause and Resume as needed, and press Stop (or Stop sharing) when you are done.', 'Watch the recording and press Download.'],
      faq: [
        ['Is this screen recorder free?', 'Yes. There is no time limit, no watermark and no sign-up.'],
        ['Is my recording uploaded?', 'No. The video is recorded and kept by your browser on your device until you download it or close the page.'],
        ['Can it record on iPhone or Android?', 'No. Phone browsers do not let websites capture the screen. Use the built-in recorder: Screen Recording in Control Centre on iPhone and iPad, or the Screen recorder quick setting on Android.'],
        ['Why is there no computer sound in my video?', 'Tick "Share audio" (or "Share tab audio") in the sharing box. Chrome and Edge can share the sound of a tab on every system and the whole computer sound on Windows and ChromeOS. Firefox and Safari do not share computer sound.'],
        ['MP4 or WebM?', 'MP4 is offered when your browser can record it (recent Chrome, Edge and Safari) and opens almost everywhere. WebM files are smaller and play in browsers, VLC and most editors.'],
        ['How long can I record?', 'There is no fixed limit. The video is held in memory until you download it, so for very long recordings make sure your device has free memory and disk space.']
      ],
      icon: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10.5" r="2.5"/>'
  },
  {
      slug: 'voice-recorder', cat: 'Media tools', name: 'Voice Recorder',
      title: 'Online Voice Recorder - Record Audio and Save as MP3',
      desc: 'Record your voice with your microphone, pause and resume, listen back, then download MP3, WAV or the original file. Free, private, no upload.',
      card: 'Record your voice and save it as MP3 or WAV.',
      intro: 'Record your voice or any sound from your microphone, with a live level meter and timer. Listen back, then download it as MP3, WAV or the original recording. Nothing is uploaded.',
      steps: ['Press Record and allow your browser to use the microphone.', 'Speak while the timer runs; use Pause and Resume if you need a break.', 'Press Stop, then listen to the recording.', 'Download it as MP3, WAV or the original file.'],
      faq: [
        ['Is my recording uploaded?', 'No. The sound is recorded and turned into MP3 by your browser, on your device. It is never sent to a server.'],
        ['Which formats can I download?', 'MP3 (choose 96 to 320 kbps), WAV (uncompressed) and the original recording, which is WebM or OGG in Chrome, Edge and Firefox and M4A in Safari.'],
        ['Does it work on iPhone and Android?', 'Yes, in Safari (iOS 14.5 or newer), Chrome and other current browsers. Keep the page open while you record.'],
        ['The browser says the microphone is blocked. What now?', 'Click the lock or camera icon next to the web address, allow the microphone and press Record again. On a phone, also allow microphone access for the browser in the phone settings.'],
        ['How do I choose a different microphone?', 'After your first recording, a Microphone menu appears whenever more than one microphone is connected. Pick one there and record again.'],
        ['Is there a time limit?', 'No. Long recordings use more memory, so on a phone keep them under about an hour.']
      ],
      icon: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8"/>'
  },
  {
      slug: 'video-to-mp3', cat: 'Media tools', name: 'Video to MP3',
      title: 'Video to MP3 Converter - Extract Audio Free, No Upload',
      desc: 'Extract the sound from an MP4, MOV, WebM or MKV video and save it as MP3 or WAV. Trim the start and end, pick 128 to 320 kbps. Nothing is uploaded.',
      card: 'Extract the audio from a video as MP3 or WAV.',
      intro: 'Pull the soundtrack out of a video file and save it as an MP3 or WAV. Trim it to the part you want and choose the quality. The file is converted on your own device.',
      steps: ['Click the box or drop a video or audio file onto it.', 'Optionally set a start and end time, and press Play selection to check it.', 'Choose MP3 or WAV, the quality and stereo or mono.', 'Press Convert, then Download.'],
      faq: [
        ['Is my video uploaded?', 'No. Your browser reads and converts the file on your device, so even private or large videos never leave it.'],
        ['Which video formats work?', 'MP4, MOV, M4V, WebM and MKV usually work in Chrome and Edge, as long as the sound is AAC, MP3, Opus, Vorbis or FLAC. Firefox and Safari read most MP4 and MOV files. Audio files such as M4A, WAV and OGG work too.'],
        ['Why does it say it could not read the sound?', 'The file has no sound track, or its sound uses a format browsers cannot decode, such as AC-3 (Dolby), DTS or WMA, which are common in movie MKV files.'],
        ['Which MP3 quality should I pick?', '192 kbps sounds very good for music and is the default. 128 kbps is fine for speech and podcasts. 320 kbps is the highest MP3 quality.'],
        ['Can I convert only part of a video?', 'Yes. Type the start and end time, or play the video and press Use player time at the right moment.'],
        ['Is there a size limit?', 'Files up to 1.5 GB are accepted, but the whole sound track is held in memory, so long movies may be too much for a phone.']
      ],
      icon: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'
  },
  {
      slug: 'text-to-speech', cat: 'Media tools', name: 'Text to Speech',
      title: 'Text to Speech Online - Read Text Aloud Free',
      desc: 'Paste any text and hear it read aloud with your choice of voice, language, speed and pitch. Words are highlighted as they are spoken. Free, no sign-up.',
      card: 'Hear any text read aloud, with words highlighted.',
      intro: 'Paste text and hear it read aloud by the voices on your device, in many languages. Change the speed, pitch and volume, and follow along as each word is highlighted.',
      steps: ['Type or paste your text into the box.', 'Choose a voice and set the speed, pitch and volume.', 'Press Play. Use Pause, Resume and Stop, or click a sentence to jump to it.'],
      faq: [
        ['Can I download the speech as an MP3?', 'No. Browsers play these voices through your device\'s speech system and do not let websites record them, so no browser tool can save them as a file. Sites that offer a download make the audio on their own servers from your text.'],
        ['Why are the voices different on each device?', 'The voices come from your browser and operating system. Chrome includes Google voices, Edge includes Microsoft voices, and Safari uses the voices of your Mac, iPhone or iPad.'],
        ['Which languages are supported?', 'Any language your device has a voice for. The voice menu is grouped by language, with your own language first.'],
        ['Is my text sent anywhere?', 'Voices marked (online) are made by Google or Microsoft, so the browser sends the text to them to speak it. Other voices run fully on your device.'],
        ['Why does the highlight not move with some voices?', 'Some voices, especially online ones, do not report which word they are saying. The current sentence is still highlighted.'],
        ['Is there a length limit?', 'No. Long text is read sentence by sentence, which also avoids the cut-off some browsers have after about 15 seconds.']
      ],
      icon: '<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>'
  },
  {
      slug: 'spin-the-wheel', cat: 'Generators', name: 'Spin the Wheel',
      title: 'Spin the Wheel - Random Name Picker Wheel Online Free',
      desc: 'Type names or options, spin a colourful wheel and get a fair random winner. Remove winners, shuffle, full screen and sound. No sign-up.',
      card: 'Spin a wheel of names to pick a random winner.',
      intro: 'Add names, prizes or choices, one per line, and spin the wheel to pick one fairly. Great for classrooms, giveaways, team picks and decisions.',
      steps: ['Type or paste your entries, one per line.', 'Click the wheel or the Spin button.', 'See the winner, then remove it or spin again.', 'Use Full screen to show the wheel on a projector or stream.'],
      faq: [
        ['Is the wheel really random?', 'Yes. The winner is chosen with your browser\'s cryptographic random generator, every entry has exactly the same chance, and the wheel is then turned to stop on that entry.'],
        ['How many entries can I add?', 'Up to 200. With many entries the labels get small, so the wheel hides them when slices are too thin to read; the winner is always shown in full.'],
        ['Can I give one entry a bigger chance?', 'Yes. Add the same line more than once. Each line is its own slice, so a name listed twice is twice as likely to win.'],
        ['Are my entries saved?', 'Your list is kept in this browser so it is there next time. It is never uploaded.'],
        ['Can I turn off the animation or sound?', 'Untick Sound to spin silently. If your device or the site settings ask for reduced motion, the wheel jumps straight to the result.']
      ],
      icon: '<circle cx="12" cy="13" r="8"/><path d="M12 13V5M12 13l6.9 4M12 13l-6.9 4M10 2h4l-2 3z"/>'
  },
  {
      slug: 'typing-speed-test', cat: 'Text tools', name: 'Typing Speed Test',
      title: 'Typing Speed Test - Check Your WPM and Accuracy Free',
      desc: 'Test your typing speed in 30, 60 or 120 seconds. Live net WPM, accuracy and errors, highlighted mistakes and your best score saved.',
      card: 'Measure your typing speed in words per minute.',
      intro: 'Type the passage as quickly and accurately as you can. The timer starts with your first key, and you see your net words per minute and accuracy live.',
      steps: ['Choose 30, 60 or 120 seconds.', 'Tap the passage and start typing. The timer starts on your first key.', 'Fix mistakes with Backspace or keep going.', 'Read your result card, then press Tab and Enter to try again.'],
      faq: [
        ['How is WPM calculated?', 'Every 5 typed characters, including spaces, count as one word. Net WPM is the words typed minus the mistakes you left uncorrected, divided by the minutes of the test.'],
        ['How is accuracy worked out?', 'It is the share of all the characters you typed that were right when you typed them. Fixing a mistake removes it from your WPM, but it still lowers your accuracy.'],
        ['What is a good typing speed?', 'Around 40 WPM is average. 60 to 80 WPM is fast for everyday typing, and professional typists often reach 90 or more.'],
        ['Does it work on a phone or tablet?', 'Yes. Tap the passage to open your keyboard. Autocorrect is turned off for the box, and curly quotes from phone keyboards count as normal ones.'],
        ['Is my best score saved?', 'Yes, one best score for each test length, kept only in this browser. Use Reset best scores to start over.']
      ],
      icon: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>'
  },
  {
      slug: 'fancy-text-generator', cat: 'Text tools', name: 'Fancy Text Generator',
      title: 'Fancy Text Generator - Copy and Paste Cool Fonts',
      desc: 'Turn text into 36 fancy styles: bold, italic, cursive script, gothic, bubble, small caps, upside down and more. One tap to copy.',
      card: 'Cool copy-and-paste fonts for bios and posts.',
      intro: 'Type your text once and get it in 36 fancy styles made from Unicode characters. Copy any style with one tap and paste it into your bio, posts, games or messages.',
      steps: ['Type or paste your text.', 'Scroll through the styles, or filter them by name.', 'Tap Copy next to the style you like.', 'Paste it into your profile, post or chat.'],
      faq: [
        ['How does this work without fonts?', 'Each style uses real Unicode characters, such as the mathematical bold letters, so the look travels with the text and no font needs to be installed.'],
        ['Where can I use these fonts?', 'Most apps accept them, including Instagram, TikTok, X, Facebook, WhatsApp and Discord bios, names and posts.'],
        ['Why do some styles show boxes or question marks?', 'Some apps, fonts or older phones do not include every character. If a style looks broken where you paste it, choose another one.'],
        ['Why are some numbers or symbols unchanged?', 'Unicode only has styled versions of some characters. Letters A to Z work in nearly every style, digits only in some, and other symbols stay as they are.'],
        ['Are fancy letters bad for accessibility?', 'Screen readers may read them oddly or skip them, and search engines may not find them. Use them for decoration and keep important words in plain text.']
      ],
      icon: '<path d="M4 20l5-14h2l5 14M6.5 14h7"/><path d="M18 3l.9 2.1L21 6l-2.1.9L18 9l-.9-2.1L15 6l2.1-.9z"/>'
  },
  {
      slug: 'scientific-calculator', cat: 'Calculators', name: 'Scientific Calculator',
      title: 'Scientific Calculator Online - Trig, Logs, Powers, Memory',
      desc: 'Free online scientific calculator with sin, cos, tan, logs, powers, roots, factorials, memory and history. Works with your keyboard.',
      card: 'Trig, logs, powers and roots, with history.',
      intro: 'Type or tap full expressions like 2π, 3(4+5) or sin(30)^2 and get exact-looking answers. Switch between degrees and radians, store numbers in memory and reuse past calculations.',
      steps: ['Type an expression with your keyboard or tap the keys.', 'Choose DEG or RAD for trigonometry.', 'Press = or Enter to see the answer.', 'Click a line in the history to use it again.'],
      faq: [
        ['In what order are operations done?', 'Brackets first, then powers (right to left, so 2^3^2 is 2^9), then multiplication and division, then addition and subtraction, all left to right. A minus sign in front applies after powers, so −2^2 is −4.'],
        ['Why does 0.1 + 0.2 show 0.3?', 'Computers store decimals in binary, which creates tiny errors like 0.30000000000000004. Answers are rounded to 12 significant digits to hide that noise.'],
        ['How do I enter numbers like 3 × 10⁵?', 'Press EXP and type the power: 3E5 means 300,000 and 1.5E-3 means 0.0015. A lowercase e is Euler\'s number 2.718…'],
        ['Can I leave out the multiplication sign?', 'Yes. 2π, 3(4+5), (1+2)(3+4) and 2sin(30) all multiply. Missing closing brackets at the end are added for you.'],
        ['What does % do?', 'It divides the number before it by 100, so 50% is 0.5 and 200×15% is 30.'],
        ['Is my history saved?', 'The last 50 calculations, the memory value and the angle mode are kept in this browser only. Clear history removes them.']
      ],
      icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15v4M8 19h4"/>'
  },
  {
      slug: 'cgpa-calculator', cat: 'Study tools', name: 'CGPA Calculator',
      title: 'CGPA Calculator - Semester GPA, Cumulative CGPA & Target',
      desc: 'Calculate your semester GPA and cumulative CGPA on a 4.0, 5.0 or 10-point scale, and find the GPA you need next semester to reach your target.',
      card: 'Semester GPA, cumulative CGPA and target.',
      intro: 'Add your semesters by course grades or by semester GPA to get your cumulative CGPA, then plan the GPA you need to reach your target.',
      steps: ['Pick your grading scale and check the grade points table.', 'Add each semester: list its courses and grades, or type its GPA and credit hours.', 'Read your cumulative CGPA and the semester breakdown.', 'Enter a target CGPA to see the GPA you need in the semesters left.'],
      faq: [
        ['How is CGPA calculated?', 'Each semester GPA is multiplied by its credit hours, the results are added up, and the total is divided by all credit hours. Semesters with more credit hours count more.'],
        ['Which grade points does the 4.0 scale use?', 'A = 4.00, A- = 3.67, B+ = 3.33, B = 3.00, B- = 2.67, C+ = 2.33, C = 2.00, C- = 1.67, D+ = 1.33, D = 1.00 and F = 0, as used by many universities in Pakistan and the US. You can edit any value.'],
        ['Does it work for the Indian 10-point CBCS system?', 'Yes. Choose the 10-point scale: O = 10, A+ = 9, A = 8, B+ = 7, B = 6, C = 5, P = 4 and F = 0 by default, and change them to match your university.'],
        ['Can I enter a semester GPA instead of every course?', 'Yes. Click Known GPA on a semester and type its GPA and credit hours from your result card.'],
        ['How does the target planner work?', 'It works out the GPA you need over the credit hours left so that your final CGPA reaches the target, and says if the target is already secured or no longer reachable.'],
        ['Is my data saved?', 'Your semesters are saved automatically in this browser only. Nothing is uploaded.']
      ],
      icon: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c2 2 10 2 12 0v-4.5"/><path d="M19 17v4M17 19h4"/>'
  },
  {
      slug: 'cgpa-to-percentage', cat: 'Study tools', name: 'CGPA to Percentage Converter',
      title: 'CGPA to Percentage Converter - CBSE, VTU, Mumbai, Pakistan',
      desc: 'Convert CGPA to percentage or percentage to CGPA with labelled formulas: 4.0 proportional, CBSE × 9.5, VTU, Mumbai University, Anna University or custom.',
      card: 'CGPA to percentage and back, by formula.',
      intro: 'Convert a CGPA to a percentage, or a percentage to a CGPA, with the formula for your board or university written out next to the result.',
      steps: ['Choose CGPA → Percentage or Percentage → CGPA.', 'Pick the formula for your board or university, or enter a custom one.', 'Type your CGPA or percentage.', 'Read the result and the note about that formula.'],
      faq: [
        ['Is there one official formula for every university?', 'No. Each board and university sets its own rule or equivalence table. This tool shows common formulas for a quick estimate; the figure your university gives is the one that counts.'],
        ['How do I convert a 4.0 CGPA to a percentage in Pakistan?', 'There is no single formula for every university. The simple proportional estimate is CGPA ÷ 4 × 100, but universities publish their own equivalence tables, so check yours before using the number on a form.'],
        ['What is the CBSE formula?', 'Multiply the CGPA by 9.5. CBSE gave this for its CGPA grades, so 8.4 becomes 79.8%.'],
        ['What are the VTU and Mumbai University formulas?', 'The commonly quoted VTU formula is (CGPA − 0.75) × 10, and the Mumbai University one is 7.1 × CGPA + 11. Rules can differ by scheme and year, so confirm yours.'],
        ['Can I use my own university formula?', 'Yes. Choose Custom and enter the multiplier, the offset and the highest CGPA on your scale.']
      ],
      icon: '<path d="M4 7h7M4 12h4"/><path d="M14 17l6-10"/><circle cx="14.5" cy="8.5" r="1.5"/><circle cx="19.5" cy="15.5" r="1.5"/><path d="M4 17h7"/>'
  },
  {
      slug: 'marks-percentage-calculator', cat: 'Study tools', name: 'Marks Percentage Calculator',
      title: 'Marks Percentage Calculator - Total & Subject-Wise with Grade',
      desc: 'Find your marks percentage from total or subject-wise marks, with Pakistan board grades (A1 to E), Indian divisions or your own grade cut-offs.',
      card: 'Marks to percentage, grade and division.',
      intro: 'Turn your marks into a percentage, overall or subject by subject, and see your grade or division.',
      steps: ['Choose Total marks or Subject-wise.', 'Pick a grade or division scheme.', 'Enter marks obtained and total marks.', 'Read your percentage and grade.'],
      faq: [
        ['How do I calculate marks percentage?', 'Divide the marks you got by the total marks and multiply by 100. For example, 912 out of 1100 is 912 ÷ 1100 × 100 = 82.91%.'],
        ['What are the Pakistan board grades?', 'A1 for 80% or more, A for 70%, B for 60%, C for 50%, D for 40% and E for 33%. Below 33% is a fail.'],
        ['What are the Indian divisions?', 'First Division for 60% or more, Second Division for 45% and Third Division for 33%. Below 33% is a fail.'],
        ['Can I use my own grade cut-offs?', 'Yes. Choose Custom grades and set each grade name and lowest percentage. They are saved for next time.'],
        ['Is the overall percentage the average of subject percentages?', 'No. It is total marks obtained divided by total marks, which is what result cards use. Subjects with more marks count more.']
      ],
      icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="M14.5 10l-5 7"/><circle cx="9.5" cy="10.5" r="1"/><circle cx="14.5" cy="16.5" r="1"/>'
  },
  {
      slug: 'final-grade-calculator', cat: 'Study tools', name: 'Final Grade Calculator',
      title: 'Final Grade Calculator - What Do I Need on My Final Exam?',
      desc: 'Find the score you need on your final exam to get the grade you want, from your current grade or from weighted categories. Shows when it is impossible.',
      card: 'Score you need on the final exam.',
      intro: 'Work out the score you need on your final exam to reach the overall grade you want, or track a whole course by weighted categories.',
      steps: ['Choose Current grade + final or By category.', 'Enter your current grade and the final exam weight, or each category with its weight and score.', 'Type the overall grade you want.', 'Read the score you need, or whether it is impossible or already secured.'],
      faq: [
        ['How is the needed final score calculated?', 'Needed = (goal − current grade × (1 − final weight)) ÷ final weight. With 80% now, a final worth 40% and a goal of 85%, you need 92.5%.'],
        ['What if I need more than 100%?', 'The tool says the goal is not possible and shows the highest overall grade you can still reach.'],
        ['What does already secured mean?', 'Even a 0 on what is left keeps your overall grade at or above your goal.'],
        ['Can I enter scores as marks, like 17/20?', 'Yes. In category mode a score can be a percentage such as 85 or marks such as 17/20.'],
        ['What if my category weights do not add up to 100%?', 'The tool warns you and treats the weights you entered as the whole course.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="14" r=".5"/>'
  },
  {
      slug: 'attendance-calculator', cat: 'Study tools', name: 'Attendance Calculator',
      title: 'Attendance Calculator - Classes to Attend or Skip for 75%',
      desc: 'Check your attendance percentage and find how many classes you can skip, or must attend in a row, to stay above 75% or any required attendance.',
      card: 'Classes you can skip or must attend.',
      intro: 'Enter the classes held and attended to see your attendance, how many classes you can skip, or how many you must attend to reach the required percentage.',
      steps: ['Enter the classes held so far and the classes you attended.', 'Set the required attendance, 75% by default.', 'Read how many classes you can skip or must attend in a row.', 'Optionally enter the classes left in the semester to plan ahead.'],
      faq: [
        ['How is attendance percentage calculated?', 'Classes attended ÷ classes held × 100. For example, 28 of 40 classes is 70%.'],
        ['How many classes do I need to attend to reach 75%?', 'The tool finds the smallest number of classes in a row that brings (attended + x) ÷ (held + x) up to 75%. For 28 of 40 that is 8 classes.'],
        ['How many classes can I skip and stay above 75%?', 'It finds the largest number of classes you can miss so that attended ÷ (held + missed) is still at least 75%.'],
        ['Can I plan for the whole semester?', 'Yes. Enter the classes still to come to see how many you must attend, how many you can miss and the best final percentage possible.'],
        ['Does it work for 80% or 85% rules?', 'Yes. Change the required attendance to any value from 0 to 100%.']
      ],
      icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M8.5 15.5l2 2 4.5-4.5"/>'
  },
  {
      slug: 'text-to-handwriting', cat: 'Study tools', name: 'Text to Handwriting',
      title: 'Text to Handwriting Converter - Notebook Page, PNG & PDF',
      desc: 'Turn typed text into realistic handwriting on ruled, plain or grid paper. Six styles, any ink colour, multi-page PNG, ZIP and PDF. Free and private.',
      card: 'Turn typed text into realistic handwritten pages.',
      intro: 'Type or paste your text and see it written by hand on notebook paper, with a natural wobble in every letter. Choose the handwriting, paper and ink, then download the pages as images or one PDF.',
      steps: ['Type or paste your text.', 'Choose a handwriting style, paper and ink colour.', 'Adjust size, spacing and messiness until it looks natural.', 'Download a page as PNG, all pages as a ZIP, or one PDF.'],
      faq: [
        ['Does it look like real handwriting?', 'Yes. Each letter and word is drawn with a small random change in height, angle, size and ink darkness, so no two letters look exactly the same. The Messiness slider controls how much.'],
        ['Can I make several pages?', 'Yes. Long text flows onto new A4 pages automatically. Flip through them in the preview and download all pages as a PDF or a ZIP of PNG images.'],
        ['Which languages work?', 'The handwriting fonts cover English and most Western European letters with accents. Other scripts and emoji fall back to your device\'s normal font.'],
        ['Is my text uploaded?', 'No. The pages are drawn in your browser and the text never leaves your device.'],
        ['Can I use the images for school or social media?', 'Yes, the pages you make are yours to use. The fonts are free open-licence (SIL OFL) fonts. Please do not hand in computer-made handwriting where real handwriting is required.']
      ],
      icon: '<path d="M3 21c2-1 3-3 5-3s2 2 4 2 3-2 5-2"/><path d="M14.5 3.5l3 3L9 15l-4 1 1-4z"/>'
  },
  {
      slug: 'mind-map-maker', cat: 'Study tools', name: 'Mind Map Maker',
      title: 'Mind Map Maker - Free Online Mind Mapping Tool',
      desc: 'Create mind maps online: add topics with Tab and Enter, drag, auto layout, colours, collapse, undo. Save maps, export PNG or JSON, print. No sign-up.',
      card: 'Brainstorm ideas as a colourful mind map.',
      intro: 'Start with a central idea and grow branches around it. Add topics with the keyboard or a tap, drag them anywhere, tidy everything with Auto layout, and export a sharp PNG.',
      steps: ['Double-click the central topic and type your subject.', 'Select a topic and press Tab for a child or Enter for a sibling.', 'Drag topics, change colours, collapse branches or click Auto layout.', 'Download a PNG, export JSON or print.'],
      faq: [
        ['Are my mind maps saved?', 'Yes. Every change is saved automatically in this browser, and you can keep several maps. Use Export JSON for a backup or to move a map to another device.'],
        ['Does it work on a phone or tablet?', 'Yes. Tap to select, double-tap to edit, drag topics with your finger, drag the background to pan and pinch to zoom.'],
        ['What are the keyboard shortcuts?', 'Tab adds a child, Enter adds a sibling, F2 edits, Space collapses or expands, Delete removes a topic, the arrow keys move between topics and Ctrl+Z / Ctrl+Y undo and redo.'],
        ['How big is the PNG export?', 'The image is made at up to three times screen size and up to 8000 pixels on the longest side, so it stays sharp when printed or zoomed.'],
        ['Is anything uploaded?', 'No. Your maps stay in your browser. Nothing is sent to a server.']
      ],
      icon: '<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M9.5 10.3L5.6 6.4M14.5 10.3l3.9-3.9M9.5 13.7l-3.9 3.9M14.5 13.7l3.9 3.9"/>'
  },
  {
      slug: 'focus-sounds', cat: 'Study tools', name: 'Focus Sounds',
      title: 'Focus Sounds - Rain, White & Brown Noise Mixer Online',
      desc: 'Mix rain, ocean, wind, fireplace, coffee shop, white, pink and brown noise for focus or sleep. Presets and fade-out timer. Free, no downloads.',
      card: 'Mix rain, noise and nature sounds for focus or sleep.',
      intro: 'Play calming background sounds made live in your browser. Mix rain, waves, wind, fire, a coffee shop and white, pink or brown noise, and set a timer that fades out gently.',
      steps: ['Click Play or choose a preset such as Deep focus or Sleep.', 'Switch sounds on and set each slider to build your mix.', 'Set the master volume and, if you like, a timer.', 'Keep working: the sound plays on in the background.'],
      faq: [
        ['What is the difference between white, pink and brown noise?', 'White noise has equal energy at all frequencies and sounds bright, like a hiss. Pink noise is softer, like steady rain. Brown noise is deeper still, like a distant waterfall or rumble.'],
        ['Does it keep playing in another tab?', 'Yes. Sound keeps playing when you switch tabs or apps, and the timer fade still happens on time. Some phones may pause it when the screen locks.'],
        ['Why does nothing play until I click?', 'Browsers do not allow web pages to start sound on their own. One click on Play, a preset or a sound starts it.'],
        ['Does it use a lot of data?', 'No. There are no audio files. Every sound is generated live on your device with Web Audio, so it uses no data after the page has loaded.'],
        ['Is my mix saved?', 'Yes. Your sounds, volumes and master volume are remembered in this browser for next time.']
      ],
      icon: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/>'
  },
  {
    slug: 'citation-generator', cat: 'Study tools', name: 'Citation Generator',
    title: 'Citation Generator - APA, MLA, Harvard and Chicago, Free',
    desc: 'Make correct citations in APA 7, MLA 9, Harvard and Chicago for websites, books, journals, news, videos and reports. Italics kept when you copy. Free.',
    card: 'APA, MLA, Harvard and Chicago citations.',
    intro: 'Fill in a source and get the reference and in-text citation in APA, MLA, Harvard or Chicago, with italics in the right places. Build a reference list that re-formats itself when you change style.',
    steps: ['Choose the citation style and the type of source.', 'Add the authors and the title, date, link and other details you have.', 'Copy the reference or the in-text citation, or click Add to my list.', 'Sort the list A to Z, then copy it all or download it for Word.'],
    faq: [
      ['Which editions does it follow?', 'APA 7th edition, MLA 9th edition, Harvard as described in Cite Them Right, and the Chicago Manual of Style 18th edition (notes and bibliography, and author-date).'],
      ['How does it handle many authors?', 'It follows each style: APA lists up to 20 authors, MLA uses et al. for three or more, Harvard lists everyone in the reference list, and Chicago lists up to six before et al. In-text citations use et al. where the style says so.'],
      ['What if the source has no date or no author?', 'Leave the year empty and the citation uses n.d. (no date in Harvard). With no author, the title moves to the front as each style requires.'],
      ['Are the italics kept when I paste?', 'Yes. Copying puts formatted text on the clipboard, so Word, Google Docs and Pages keep the italics. Apps that only take plain text get plain text.'],
      ['Does it change the capitals in my title?', 'No. Titles are kept as you type them. APA and Harvard use sentence case and MLA and Chicago use title case, so type the title the way your style wants.'],
      ['Is my reference list saved?', 'Yes, in this browser only. Nothing is uploaded. Download the list if you want a copy elsewhere.']
    ],
    icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/><path d="M9 7v3M9 7h1.5M14 7v3M14 7h1.5"/>'
  },
  {
    slug: 'pomodoro-timer', cat: 'Study tools', name: 'Pomodoro Study Timer',
    title: 'Pomodoro Timer Online - Free Study Timer with Tasks',
    desc: 'A free Pomodoro timer: 25-minute focus sessions with short and long breaks, sound, notifications, a task list and today’s study stats. No sign-up.',
    card: 'Focus in 25-minute blocks with breaks.',
    intro: 'Study in focused blocks with planned breaks. Set your own lengths, track pomodoros for each task and see how much you focused today.',
    steps: ['Add the task you are working on.', 'Click Start and focus until the chime.', 'Take the short break, and a long break after every fourth session.', 'Open Timer settings to change the lengths, sound, notifications and auto-start.'],
    faq: [
      ['What is the Pomodoro technique?', 'A way of working in short focused blocks, usually 25 minutes, each followed by a 5-minute break, with a longer break after every four blocks.'],
      ['Does it keep time in a background tab?', 'Yes. Time is worked out from the clock, not by counting ticks, so it stays exact in a background tab and catches up after your computer sleeps.'],
      ['Can I change the lengths?', 'Yes. Open Timer settings to set the focus, short break and long break minutes, and how many focus sessions come before the long break.'],
      ['How do notifications work?', 'Tick Show a notification and your browser asks for permission once. You then get a notification when each session ends. The site never asks unless you tick the box.'],
      ['Are my tasks and stats saved?', 'Yes, in this browser on this device. Nothing is sent to a server.']
    ],
    icon: '<circle cx="12" cy="14" r="7"/><path d="M12 7c0-2 1-3.5 3-4M8.5 7.6 12 9l3.5-1.4M12 11.5V14l2 1.5"/>'
  },
  {
    slug: 'flashcards', cat: 'Study tools', name: 'Flashcards',
    title: 'Flashcard Maker Online - Free Flashcards with Spaced Repetition',
    desc: 'Make flashcard decks, import a list or CSV, and study with flip cards and spaced repetition. Works offline on phone and computer. Free, no sign-up.',
    card: 'Make and study flip cards with spaced repetition.',
    intro: 'Make decks of flip cards and learn them with spaced repetition. Type cards, paste a list such as term - definition, or open a CSV file.',
    steps: ['Create a deck and add cards, or paste a list in Import and export.', 'Open Study, read the front and flip the card.', 'Mark it Know it or Still learning, with the buttons, arrow keys or a swipe.', 'Come back each day to review the cards that are due.'],
    faq: [
      ['How does the spaced repetition work?', 'It uses five Leitner boxes. A card you know moves up one box and waits 1, 3, 7 or 14 days before it is due again. A card you miss goes back to box 1 and comes back in the same round.'],
      ['What can I import?', 'Pasted lines like term - definition, rows copied from a spreadsheet, CSV or TSV files, and the JSON files this tool exports. A header row such as term, definition is skipped.'],
      ['Are there keyboard shortcuts?', 'Yes. Space flips the card, the right arrow means Know it, the left arrow means Still learning and Backspace goes back one card. On touch screens, tap to flip and swipe right or left.'],
      ['Where are my decks saved?', 'In this browser on your device. Large collections are kept in IndexedDB. Download a backup to move decks to another device.'],
      ['Can I turn off the flip animation?', 'If your device is set to reduce motion, or animations are off in the site settings, cards switch sides without moving.']
    ],
    icon: '<rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2"/><path d="M7 13h6"/>'
  },
  {
    slug: 'timetable-maker', cat: 'Study tools', name: 'Timetable Maker',
    title: 'Timetable Maker - Free School Timetable, PNG and PDF',
    desc: 'Make a weekly class timetable: pick days, set periods and breaks, add subjects with rooms, teachers and colours, then download PNG or PDF or print.',
    card: 'Weekly class timetable to PNG, PDF or print.',
    intro: 'Build a weekly school or college timetable. Set your days, periods and breaks, click the grid to add classes, then download it or print it.',
    steps: ['Tick the days and set the periods and breaks under Times and periods.', 'Click an empty cell to add a class with its subject, room, teacher and colour.', 'Click a class to change, lengthen or delete it.', 'Download a PNG or PDF, or print.'],
    faq: [
      ['Can a class last more than one period?', 'Yes. Choose 2 or more periods when you add a class, for a double or triple lesson. A class stops at the next break.'],
      ['Can I use my own period times?', 'Yes. Generate periods from a start time, end time and period length, then change any row’s times, rename it, or turn it into a break.'],
      ['Does it work on a phone?', 'Yes. The table scrolls sideways inside its box on small screens, and the time column stays in view.'],
      ['Is the PDF made online?', 'No. The PNG and PDF are made on your device, and your timetable is never uploaded.'],
      ['Is my timetable saved?', 'Yes, in this browser. It is there when you come back, until you clear the site’s data.']
    ],
    icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M9 4v17M15 4v17M3 15h18"/>'
  },
  {
      slug: 'currency-converter', cat: 'Finance calculators', name: 'Currency Converter',
      title: 'Currency Converter - USD to PKR, INR, AED & 170+ Rates',
      desc: 'Convert 170+ currencies, including PKR, INR, AED, SAR and Bitcoin, with daily mid-market rates, a rate history chart and offline use.',
      card: 'Convert 170+ currencies with daily rates and charts.',
      intro: 'Type an amount to convert it instantly between more than 170 currencies, see the rate history for any pair and compare several currencies at once.',
      steps: ['Pick the currency you have in From and the one you want in To. Search by code, name or country.', 'Type the amount. You can also type in the To box to work backwards.', 'Check the rate history chart, or add more currencies to see the same amount in each.'],
      faq: [
        ['Where do the exchange rates come from?', 'Daily mid-market reference rates from ExchangeRate-API, with the free currency-api project as a backup and for crypto, gold and the history chart. The page shows when the rates were last updated.'],
        ['Are these live market rates?', 'No. They are reference rates published about once a day. The page checks for new rates every 10 minutes while it is open, but the rates themselves change once a day.'],
        ['Why does my bank give a different rate?', 'Banks, exchange companies and card providers add a margin to the mid-market rate, and some charge fees. Use this converter to see how big their margin is.'],
        ['Does it work offline?', 'Yes. The last rates you downloaded are saved on your device and used when you are offline, with a clear note showing their date.'],
        ['Is Pakistani rupee (PKR) included?', 'Yes. PKR, INR, AED, SAR, BDT and about 160 other currencies are included, plus Bitcoin, Ethereum and gold. You can also add your own rate for a currency that is missing.']
      ],
      icon: '<circle cx="8" cy="8" r="5"/><path d="M16.5 11a5 5 0 1 1-5.5 5.5M8 6v4M6.5 7h2.2a1 1 0 0 1 0 2H7"/><path d="M14 3l3 3-3 3M17 6h-4"/>'
  },
  {
      slug: 'alarm-clock', cat: 'Time tools', name: 'Online Alarm Clock',
      title: 'Online Alarm Clock - Free Alarm with Sounds & Snooze',
      desc: 'Set free online alarms with labels, repeat days, six sounds, volume, gentle wake-up and snooze. A big live clock in 12 or 24-hour time.',
      card: 'Set alarms with sounds, repeat days and snooze.',
      intro: 'Set one or more alarms in your browser with a label, repeat days and a choice of sounds. Keep the tab open and the alarm rings on time.',
      steps: ['Pick a time, add a label if you like, and choose a sound.', 'Tick repeat days, or leave them empty for a one-time alarm.', 'Click Add alarm and keep this tab open with your computer awake.', 'When it rings, click Snooze or Stop.'],
      faq: [
        ['Will the alarm ring if I close the tab?', 'No. The alarm runs in this page, so the tab must stay open and the computer must stay awake. If it was asleep, the alarm rings when it wakes if less than 10 minutes late, or shows as missed.'],
        ['Does it work when the tab is in the background?', 'Yes. The alarm checks the time four times a second using a background timer that browsers do not slow down, and the tab title flashes when it rings.'],
        ['Why is there no sound?', 'Browsers block sound until you click the page once. Click anywhere on the page after opening it, check your volume, and use Test sound.'],
        ['Are my alarms saved?', 'Yes. Alarms and settings are saved in your browser on this device and come back when you open the page again.'],
        ['Can I use it on my phone?', 'Yes, but phones often pause web pages when the screen locks. For important alarms on a phone, use the phone’s own clock app.']
      ],
      icon: '<circle cx="12" cy="13" r="7"/><path d="M12 10v3l2 2M5 4L2.5 6.5M19 4l2.5 2.5M8 20l-1.5 2M16 20l1.5 2"/>'
  },
  {
      slug: 'coin-flip', cat: 'Generators', name: 'Coin Flip & Dice Roller',
      title: 'Coin Flip & Dice Roller - Fair Online Heads or Tails',
      desc: 'Flip a coin or roll 1 to 10 dice (d4, d6, d8, d10, d12, d20, d100) with fair, secure randomness, history and heads or tails statistics.',
      card: 'Flip a coin or roll dice, fair and random.',
      intro: 'Flip a coin for heads or tails, or roll up to 10 dice of any common type. Every result uses your browser’s secure random generator.',
      steps: ['Choose Coin flip or Dice roller.', 'Click Flip the coin, or pick the number and type of dice and click Roll.', 'See the result, the totals and the statistics below.'],
      faq: [
        ['Is the coin flip really 50/50?', 'Yes. It uses the browser’s cryptographic random number generator with rejection sampling, so heads and tails are exactly equally likely.'],
        ['Which dice can I roll?', 'd4, d6, d8, d10, d12, d20 and d100, from 1 to 10 dice at once. The total is added up for you.'],
        ['Why did I get heads five times in a row?', 'Streaks are normal in random results. In 100 flips, a run of 5 or more of the same side happens most of the time.'],
        ['Can I turn off the animation or sound?', 'Yes. Untick Sound effects for silence. The animation is skipped if your device asks for reduced motion or you turn animations off in Settings.'],
        ['Is my history saved?', 'Your last 50 results and the statistics are kept in this browser until you click Clear history and statistics.']
      ],
      icon: '<circle cx="8.5" cy="8.5" r="5.5"/><path d="M8.5 6v5"/><rect x="12" y="12" width="9" height="9" rx="2"/><path d="M15 15h.01M18 18h.01"/>'
  }
];
