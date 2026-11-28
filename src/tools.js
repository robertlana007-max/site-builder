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
    desc: 'Estimate your monthly mortgage payment including principal, interest, property tax, home insurance and HOA or service fees.',
    card: 'Monthly house payment with tax and insurance.',
    intro: 'Estimate the full monthly cost of a home loan: principal and interest plus property tax, insurance and HOA or service fees.',
    steps: ['Enter the home price and your down payment.', 'Enter the interest rate and choose the loan term.', 'Add yearly property tax and insurance, and any monthly HOA or service charge.', 'Read the total monthly payment.'],
    faq: [
      ['What is included in the monthly payment?', 'Principal and interest on the loan, plus one twelfth of the yearly property tax and insurance, plus any monthly HOA or service charge.'],
      ['Does it include mortgage insurance?', 'No. With a small down payment (often under 20 percent) many lenders add mortgage insurance, called PMI in the United States. It is not included here.'],
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
      ['What formats can I type?', 'HEX such as #4f46e5 or #fff, RGB such as rgb(79, 70, 229), HSL such as hsl(243, 75%, 59%), and color names such as red or teal. Codes with transparency (rgba, #rrggbbaa) also work; the result shows the solid color.'],
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
      ['Which characters can I use?', 'Any language, including Arabic, Urdu, Chinese and emoji. Latin letters are added as real text; other scripts are added as a sharp see-through picture of the text.'],
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
    desc: 'Convert numbers into English words, or write a money amount for a check or cheque in your currency. Handles decimals, lakh/crore and huge numbers.',
    card: 'Spell out any number in English words.',
    intro: 'Turn digits into English words, for writing checks, contracts and invoices.',
    steps: ['Type a number.', 'Choose a plain number or a money amount, and your currency.', 'Click Copy.'],
    faq: [
      ['How do I write an amount on a check or cheque?', 'Choose "Money amount" and your currency. The cents are written as a fraction, for example "One thousand two hundred thirty-four dollars and 56/100".'],
      ['Can it write lakh and crore?', 'Yes. Set "Number style" to "Lakh and crore", so 12,50,000 becomes "Twelve lakh fifty thousand".'],
      ['How large a number can it handle?', 'Up to 18 digits, which is hundreds of quadrillions.'],
      ['Does it use "and"?', 'No. It writes "one hundred five" without "and", which is accepted on checks and cheques everywhere.']
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
        ['Can I use rupees, euros or pounds?', 'Yes. Choose from 25 common currencies (for example USD, EUR, GBP, PKR, INR, AED, JPY, NGN or BRL), or type your own currency symbol. Symbols such as ₨, ₹, € and £ appear correctly in the PDF.'],
        ['How are tax and discount calculated?', 'The discount is taken off the subtotal first, then each tax is worked out on the discounted amount. Shipping is added after tax, and any amount paid is subtracted to give the balance due.'],
        ['Is the PDF text real or a picture?', 'Real text. The PDF is small and sharp, and the amounts and names can be searched and copied.'],
        ['Can an invoice have many items?', 'Yes. Long invoices continue onto extra pages, with the table header repeated and page numbers on every page.']
      ],
      icon: '<path d="M6 2h9l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M14 2v6h6M8 13h8M8 17h5"/><path d="M10 9.5H8"/>'
  },
  {
      slug: 'image-to-text', cat: 'Image tools', name: 'Image to Text (OCR)',
      title: 'Image to Text Converter - Free OCR Online, No Upload',
      desc: 'Copy text from photos, screenshots and scans in 12 languages. Paste with Ctrl+V or drop several images, then copy or download the text. Runs on your device.',
      card: 'Copy the text out of photos and screenshots.',
      intro: 'Turn the words in a picture into text you can copy and edit, in English, Arabic, Chinese, French, German, Hindi, Indonesian, Portuguese, Russian, Spanish, Turkish or Urdu. Drop images or paste a screenshot, and the text appears in seconds. The reading happens on your device, so your pictures stay private.',
      steps: ['Choose the language of the text.', 'Drop one or more images on the box, or press Ctrl+V to paste a screenshot.', 'Wait while each image is read, then choose whether to keep line breaks and correct any mistakes.', 'Press Copy text or Download .txt.'],
      faq: [
        ['Are my images uploaded?', 'No. The text is read by your own browser. The reader and the data for your language are downloaded from this site the first time (about 4 MB plus 0.6 to 3 MB per language) and are then kept for offline use.'],
        ['Which languages can it read?', 'English, Arabic, Chinese (Simplified), French, German, Hindi, Indonesian, Portuguese, Russian, Spanish, Turkish and Urdu. If your text mixes a language with English words, tick "The text also has English words in it".'],
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
    desc: 'Convert a date and time to many time zones at once: the Americas, Europe, Africa, the Middle East and Asia. Handles daylight saving. Free and private.',
    card: 'See one time in many time zones at once.',
    intro: 'Pick a date, a time and a time zone, and see the same moment in the Americas, Europe, Africa, the Middle East, Asia, Australia and any other zone you add. Daylight saving is handled for you.',
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
      title: 'CGPA to Percentage Converter - 4.0, 5.0 & 10-Point Scales',
      desc: 'Convert CGPA to percentage or percentage to CGPA with labelled formulas: proportional 4.0, 5.0 and 10-point scales, CBSE and Delhi University × 9.5, VTU, GTU, Mumbai, Anna, Pakistan or your own.',
      card: 'CGPA to percentage and back, by formula.',
      intro: 'Convert a CGPA to a percentage, or a percentage to a CGPA, with the formula for your board or university written out next to the result.',
      steps: ['Choose CGPA → Percentage or Percentage → CGPA.', 'Pick the formula for your board or university, or enter a custom one.', 'Type your CGPA or percentage.', 'Read the result and the note about that formula.'],
      faq: [
        ['Is there one official formula for every university?', 'No. Each board and university sets its own rule or equivalence table. This tool shows common formulas for a quick estimate; the figure your university gives is the one that counts.'],
        ['How do I convert a 4.0 CGPA to a percentage?', 'There is no single formula for every university. The simple proportional estimate is CGPA ÷ 4 × 100, so 3.2 becomes 80%. Many universities (for example in Pakistan, Bangladesh or the USA) publish their own equivalence tables, so check yours before using the number on a form.'],
        ['What is the CBSE formula?', 'Multiply the CGPA by 9.5. CBSE gave this for its CGPA grades, so 8.4 becomes 79.8%.'],
        ['What are the VTU, GTU and Mumbai University formulas?', 'The commonly quoted VTU (and MAKAUT) formula is (CGPA − 0.75) × 10, GTU uses (CGPA − 0.5) × 10, and Mumbai University 7.1 × CGPA + 11. Rules can differ by scheme and year, so confirm yours.'],
        ['Can I use my own university formula?', 'Yes. Choose Custom and enter the multiplier, the offset and the highest CGPA on your scale.']
      ],
      icon: '<path d="M4 7h7M4 12h4"/><path d="M14 17l6-10"/><circle cx="14.5" cy="8.5" r="1.5"/><circle cx="19.5" cy="15.5" r="1.5"/><path d="M4 17h7"/>'
  },
  {
      slug: 'marks-percentage-calculator', cat: 'Study tools', name: 'Marks Percentage Calculator',
      title: 'Marks Percentage Calculator - Total & Subject-Wise with Grade',
      desc: 'Find your marks percentage from total or subject-wise marks, with letter grades, UK degree classes, Pakistan board grades, Indian divisions or your own grade cut-offs.',
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
      title: 'Currency Converter - USD, EUR, PKR, INR, AED & 170+ Rates',
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
  },
  {
      slug: 'background-remover', cat: 'Image tools', name: 'Background Remover',
      title: 'Background Remover - Remove Photo Background Free',
      desc: 'Remove the background from any photo in your browser. Get a transparent PNG or add a colour, blur or new picture. Free, no upload, no sign-up.',
      card: 'Cut out the subject of a photo, no upload.',
      intro: 'Remove the background from a photo of a person, product or pet and download a transparent PNG. An AI model runs on your own device, so your photo is never uploaded.',
      steps: ['Click the box or drop a photo onto it. The background is removed automatically.', 'Drag across the picture to compare it with the original, and use Restore or Erase to fix any spots by hand.', 'Pick a background: transparent, a solid colour, a blurred copy of the original or your own picture.', 'Click Download PNG, or Download JPG for a smaller file with a filled background.'],
      faq: [
        ['Is my photo uploaded to a server?', 'No. The AI model is downloaded to your browser and the background is removed on your own device. Your photo is never sent anywhere.'],
        ['Is it really free?', 'Yes. There is no sign-up, no watermark and no limit on the number of photos, and you get the full-size result.'],
        ['What is the difference between Fast and Best quality?', 'Fast uses a small 5 MB model and takes a second or two. Best quality uses a larger 47 MB model that copes much better with busy backgrounds and thin parts like mirrors and straps, but takes several seconds or more on a phone.'],
        ['Why is part of my subject missing or some background left?', 'The AI guesses what the main subject is. Choose Fine-tune, then paint with Restore to bring parts back or Erase to remove leftovers. Trying Best quality also often helps.'],
        ['Does it work offline?', 'After the first photo the AI files are saved by your browser, so later photos work even without an internet connection.'],
        ['Why does the JPG have a white background?', 'JPG files cannot be see-through, so the empty area is filled with your background colour. Download PNG to keep the transparent background.']
      ],
      icon: '<path d="M4 20h16"/><path d="M12 3c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/><path d="M3 3l3 3M18 3l3 3M3 9l2 0M19 9l2 0" stroke-dasharray="2 2"/>'
  },
  {
      slug: 'study-planner', cat: 'Study tools', name: 'Study Planner',
      title: 'Study Planner - Free Exam Revision Timetable Maker',
      desc: 'Make a day-by-day revision timetable from your exam dates. More time for hard subjects, revision days, live countdowns and .ics calendar export.',
      card: 'Turn exam dates into a daily revision timetable.',
      intro: 'Add your exams, topics and the hours you can study, and get a day-by-day revision plan up to your last exam, with live countdowns and a calendar export.',
      steps: ['Add each exam with its date, difficulty and the topics you need to cover.', 'Set how many hours you can study on each day of the week and add any rest days.', 'Follow the plan and tick off sessions as you finish them. The rest is re-planned from today.', 'Export the plan as an .ics file for your calendar, or print it.'],
      faq: [
        ['How does the planner decide what to study each day?', 'It hands out your study time in half-hour blocks. Each block goes to the exam that is most behind, measured as work left divided by time left before the exam, with harder subjects weighted higher. Closer exams are never starved of time.'],
        ['Do harder subjects really get more time?', 'Yes. Topic hours are multiplied by 0.8 for difficulty 1 up to 1.3 for difficulty 5, so a very hard subject gets 30% more time than you estimated.'],
        ['What happens if I miss a day?', 'Nothing breaks. The plan always starts from today, so unfinished work is spread over the days that are left. Tick only what you actually did.'],
        ['Can I add the plan to Google Calendar or my iPhone?', 'Yes. Click Export .ics and open or import the file in Google Calendar, Apple Calendar or Outlook. Each study session and exam becomes an event.'],
        ['Is my plan saved?', 'Yes, in your browser on this device. Nothing is uploaded, so it does not appear on other devices or in private browsing.']
      ],
      icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M9 15.5l2 2 4-4"/>'
  },
  {
      slug: 'homework-tracker', cat: 'Study tools', name: 'Homework Tracker',
      title: 'Homework Tracker - Free Online Assignment Planner',
      desc: 'Track homework with due dates, priorities and subjects. List and drag-and-drop board views, reminders and JSON backup. Free, private, no sign-up.',
      card: 'Keep track of homework and due dates.',
      intro: 'Write down every assignment with its subject, due time and priority, see what is overdue or due today, and drag work from To do to Done.',
      steps: ['Type the homework, its subject, due date and time, and pick a priority.', 'See it in the list under Overdue, Today, Tomorrow or later, or switch to the board.', 'Tick it off or drag it to Done when you finish.', 'Turn on reminders, and export a JSON backup now and then.'],
      faq: [
        ['Is my homework list saved?', 'Yes. It is saved in your browser on this device and never uploaded. Use Export JSON to move it to another device.'],
        ['How do reminders work?', 'Turn on reminders and allow notifications when your browser asks. While the page is open in a tab, you get a notification before each item is due, from 15 minutes to 1 day early.'],
        ['Can I drag cards on a phone?', 'Yes. In the board view, drag a card by its ⠿ handle, or use the arrow buttons on the card to move it between To do, Doing and Done.'],
        ['Can I change the colour of a subject?', 'Yes. Under Progress by subject, tap the colour square next to a subject and pick a new colour.'],
        ['What does "Later this week" mean?', 'It holds homework due after tomorrow and up to this Sunday. Anything after that is under Later.']
      ],
      icon: '<path d="M9 3h6v4H9z"/><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M9 14l2 2 4-4"/>'
  },
  {
      slug: 'formula-sheet', cat: 'Study tools', name: 'Formula Sheet',
      title: 'Formula Sheet - Maths, Physics & Chemistry Formulas',
      desc: 'Search 230+ maths, physics and chemistry formulas with symbols, units and solve-for-any-variable calculators. Save favourites and print by section.',
      card: '230+ formulas with built-in calculators.',
      intro: 'Look up algebra, geometry, trigonometry, calculus, statistics, physics and chemistry formulas, see what every letter means, and solve any formula for any letter.',
      steps: ['Search for a formula or pick a section.', 'Read the formula with the meaning and unit of each symbol.', 'Click Use it, choose the letter to find and type the other values.', 'Star your favourites or print a section.'],
      faq: [
        ['Which formulas are included?', 'More than 230: algebra, areas, volumes and surface areas, trig identities and the sine and cosine rules, derivative and integral rules, statistics and probability, physics from motion to optics and thermodynamics, and chemistry from moles to gas laws and pH.'],
        ['Can the calculator solve for any variable?', 'Yes. Over 100 formulas have a calculator where you choose which letter to find. It solves numerically, so you do not need to rearrange the formula, and it shows every real answer when there is more than one.'],
        ['What units should I use?', 'Use the units shown next to each symbol, which are SI units such as metres, kilograms, seconds and kelvin. Angles in the calculators are in degrees.'],
        ['Does it work offline?', 'Yes. The formulas are drawn with plain HTML and CSS and nothing is loaded from other websites, so the page works once it has loaded.'],
        ['Can I print a formula sheet?', 'Yes. Click Print next to any section heading to print that section as a compact two-column sheet.']
      ],
      icon: '<path d="M18 5H6l6 7-6 7h12"/>'
  },
  {
      slug: 'video-compressor', cat: 'Media tools', name: 'Video Compressor',
      title: 'Video Compressor - Reduce MP4 & MOV File Size Free',
      desc: 'Compress MP4, MOV and WebM videos in your browser. Pick a quality or a target size in MB, lower the resolution and download an MP4. No upload.',
      card: 'Shrink videos to a size you choose, privately.',
      intro: 'Make a video small enough for email, WhatsApp or an upload form. Choose a quality preset or type the size you need in MB. The video is compressed on your own device and never uploaded.',
      steps: ['Click the box or drop a video onto it.', 'Choose a quality preset, or switch to Target file size and type the MB you need.', 'Pick a resolution and decide whether to keep the sound.', 'Click Compress video, then Download video.'],
      faq: [
        ['Is my video uploaded to a server?', 'No. The video is compressed by your own browser using a built-in copy of FFmpeg. It never leaves your device.'],
        ['How much smaller will my video get?', 'Phone videos usually shrink by 50 to 90%. Lowering the resolution to 720p or 480p saves the most. The tool shows the original size, the new size and the percentage saved.'],
        ['How does target size work?', 'The tool divides the size you want by the length of the video to work out a bitrate. The result normally lands within about 10% of your target.'],
        ['Why is the first video slow to start?', 'The video engine is about 32 MB and is downloaded the first time you use it. After that your browser keeps it, so later videos start quickly.'],
        ['What is the largest video I can compress?', 'Up to 1 GB. Long or 4K videos take a while because everything runs inside the browser. A computer is much faster than a phone.'],
        ['Why did I get the original file back?', 'If the compressed copy would be bigger than your original, the tool gives you the original instead. Try Smallest file or a lower resolution.']
      ],
      icon: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3"/><path d="M6 10l3 2 3-2M9 12V8"/>'
  },
  {
      slug: 'video-trimmer', cat: 'Media tools', name: 'Video Trimmer',
      title: 'Video Trimmer - Cut MP4, MOV & WebM Videos Online Free',
      desc: 'Trim the start and end of a video in your browser. Set times by playing the video or typing them, cut without quality loss and download. No upload.',
      card: 'Cut the part of a video you want to keep.',
      intro: 'Cut a long video down to the part you need. Play the video, mark the start and end, and save the clip. Fast mode keeps the original quality, and nothing is uploaded.',
      steps: ['Click the box or drop a video onto it.', 'Play the video and press Set start here and Set end here, or type the times.', 'Choose Fast (no quality loss) or Exact frame, and tick Remove sound if you want it silent.', 'Click Trim video, then Download clip.'],
      faq: [
        ['Does trimming lower the quality?', 'Not in Fast mode. The video is copied without re-encoding, so the clip looks exactly like the original. Exact frame mode re-encodes at high quality.'],
        ['Why does my fast clip start a little early?', 'Videos can only be cut cleanly at key frames, which come every 1 to 5 seconds. Fast mode starts at the key frame just before your start time. Use Exact frame mode for a precise cut.'],
        ['How do I type a time?', 'Use minutes and seconds like 1:05 or 1:05.5, hours like 1:02:30, or just seconds like 65.'],
        ['Is my video uploaded?', 'No. The video is cut inside your browser and never leaves your device.'],
        ['Which formats can I trim?', 'MP4, MOV, WebM, MKV, AVI and most phone and camera videos up to 1 GB. Fast mode keeps the same format; Exact frame mode saves an MP4.']
      ],
      icon: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>'
  },
  {
      slug: 'video-to-gif', cat: 'Media tools', name: 'Video to GIF',
      title: 'Video to GIF Converter - Make GIFs from MP4 Free',
      desc: 'Turn part of an MP4, MOV or WebM video into an animated GIF in your browser. Choose start, length, size and frame rate. High quality colours, no upload.',
      card: 'Turn a video clip into an animated GIF.',
      intro: 'Make a looping GIF from any short moment in a video. Pick where it starts, how long it lasts and how big it is. The GIF is made on your device with an optimised colour palette, so it looks sharp and stays small.',
      steps: ['Click the box or drop a video onto it.', 'Play the video and press Start the GIF here, or type a start time, then set the length (up to 20 seconds).', 'Choose the frames per second, width, colours and whether it loops.', 'Click Make GIF, check the preview, then Download GIF.'],
      faq: [
        ['How long can my GIF be?', 'Up to 20 seconds. GIF is an old format with no real compression, so long GIFs quickly become many megabytes. 3 to 6 seconds is ideal for chats and websites.'],
        ['How do I make the GIF smaller?', 'Lower the width, choose fewer frames per second (8 to 12 is plenty) or a shorter length. Fewer colours also helps a little.'],
        ['Why do the colours look so good?', 'The tool first builds the best 256-colour palette for your clip, then maps every frame onto it. This avoids the grainy look of simple converters.'],
        ['Is my video uploaded?', 'No. The GIF is made inside your browser and the video never leaves your device.'],
        ['Will the GIF have sound?', 'No. The GIF format cannot hold sound. If you need sound, use the Video Trimmer to make a short MP4 clip instead.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M10.5 9.5H8.5a1.5 1.5 0 0 0-1.5 1.5v2a1.5 1.5 0 0 0 1.5 1.5h2v-2.5H9M13 9.5v5M16 14.5v-5h2.5M16 12h2"/>'
  },
  {
      slug: 'video-converter', cat: 'Media tools', name: 'Video Converter',
      title: 'Video Converter - MOV to MP4, WebM, MP3 Online Free',
      desc: 'Convert videos to MP4, WebM or MOV, or save the sound as MP3, right in your browser. Rotate or remove sound too. Private, no upload, no sign-up.',
      card: 'Convert videos to MP4, WebM, MOV or MP3.',
      intro: 'Change a video into the format you need: MP4 that plays everywhere, WebM for websites, MOV for Apple apps, or just the sound as an MP3. You can also rotate a sideways video or remove its sound. Everything happens on your device.',
      steps: ['Click the box or drop a video onto it.', 'Choose the format in Convert to.', 'Optionally rotate the video or tick Remove sound.', 'Click Convert, then download the new file.'],
      faq: [
        ['How do I convert MOV to MP4?', 'Drop the MOV file, choose MP4 and click Convert. iPhone MOV files that already use H.264 are copied into MP4 without re-encoding, so it takes seconds and keeps full quality.'],
        ['Can I get just the audio as MP3?', 'Yes. Choose MP3 (sound only). The sound track is saved as a high quality MP3 of about 190 kbps.'],
        ['How do I fix a sideways video?', 'Choose 90° clockwise, 90° counter-clockwise or 180° in Rotate. The video is turned for real, not just flagged, so it plays the right way up everywhere.'],
        ['Is my video uploaded?', 'No. The conversion runs in your browser with a built-in copy of FFmpeg. The video never leaves your device.'],
        ['Which format should I pick?', 'MP4 for phones, social media, email and most apps. WebM for web pages. MOV for Final Cut, iMovie and other Apple apps. MP3 when you only need the sound.'],
        ['Why is converting slow?', 'Re-encoding video is hard work, and a browser tab uses only one processor core. A one-minute 1080p clip can take a few minutes. Smaller and shorter videos are quicker.']
      ],
      icon: '<rect x="2" y="6" width="13" height="12" rx="2"/><path d="M15 10l5-3v10l-5-3"/><path d="M6 10h5l-1.5-1.5M10 14H5l1.5 1.5"/>'
  },
  {
      slug: 'heic-to-jpg', cat: 'Image tools', name: 'HEIC to JPG',
      title: 'HEIC to JPG Converter - Convert iPhone Photos Free',
      desc: 'Convert iPhone HEIC and HEIF photos to JPG or PNG in your browser. Batch convert many at once and download a ZIP. Private, no upload, no sign-up.',
      card: 'Turn iPhone HEIC photos into JPG or PNG.',
      intro: 'iPhones save photos as HEIC, which many websites, Windows apps and forms cannot open. Convert them to JPG or PNG here, one at a time or in a batch. The photos are converted on your device and never uploaded.',
      steps: ['Click the box or drop one or more HEIC photos onto it.', 'Choose JPG or PNG and, for JPG, the quality.', 'Click Convert.', 'Save each photo, or click Download all (ZIP) for the whole batch.'],
      faq: [
        ['Are my photos uploaded?', 'No. The HEIC decoder runs inside your browser, so your photos never leave your device.'],
        ['Will the photo be the right way up?', 'Yes. The rotation stored in the HEIC file is applied, so portrait photos stay portrait in the JPG.'],
        ['JPG or PNG?', 'JPG is smaller and opens everywhere, so it is best for photos. PNG is lossless but often 3 to 5 times bigger.'],
        ['Can I convert many photos at once?', 'Yes. Select or drop as many as you like. Each one gets its own Save link, and Download all (ZIP) gives you every photo with its original name.'],
        ['What about Live Photos and bursts?', 'Some HEIC files hold several images. Choose All images to save every one, or Main image only to save just the photo you see in Photos.'],
        ['Is the photo quality lost?', 'At 90% JPG quality the difference is invisible for normal viewing. Choose 100% or PNG if you need the highest quality.']
      ],
      icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 15l-5-5-8 9"/><path d="M14 3h4M18 3l-1.5-1.5M18 3l-1.5 1.5"/>'
  },
  {
      slug: 'quiz-maker', cat: 'Study tools', name: 'Quiz Maker',
      title: 'Quiz Maker - Create, Share and Print Quizzes Free',
      desc: 'Make a quiz with multiple choice, true/false and short answer questions. Take it with a timer, share it by link or print it with an answer key.',
      card: 'Create quizzes, share them by link or print them.',
      intro: 'Build a quiz in minutes, then take it on screen with instant marking, send it to others as a link, or print it as a paper test with an answer key. Nothing is uploaded: quizzes are saved in your browser and the share link carries the quiz itself.',
      steps: ['Type a title, then add multiple choice, true/false or short answer questions.', 'Tick the correct options, list accepted answers and add an explanation if you like.', 'Click Take this quiz to try it, or Copy share link to send it to others.', 'Use Print paper test for a printable version with an answer key, and Save quiz to keep it.'],
      faq: [
        ['Do the people I share with need an account?', 'No. They just open the link. The quiz is stored inside the link itself, so it works without any sign-up and nothing is kept on a server.'],
        ['Can students see the answers in the link?', 'The answers have to be inside the link so the quiz can be marked in the browser. They are compressed, not hidden, so a determined person could decode them. Use it for practice and revision, not for high-stakes exams.'],
        ['Can a question have more than one correct answer?', 'Yes. Tick every correct option. The person taking the quiz is told how many to choose, and the question only counts as right when they pick exactly those options.'],
        ['How are short answers marked?', 'The answer is compared with each accepted answer you list. Capital letters, extra spaces and a final full stop are ignored, and numbers like 3 and 3.0 count as the same.'],
        ['Where are my quizzes saved?', 'In this browser only. Use Export JSON to keep a backup or to move a quiz to another device, then Import JSON there.'],
        ['Is there a limit on questions?', 'A quiz can have up to 200 questions. Very long quizzes make long share links, so for big quizzes share the exported file instead.']
      ],
      icon: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h1M12 8h4M8 12h1M12 12h4M8 16h1M12 16h4"/>'
  },
  {
      slug: 'vocabulary-builder', cat: 'Study tools', name: 'Vocabulary Builder',
      title: 'Vocabulary Builder - 560 Academic English Words',
      desc: 'Learn 560 useful academic English words with simple meanings and examples. Filter by B1, B2 or C1 level, quiz yourself and keep a daily streak.',
      card: 'Learn academic English words with quizzes and streaks.',
      intro: 'Build the vocabulary you need for essays, exams like IELTS and TOEFL, and university reading. Every word has a plain-English meaning, its part of speech, an example sentence and a level from B1 to C1.',
      steps: ['Browse or search the word list and filter it by level.', 'Click Mark as known for words you already use confidently.', 'Open Practice quiz and choose the meaning, choose the word or fill the gap.', 'Reach your daily goal of correct answers to keep your streak going.'],
      faq: [
        ['What do B1, B2 and C1 mean?', 'They are levels from the Common European Framework of Reference (CEFR). B1 is intermediate, B2 upper intermediate and C1 advanced. The levels here are a guide to how common and how advanced each word is.'],
        ['How does the streak work?', 'Each correct quiz answer counts towards your daily goal. Reach the goal on a day and that day counts. Your streak is the number of days in a row you reached it. Today does not break the streak until the day is over.'],
        ['Why can I not hear the words?', 'Pronunciation uses your browser\'s built-in speech voices. If your device has no English voice, the speaker buttons are hidden. Most current versions of Chrome, Edge and Safari include one.'],
        ['Is my progress saved?', 'Yes, in this browser. Known words, your goal and your streak stay when you come back, but they do not move to other devices.'],
        ['Who are these words for?', 'Students preparing for academic study or English exams, and anyone who wants to read and write more formal English with confidence.']
      ],
      icon: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5M9 7h7M9 11h5"/>'
  },
  {
      slug: 'math-practice', cat: 'Study tools', name: 'Math Practice',
      title: 'Math Practice - Times Tables and Mental Math Drills',
      desc: 'Practise times tables 1 to 20 and mixed addition, subtraction, multiplication and division. Timed rounds, instant feedback and printable worksheets.',
      card: 'Times tables and + − × ÷ drills with instant feedback.',
      intro: 'Quick, focused arithmetic practice for children and adults. Choose the times tables or the operations you want, answer with your keyboard or the big on-screen number pad, and see right away whether you were correct.',
      steps: ['Pick Times tables and select tables 1 to 20, or pick Mixed and choose the operations and difficulty.', 'Choose a number of questions or a 1, 2 or 5 minute timed round.', 'Type each answer and press Enter or Check. Wrong answers show the right one.', 'At the end, retry your mistakes or print a worksheet with an answer key.'],
      faq: [
        ['Are division answers always whole numbers?', 'Yes. Every division question is built from a multiplication, so the answer is always a whole number with no remainder.'],
        ['What do the difficulty levels mean?', 'Easy uses single digits. Medium uses two-digit numbers, such as 47 + 38 or 84 ÷ 7. Hard uses three-digit numbers, such as 352 − 187 or 744 ÷ 12.'],
        ['Can it be used on a phone?', 'Yes. On touch screens the large number pad replaces the phone keyboard, so the question and your answer stay in view.'],
        ['How are best scores saved?', 'Your best score is kept in this browser for each combination of settings, so a 1 minute round on the 7 times table has its own record.'],
        ['Can I print practice sheets?', 'Yes. Print worksheet with answers makes a new set of problems with your current settings, with the answer key on a separate page.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h4M9 6v4M14 8h4M7 16l3-3M10 16l-3-3M14 15h4M14 17h4"/>'
  },
  {
      slug: 'reading-speed-test', cat: 'Study tools', name: 'Reading Speed Test',
      title: 'Reading Speed Test - Check Your WPM and Comprehension',
      desc: 'Measure your reading speed in words per minute, answer comprehension questions and get your effective speed. 13 passages at three levels.',
      card: 'Find your reading speed and comprehension score.',
      intro: 'Read a short passage at your normal pace, then answer a few questions about it. You get your reading speed in words per minute, your comprehension score and your effective speed, which combines the two.',
      steps: ['Choose a passage, or click Random passage I have not read.', 'Click Start reading and read at your usual pace.', 'Click I have finished as soon as you reach the end.', 'Answer the questions from memory to see your speed, comprehension and effective speed.'],
      faq: [
        ['What is a good reading speed?', 'Most adults read everyday non-fiction at about 200 to 300 words per minute. Students and keen readers are often faster. Speed only matters if you understand what you read, which is why comprehension is measured too.'],
        ['What is effective reading speed?', 'It is your reading speed multiplied by your comprehension score. Reading 300 WPM with 60% understanding gives 180 effective WPM, which is less useful than 240 WPM with full understanding.'],
        ['Why can I not look back at the text?', 'The questions check what you took in during one normal reading. Being able to look back would measure searching rather than reading.'],
        ['Are the passages the same difficulty?', 'No. There are Easy, Medium and Hard passages of about 180 to 320 words. Compare results on passages of the same level for a fair picture of your progress.'],
        ['Is my history saved?', 'Yes, in this browser only. You can clear it at any time.']
      ],
      icon: '<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2zM22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>'
  },
  {
      slug: 'readability-checker', cat: 'Study tools', name: 'Readability Checker',
      title: 'Readability Checker - Flesch, Fog, SMOG & Grade Level',
      desc: 'Check how easy your essay is to read with Flesch, Flesch-Kincaid, Gunning Fog, SMOG, Coleman-Liau and ARI. Highlights long sentences and passive voice.',
      card: 'Score your writing and find hard-to-read sentences.',
      intro: 'Paste an essay, article or report to see how easy it is to read. You get six standard readability scores, an average grade level, and your text highlighted to show long sentences, hard words, possible passive voice and adverbs.',
      steps: ['Paste or type your text into the box.', 'Read the Flesch Reading Ease score and the average grade level.', 'Look at the highlighted text to find long sentences, hard words, passive voice and adverbs.', 'Follow the tips, edit your text and watch the scores update.'],
      faq: [
        ['What is a good Flesch Reading Ease score?', 'Higher is easier. 60 to 70 is plain English that most teenagers and adults read comfortably. Academic writing is often 30 to 50, and anything below 30 is very hard going.'],
        ['Why do the grade levels differ?', 'Each formula measures something slightly different. Flesch-Kincaid and SMOG count syllables, Coleman-Liau and ARI count letters, and Gunning Fog counts long words. Looking at the average gives a balanced picture.'],
        ['How are syllables counted?', 'With rules for English spelling plus a list of tricky words. Checked against a pronouncing dictionary it agrees on about 97 out of 100 words, which is accurate enough for the formulas.'],
        ['Is passive voice always wrong?', 'No. It is useful when the person doing the action is unknown or unimportant. The tool marks possible passives, such as "was written", so you can decide whether an active sentence would be clearer.'],
        ['Is my essay uploaded?', 'No. Everything is worked out in your browser and your text is never sent anywhere.']
      ],
      icon: '<path d="M4 6h16M4 10h12M4 14h16M4 18h9"/><circle cx="18.5" cy="18.5" r="2.5"/>'
  },
  {
      slug: 'spelling-test', cat: 'Study tools', name: 'Spelling Test',
      title: 'Spelling Test - Listen and Type Spelling Practice',
      desc: 'Hear a word read aloud, type it and check your spelling. Five built-in word lists by level or your own list, with scores and retry for missed words.',
      card: 'Hear words read aloud and practise spelling them.',
      intro: 'A spelling test that reads each word aloud, so children and adults can practise on their own. Use one of five built-in lists from early primary to commonly misspelled words, or type in this week\'s list from school.',
      steps: ['Choose a word list, or pick My own word list and type your words.', 'Click Start test. Each word is read aloud; press Say it in a sentence to hear it used.', 'Type the word and press Enter or Check.', 'See your score, then retry the words you missed.'],
      faq: [
        ['What if my device cannot speak?', 'If no speech voice is available, the test shows a meaning and a sentence with a gap instead, and tells you that audio is unavailable. You can still practise every word.'],
        ['Can I add my child\'s school spelling list?', 'Yes. Choose My own word list and type one word per line. You can add a sentence and a meaning after a | sign. The list is saved in this browser for next time.'],
        ['Do capital letters matter?', 'No. Answers are checked without caring about capitals or extra spaces, so february and February both count.'],
        ['Which accent is used?', 'The test uses an English voice from your device, usually British or American English. Spelling follows British forms such as favourite in the built-in lists.'],
        ['Can I print the words?', 'Yes. After a test, Print this list prints the words with their meanings and space to practise writing them.']
      ],
      icon: '<path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M14 8l3 3M3 6h6M3 10h3"/>'
  },
  {
      slug: 'instagram-grid-maker', cat: 'Social media tools', name: 'Instagram Grid Maker',
      title: 'Instagram Grid Maker - Split a Photo into 3x3 Tiles Free',
      desc: 'Split one photo into 3, 6, 9 or 12 portrait 4:5 or square tiles for your Instagram profile grid. Numbered in posting order, ZIP download, no upload.',
      card: 'Split a photo into a 3×3 profile grid.',
      intro: 'Cut one picture into 3, 6, 9 or 12 tiles for a big seamless image on your Instagram profile. Drag and zoom to choose what goes in the grid, preview it, and download high quality JPG tiles numbered in posting order.',
      steps: ['Choose or drop a photo.', 'Pick the grid size (3 × 1 to 3 × 4) and the tile shape: portrait 4:5 or square.', 'Drag and zoom the photo, and check the profile preview.', 'Click Make tiles, download the ZIP, and post tile 1 (bottom right) first.'],
      faq: [
        ['In which order do I post the tiles?', 'Post tile 1 first: it is the bottom-right one. The top-left tile is posted last, because each new post appears at the top-left of your profile. The file names are numbered for you.'],
        ['Should I use 4:5 or square tiles?', 'Portrait 4:5 tiles (1080 × 1350) fill more of the screen in the feed and suit the taller profile grid. Square 1:1 tiles (1080 × 1080) are the classic look.'],
        ['What does "Line up for the profile grid" do?', 'Profiles show 4:5 posts as slightly narrower 3:4 thumbnails, hiding about 34 px at each side. This option makes neighbouring tiles share those hidden strips, so the picture joins up without breaks.'],
        ['Is my photo uploaded?', 'No. The photo is cut into tiles in your browser and never leaves your device.'],
        ['Is this an official Instagram tool?', 'No. It is an independent free tool that makes images for Instagram; it is not affiliated with or endorsed by Instagram or Meta.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'
  },
  {
      slug: 'no-crop-image', cat: 'Social media tools', name: 'No Crop for Instagram',
      title: 'No Crop for Instagram - Fit Whole Photo, Blur Background',
      desc: 'Fit your whole photo into a 1:1, 4:5, 9:16 or 16:9 frame without cropping. Blurred, colour, gradient or white background. Batch ZIP, free, private.',
      card: 'Post whole photos with a blurred or colour frame.',
      intro: 'Fit the whole photo into a square, portrait, story or landscape frame so nothing gets cut off. Fill the space with a blurred copy of the photo, a colour, a gradient or white, and download 1080 px wide images, one at a time or as a ZIP.',
      steps: ['Choose or drop one or more photos.', 'Pick the shape: 1:1, 4:5, 9:16 or 16:9.', 'Choose a background and padding.', 'Click Download, or Download all as ZIP for several photos.'],
      faq: [
        ['What sizes are the images?', 'All are 1080 px wide: 1080 × 1080 for 1:1, 1080 × 1350 for 4:5, 1080 × 1920 for 9:16 and 1080 × 608 for 16:9.'],
        ['Can I do many photos at once?', 'Yes. Add as many photos as you like; they all get the same shape and background and download together in one ZIP.'],
        ['Will my photo lose quality?', 'Photos are scaled to fit 1080 px wide and saved as high quality JPG (92%) or PNG. Large photos stay sharp.'],
        ['Are my photos uploaded?', 'No. Everything is done in your browser and your photos never leave your device.'],
        ['Is this made by Instagram?', 'No. It is an independent tool for preparing photos for Instagram and other apps, and is not affiliated with Instagram or Meta.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="6" y="8" width="12" height="8" rx="1"/><path d="M9 14l2-2 2 2 1-1 2 2"/>'
  },
  {
      slug: 'social-media-image-resizer', cat: 'Social media tools', name: 'Social Media Image Resizer',
      title: 'Social Media Image Resizer - All Sizes in One Click',
      desc: 'Resize photos for Instagram, TikTok, YouTube, Facebook, X, LinkedIn, Pinterest and WhatsApp at once. Focus point, no-crop mode, batch ZIP. Free.',
      card: 'Every social media size from one photo.',
      intro: 'Turn one photo, or a batch, into the right size for every platform at once: posts, stories, covers, banners, thumbnails and profile pictures. Drag a focus point to keep faces in every crop, or show the whole photo with a background.',
      steps: ['Choose or drop one or more photos.', 'Tick the sizes you need, or use the quick buttons.', 'Choose fill or show-whole-photo, and drag the focus dot onto the important part.', 'Click Download to get one image or a ZIP of all of them.'],
      faq: [
        ['Which sizes are included?', 'Instagram post, portrait, story, reel cover and profile; TikTok cover and profile; YouTube thumbnail, banner and profile; Facebook posts, cover, profile and event; X post, header and profile; LinkedIn post, banner and profile; Pinterest pin; WhatsApp profile and status.'],
        ['Are these sizes up to date?', 'They are the commonly recommended sizes as of 2026. Platforms change them from time to time and usually accept other sizes too.'],
        ['What is the focus point?', 'A dot you drag onto the most important part of the photo. When a size has to crop the photo, the crop is moved so that point stays in view.'],
        ['Can I avoid cropping?', 'Yes. Choose "Show the whole photo" and the empty space is filled with a blurred copy of the photo, a colour or white.'],
        ['Are my photos uploaded?', 'No. All resizing happens in your browser. This tool is not affiliated with any of the platforms.']
      ],
      icon: '<rect x="2" y="7" width="9" height="14" rx="1.5"/><rect x="13" y="3" width="9" height="9" rx="1.5"/><rect x="13" y="15" width="9" height="6" rx="1.5"/>'
  },
  {
      slug: 'youtube-thumbnail-maker', cat: 'Social media tools', name: 'YouTube Thumbnail Maker',
      title: 'YouTube Thumbnail Maker - Free 1280x720 Editor, No Watermark',
      desc: 'Make 1280×720 YouTube thumbnails with bold text, photos, arrows, emoji and 6 layouts. Drag, resize, rotate. JPG under 2 MB. Free, no sign-up.',
      card: 'Design 1280×720 thumbnails with bold text.',
      intro: 'Design a click-worthy 1280 × 720 video thumbnail in your browser. Start from a layout, add your photos, big outlined text, arrows, circles and emoji, then download a JPG that is always under YouTube\'s 2 MB limit.',
      steps: ['Pick one of the six starter layouts.', 'Add a background photo or colour, your own photos, and stickers.', 'Tap text to edit it; drag, resize and rotate any layer.', 'Check the video length corner, then click Download JPG.'],
      faq: [
        ['What size is the thumbnail?', '1280 × 720 pixels (16:9), the size YouTube recommends. The JPG is always kept under the 2 MB upload limit.'],
        ['Is there a watermark?', 'No. The thumbnail is entirely yours, with no watermark and no sign-up.'],
        ['Can I use my own photos?', 'Yes. Use one as the background and add more with "+ Photo". PNG cut-outs with a transparent background look best.'],
        ['What is the video length area?', 'YouTube shows the video duration in a small badge at the bottom-right of the thumbnail. The overlay shows roughly where it sits so you keep text out of it. It is not part of the download.'],
        ['Is this an official YouTube tool?', 'No. It is an independent free tool and is not affiliated with YouTube or Google. Your images never leave your device.']
      ],
      icon: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z"/><path d="M5 16h4"/>'
  },
  {
      slug: 'profile-picture-maker', cat: 'Social media tools', name: 'Profile Picture Maker',
      title: 'Profile Picture Maker - Circle PFP with Ring & Curved Text',
      desc: 'Make a round profile picture with a gradient ring border, colour background and your own curved text badge. 1024 px PNG, transparent or square. Free.',
      card: 'Round avatar with ring border and curved text.',
      intro: 'Turn any photo into a round profile picture. Position and zoom your photo, add a colour or gradient background, a ring border and optional curved text on a band, then download a 1024 px PNG.',
      steps: ['Choose or drop your photo.', 'Drag and zoom to centre your face in the circle.', 'Pick a background, ring colours and width, and optional curved text.', 'Choose circle or square and click Download PNG.'],
      faq: [
        ['What size is the picture?', '1024 × 1024 pixels as a PNG. Every platform can shrink it without losing sharpness.'],
        ['Circle or square: which should I download?', 'Most apps crop profile pictures into a circle themselves, so the square works everywhere. The circle has transparent corners for places that show the image as it is.'],
        ['Can I add text like a hiring badge?', 'Yes. Type your own short text, up to 40 characters, and it follows the circle on a coloured band at the bottom, the sides or the top.'],
        ['Does it remove the background of my photo?', 'No. Background removal is not included, so a photo with a plain background works best. Zoom below 100% to show the colour background around your photo.'],
        ['Is my photo uploaded?', 'No. Everything is drawn in your browser and your photo never leaves your device.']
      ],
      icon: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="10" r="3"/><path d="M6.5 18.5a6.5 6.5 0 0 1 11 0"/>'
  },
  {
      slug: 'graphing-calculator', cat: 'Study tools', name: 'Graphing Calculator',
      title: 'Graphing Calculator - Plot Functions Online Free',
      desc: 'Plot up to 6 functions, zoom and pan, trace values, find roots and intersections, and download the graph as PNG. Works on phones. Free and private.',
      card: 'Plot functions, find roots and intersections.',
      intro: 'Type functions of x to draw them on one grid. Drag, zoom or pinch to explore, tap to read values, and find roots and intersections in one click.',
      steps: ['Type a function such as x^2 - 3 or sin(x) in the y₁ box.', 'Add up to six functions; drag to move and scroll, pinch or use the buttons to zoom.', 'Hover or tap the graph to read values, or press Find roots & intersections.', 'Press Download PNG to save the graph.'],
      faq: [
        ['What can I type?', 'Use x as the variable with + − * / and ^, brackets, pi, e, sqrt, abs, ln, log (base 10), exp, sin, cos, tan and their inverses. You can write 2x or 3(x + 1) without a times sign.'],
        ['Are angles in degrees or radians?', 'Radians, as in all function graphing. One full sine wave is 2π, about 6.28, wide.'],
        ['How are asymptotes handled?', 'The graph checks for jumps between points and does not join the curve across a pole or a step, so tan(x), 1/x and floor(x) draw correctly.'],
        ['How accurate are the roots?', 'Roots and intersections in the visible area are refined to about seven significant figures. Zoom in to separate roots that are very close together.'],
        ['Does it work on a phone?', 'Yes. Drag with one finger to move, pinch to zoom and tap to read values.'],
        ['Is anything uploaded?', 'No. Everything is drawn in your browser.']
      ],
      icon: '<path d="M3 3v18h18"/><path d="M6 17c3-9 6-9 8-4s4 4 6-6"/>'
  },
  {
      slug: 'equation-solver', cat: 'Study tools', name: 'Equation Solver',
      title: 'Equation Solver - Linear, Quadratic, Cubic with Steps',
      desc: 'Solve linear, quadratic and cubic equations and 2 or 3 simultaneous equations with step-by-step working, exact fractions and complex roots. Free.',
      card: 'Solve equations and systems with full steps.',
      intro: 'Type an equation such as x^2 - 5x + 6 = 0 or a system of equations and get exact answers with every step of the working shown.',
      steps: ['Choose Type it, Linear, Quadratic, Cubic, 2 equations or 3 equations.', 'Type the equation or fill in the coefficients.', 'Read the answer and follow the step-by-step working below it.'],
      faq: [
        ['Does it give exact answers?', 'Yes. Fractions stay exact and square roots are simplified, for example x = −2 ± √3, with decimals shown alongside.'],
        ['Can it find complex roots?', 'Yes. Quadratics and cubics with no real roots get complex roots in the form a + bi.'],
        ['How does it solve cubics?', 'It first tries the rational root theorem and divides out any root it finds. Otherwise it uses Cardano\'s formula or the trigonometric method for three real roots.'],
        ['How are simultaneous equations solved?', 'With Gaussian elimination on the augmented matrix. Each row operation is shown, and it tells you when there is no solution or infinitely many.'],
        ['Can it solve equations with sin or e^x?', 'No, only polynomial equations up to degree 3. Use the Graphing Calculator to find roots of other functions.']
      ],
      icon: '<path d="M4 9h6M4 15h6M15 7l5 10M20 7l-5 10"/>'
  },
  {
      slug: 'statistics-calculator', cat: 'Study tools', name: 'Statistics Calculator',
      title: 'Statistics Calculator - Mean, Median, SD, Quartiles',
      desc: 'Paste numbers to get mean, median, mode, quartiles, IQR, variance, standard deviation, z-scores, a frequency table and a histogram. Free and private.',
      card: 'Mean, median, SD, quartiles and histogram.',
      intro: 'Paste a list of numbers, or values with frequencies, to get all the descriptive statistics, a frequency table, z-scores and a histogram at once.',
      steps: ['Paste or type your numbers, separated by commas, spaces or new lines.', 'Choose the quartile method and whether z-scores use the sample or population standard deviation.', 'Read the results, the histogram and the tables, and press Copy results if you need them.'],
      faq: [
        ['What is the difference between sample and population standard deviation?', 'The sample version divides by n − 1 and is used when your data is a sample of a bigger group. The population version divides by n. Both are shown.'],
        ['Which quartile method is used?', 'You can choose. Median of halves is used in most school books and on TI calculators; linear interpolation matches Excel QUARTILE.INC. The method is stated under the results.'],
        ['Can I enter a frequency table?', 'Yes. Choose Value, frequency and type one value and its frequency per line, such as 3, 12.'],
        ['How are outliers found?', 'Values below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR are listed as outliers.'],
        ['Is my data uploaded?', 'No. All calculations happen in your browser.']
      ],
      icon: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>'
  },
  {
      slug: 'fraction-calculator', cat: 'Study tools', name: 'Fraction Calculator',
      title: 'Fraction Calculator - Add, Subtract, Multiply, Divide',
      desc: 'Add, subtract, multiply and divide fractions and mixed numbers with steps and LCD, simplify, and convert fractions to repeating decimals and back.',
      card: 'Fractions and mixed numbers with working.',
      intro: 'Work with fractions and mixed numbers, see every step including the lowest common denominator, and convert between fractions and (repeating) decimals.',
      steps: ['Type two fractions, such as 1 1/2 and 2/3.', 'Choose +, −, × or ÷.', 'Read the simplest fraction, mixed number, decimal and percent, and follow the steps below.'],
      faq: [
        ['How do I type a mixed number?', 'Put a space between the whole number and the fraction, like 2 3/4. For a negative mixed number type −2 3/4.'],
        ['How are repeating decimals shown?', 'The repeating digits are marked with a bar, and written in brackets when copied: 1/6 = 0.1(6).'],
        ['Can it turn a repeating decimal into a fraction?', 'Yes. In Decimal to fraction type 0.(3), 0.1(6) or 0.1666... and the algebra method is shown.'],
        ['Does it handle big numbers?', 'Yes. It uses exact whole-number arithmetic of any size, so answers never lose digits.'],
        ['What is the LCD?', 'The lowest common denominator is the smallest number both denominators divide into. Fractions are rewritten with it before adding or subtracting.']
      ],
      icon: '<circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="19" r="1.5"/><path d="M5 12h14"/>'
  },
  {
      slug: 'matrix-calculator', cat: 'Study tools', name: 'Matrix Calculator',
      title: 'Matrix Calculator - Determinant, Inverse, RREF Steps',
      desc: 'Add, subtract and multiply matrices up to 6×6 and find the determinant, inverse, rank, transpose and RREF with steps, using exact fractions. Free.',
      card: 'Determinant, inverse, RREF and products.',
      intro: 'Enter matrices up to 6×6 to add, multiply, transpose, or find the determinant, inverse, rank and reduced row echelon form, with exact fractions and every row operation shown.',
      steps: ['Set the size of matrix A (and B if needed) and type the entries.', 'Press an operation such as A × B, Determinant, Inverse or RREF.', 'Read the result and open Show the steps to see each row operation.'],
      faq: [
        ['Are answers exact?', 'Yes, when you enter whole numbers or fractions the answers are exact fractions. Decimal input gives decimal answers.'],
        ['Why does A × B give an error?', 'Matrix multiplication needs the number of columns of A to equal the number of rows of B. The message states both sizes.'],
        ['When does a matrix have no inverse?', 'When it is not square, or when its determinant is 0 (it is singular). The tool tells you and shows the rank.'],
        ['What is RREF?', 'Reduced row echelon form: each pivot is 1 and is the only non-zero entry in its column. It is used to solve systems and find the rank.'],
        ['Can I use the result again?', 'Yes. Press Use as A or Use as B, or Copy result to paste into a spreadsheet.']
      ],
      icon: '<path d="M7 4H4v16h3M17 4h3v16h-3"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01"/>'
  },
  {
      slug: 'number-base-converter', cat: 'Study tools', name: 'Number Base Converter',
      title: 'Number Base Converter - Binary, Hex, Octal, Decimal',
      desc: 'Convert numbers between binary, octal, decimal, hex and any base 2-36, with fractions, negative numbers, two\'s complement and step-by-step working.',
      card: 'Binary, hex, octal and any base, with steps.',
      intro: 'Convert any number between binary, octal, decimal, hexadecimal and bases 2 to 36, including big numbers, negatives and fractions, with two\'s complement and the full working.',
      steps: ['Type the number and choose the base it is written in.', 'Read binary, octal, decimal, hex and your chosen base at once.', 'Check the two\'s complement table and the step-by-step working below.'],
      faq: [
        ['Can it convert fractions?', 'Yes. The fractional part is converted exactly; repeating digits are shown in brackets, and very long results are cut at the number of digits you choose, with a note.'],
        ['How are negative numbers handled?', 'With a minus sign in every base, plus a two\'s complement table for 8, 16, 32 and 64 bits.'],
        ['Can I decode a two\'s complement pattern?', 'Yes. Set Read input as two\'s complement to the bit width, then type a pattern such as 11111111 or FF.'],
        ['Is there a size limit?', 'Numbers with thousands of digits are converted exactly using big integers.'],
        ['Does it understand 0x and 0b?', 'Yes. The prefixes 0x, 0b and 0o set the base automatically.']
      ],
      icon: '<path d="M5 4v6M3 4h2M8 4h3v6H8zM13 14h3v6h-3zM18 14v6M16 14h2"/><path d="M4 17h5M7 15l2 2-2 2"/>'
  },
  {
      slug: 'periodic-table', cat: 'Study tools', name: 'Periodic Table',
      title: 'Periodic Table of Elements with Molar Mass Calculator',
      desc: 'Interactive periodic table of all 118 elements with atomic weights, electron configurations, categories, electronegativity and a molar mass calculator.',
      card: 'All 118 elements plus a molar mass calculator.',
      intro: 'Explore all 118 elements by category, click any element for its details, and calculate the molar mass of any chemical formula.',
      steps: ['Click an element or search by name, symbol or number.', 'Read its atomic weight, electron configuration, category, state and electronegativity.', 'Type a formula such as CuSO4·5H2O to get its molar mass and element breakdown.'],
      faq: [
        ['Which atomic weights are used?', 'IUPAC standard atomic weights (abridged). Radioactive elements with no stable isotope show the mass number of their most stable isotope in brackets.'],
        ['Which formulas can the molar mass calculator read?', 'Formulas with brackets, square brackets, hydrate dots and coefficients, such as Ca(OH)2, K4[Fe(CN)6] and CuSO4·5H2O.'],
        ['Are the electron configurations correct for exceptions?', 'Yes. Known exceptions such as chromium, copper, palladium, gold and several actinides are shown correctly. Configurations from element 104 on are predicted.'],
        ['How do I use it on a phone?', 'Swipe the table sideways inside its box, or switch to List view.'],
        ['Does it work offline?', 'Yes. All data is built into the page.']
      ],
      icon: '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="11" width="6" height="6" rx="1"/><rect x="9" y="11" width="6" height="6" rx="1"/><rect x="15" y="11" width="6" height="6" rx="1"/><path d="M6 21h12"/>'
  },
  {
      slug: 'hashtag-generator', cat: 'Social media tools', name: 'Hashtag Generator',
      title: 'Hashtag Generator - Instagram Hashtags for 75+ Topics',
      desc: 'Pick ready-made broad, medium and niche hashtags for 75+ topics, add your own, stay within each app\'s limit (5 on Instagram) and copy them all in one tap. Free.',
      card: 'Hashtag sets for 75+ topics, copy in one tap.',
      intro: 'Choose a topic and tap hashtags, or let the tool mix a balanced set of broad, medium and niche tags. Add your own, stay within the limit for your app (5 on Instagram) and copy them all at once.',
      steps: ['Choose the app you are posting to, then search for a topic, such as travel, food or football, and tap it.', 'Tap hashtags to add them, or click Mix to pick a balanced set.', 'Add your own brand or event hashtags if you like.', 'Click Copy all and paste into your caption.'],
      faq: [
        ['How many hashtags can I use on Instagram?', 'Up to 5 on a post or Reel. The counter stops you at 5, so pick the 5 that describe your post best.'],
        ['What are broad, medium and niche hashtags?', 'Broad tags are very common and move fast, niche tags are specific with smaller audiences, and medium tags sit in between. A mix gives reach and a better chance to stay visible.'],
        ['Does this show trending or live hashtag counts?', 'No. The sets are hand-picked starting points built into the page. The tool does not connect to Instagram or TikTok, so check tags in the app before you rely on them.'],
        ['Can I add hashtags in other languages, like Arabic, Hindi, Spanish or Chinese?', 'Yes. Letters from any language work. Spaces and symbols are removed because they cannot be part of a hashtag.'],
        ['Can I use these hashtags on TikTok?', 'Yes. Set "For" to TikTok, YouTube, X or LinkedIn and the counter and suggested amount follow that app. On YouTube, more than 15 hashtags means all of them are ignored.']
      ],
      icon: '<path d="M5 9h14M5 15h14M10 4L8 20M16 4l-2 16"/><circle cx="19" cy="19" r="2"/>'
  },
  {
      slug: 'social-media-character-counter', cat: 'Social media tools', name: 'Social Media Character Counter',
      title: 'Social Media Character Counter - X, Instagram, YouTube',
      desc: 'Count characters for X, Instagram, TikTok, YouTube, Facebook, LinkedIn, Pinterest and Threads as you type, with X link and emoji rules.',
      card: 'Live character limits for every social app.',
      intro: 'Type or paste your post and see how much of each app\'s limit it uses, with X\'s link and emoji weighting, hashtag and mention counts, and a copy button that keeps blank lines in Instagram.',
      steps: ['Type or paste your post into the box.', 'Check each platform row for characters left or over.', 'Fix anything marked in red, such as too many hashtags.', 'Click Copy text, or Copy for Instagram to keep blank lines.'],
      faq: [
        ['How does X count characters?', 'X gives most letters a weight of 1, but emoji and Chinese, Japanese or Korean characters count as 2, and every link counts as 23 whatever its length. The X row uses these rules.'],
        ['What is the Instagram caption limit?', '2,200 characters, up to 5 hashtags and 20 @mentions. About the first 125 characters show before "more".'],
        ['How do I keep line breaks in an Instagram caption?', 'Click "Copy for Instagram (keep blank lines)". It puts an invisible character on each empty line so Instagram keeps your paragraphs.'],
        ['Does an emoji count as one character?', 'Here it counts as one, the way you see it, even for flags and family emoji. On X every emoji counts as 2.'],
        ['Is my text saved or sent anywhere?', 'No. Counting happens in your browser and the text is not stored.']
      ],
      icon: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M7 9h3M7 13h6M15 9l2 4"/>'
  },
  {
      slug: 'whatsapp-link-generator', cat: 'Social media tools', name: 'WhatsApp Link Generator',
      title: 'WhatsApp Link Generator - wa.me Link, QR Code & Message',
      desc: 'Make a wa.me click-to-chat link with a prefilled message and a QR code. Cleans the number for you. Includes a WhatsApp text formatter.',
      card: 'Click-to-chat link and QR code in seconds.',
      intro: 'Pick the country, type your number as you dial it and add an optional message. You get a wa.me link and a QR code that open a chat with you, plus a formatter for bold, italic and lists.',
      steps: ['Choose the country and type the phone number.', 'Type a message to prefill, if you want one.', 'Copy the link or click Open to test it.', 'Download the QR code to print or share.'],
      faq: [
        ['What is a wa.me link?', 'It is WhatsApp\'s public click-to-chat address. Opening https://wa.me/ followed by a number in international format starts a chat with that number.'],
        ['Should I include the 0 or the + sign?', 'No. Links use the country code and number only, with no +, spaces or domestic 0. The tool removes them for you, so you can type the number as you normally dial it.'],
        ['Can I make a link without a phone number?', 'Yes. Leave the number empty and type a message. The link lets the person pick who to send that message to.'],
        ['How do I write bold or italic text in WhatsApp?', 'Put *stars* around bold text, _underscores_ for italic, ~tildes~ for strikethrough and three backticks for monospace. The formatter does this for you with a live preview.'],
        ['Is this an official WhatsApp tool?', 'No. It is an independent tool that uses the public link format. It is not made by or affiliated with WhatsApp or Meta.']
      ],
      icon: '<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.6L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z"/><path d="M10 14a5 5 0 0 0 4-4"/>'
  },
  {
      slug: 'youtube-thumbnail-downloader', cat: 'Social media tools', name: 'YouTube Thumbnail Downloader',
      title: 'YouTube Thumbnail Downloader - HD, Shorts & All Sizes',
      desc: 'Paste any YouTube or Shorts link to see and save the video thumbnail in every size, from 1280×720 HD down to 120×90. Free, no sign-up.',
      card: 'Save a video thumbnail in every size.',
      intro: 'Paste a YouTube link or video ID to see its thumbnail in every available size, from full HD to small. Open or download the one you need. Respect the creator\'s copyright when you use it.',
      steps: ['Copy the video link from YouTube.', 'Paste it into the box.', 'Click Download or Open full size on the size you want.'],
      faq: [
        ['Which links work?', 'Normal watch links, youtu.be short links, Shorts, embed, live and YouTube Music links, links with extra parts like &t= or &list=, and the plain 11-character video ID.'],
        ['Why is the HD (1280×720) size missing?', 'Some videos, often older or low-resolution ones, have no maximum-resolution thumbnail. The tool hides sizes that do not exist; use the next largest.'],
        ['Why did the download open a message instead?', 'Some browsers block direct downloads from another site. Open the image, then right-click or long-press and choose Save image.'],
        ['Can I use someone else\'s thumbnail?', 'Thumbnails are the creator\'s work and usually protected by copyright. Use them for reference or commentary, or ask permission, and credit the channel.'],
        ['Is this affiliated with YouTube?', 'No. It shows images from YouTube\'s public image server and is not made by YouTube or Google.']
      ],
      icon: '<rect x="2" y="4" width="20" height="14" rx="3"/><path d="M10 8.5v5l4-2.5z"/><path d="M12 18v3M9 20l3 1.5 3-1.5"/>'
  },
  {
      slug: 'youtube-timestamp-generator', cat: 'Social media tools', name: 'YouTube Chapters Generator',
      title: 'YouTube Chapters Generator - Timestamps for Description',
      desc: 'Build YouTube chapter timestamps that follow the rules: start at 0:00, 3+ chapters, 10 seconds each, in order. Copy for your description.',
      card: 'Chapter timestamps that YouTube accepts.',
      intro: 'Add a time and title for each part of your video and get a chapter list ready for your description, checked against the rules YouTube needs before it shows chapters. Also make links that start at a set time.',
      steps: ['Type the video length, if you know it.', 'Enter a time and title for each chapter, starting at 0:00.', 'Fix anything marked with a red cross.', 'Click Copy chapters and paste into your video description.'],
      faq: [
        ['What are the rules for YouTube chapters?', 'The first timestamp must be 0:00, there must be at least three, each chapter must be at least 10 seconds long, and they must be in ascending order.'],
        ['Where do I paste the chapters?', 'In your video description in YouTube Studio, each on its own line starting with the time. Save the video and the chapters appear in the progress bar.'],
        ['Why are my chapters not showing?', 'Usually one rule is broken, such as a missing 0:00 or a chapter under 10 seconds. The checks show what to fix. Some videos, such as ones made for kids, may not show chapters.'],
        ['Can I use hours?', 'Yes. Type times like 1:02:30. Minute-only times like 4:05 work too.'],
        ['How do I link to a moment in a video?', 'Use the Timestamp link maker: paste the video link and a time, then copy the link with &t= or ?t= added.']
      ],
      icon: '<rect x="2" y="4" width="20" height="14" rx="3"/><path d="M6 14h3M11 14h7M6 10h7M15 10h3"/><path d="M8 21h8"/>'
  },
  {
      slug: 'username-generator', cat: 'Social media tools', name: 'Username Generator',
      title: 'Username Generator - Cool, Cute & Gaming Name Ideas',
      desc: 'Get 50 username ideas from your name or keywords in cool, cute, gaming, professional or aesthetic style, sized for Instagram, TikTok, X and more.',
      card: '50 username ideas that fit each app\'s rules.',
      intro: 'Type your name or a few words you like, choose a style and the app, and get 50 usernames that fit its length and character rules. Tap to copy and star your favourites.',
      steps: ['Type your name or keywords.', 'Choose a style and the platform.', 'Click Generate 50 names.', 'Tap a name to copy it, or star it to save it.'],
      faq: [
        ['Does it check if a username is available?', 'No. It cannot see which names are taken. Search for the name in the app before you set it, and add a number or underscore if it is taken.'],
        ['What are the username rules for each app?', 'They differ: X allows 4 to 15 letters, numbers and underscores; Instagram up to 30 with dots and underscores; Snapchat 3 to 15 starting with a letter. Pick the platform and the tool follows its rules.'],
        ['Can I make a name for every app at once?', 'Pick the strictest platform you use, such as X or Snapchat. A name that fits it usually fits everywhere.'],
        ['Where are my favourites saved?', 'In this browser on this device. Clearing site data or using a private window removes them.'],
        ['Are the names random?', 'They combine your keywords with style word lists in random patterns, so you get new ideas each time you click Generate.']
      ],
      icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 11-7.4"/><path d="M18 15l1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L15 17.3l2-.3z"/>'
  },
  {
      slug: 'emoji-picker', cat: 'Social media tools', name: 'Emoji Picker',
      title: 'Emoji Picker - Search, Copy & Paste Every Emoji',
      desc: 'Find any emoji by name or keyword, choose a skin tone and copy it in one click. Collect several in a box and copy them together. Free.',
      card: 'Search and copy any emoji in one click.',
      intro: 'Browse every emoji by category or search by name or keyword. Click to copy, pick a skin tone, and collect several emoji in a box to copy them together. Your recent emoji stay at the top.',
      steps: ['Search for an emoji or browse the categories.', 'Choose a skin tone if you like.', 'Click an emoji to copy it and add it to the box.', 'Click Copy all to copy every emoji in the box.'],
      faq: [
        ['How do I copy an emoji?', 'Click it. It is copied straight away and also added to the box, so you can collect several and copy them together.'],
        ['How do I change the skin tone?', 'Tap one of the six hand buttons at the top. Every emoji that supports skin tones changes to that tone.'],
        ['Why do some emoji look different on my phone?', 'Each system, such as Android, iPhone or Windows, draws emoji in its own style. The emoji is the same; only the picture differs.'],
        ['Why are some new emoji missing?', 'Emoji your device cannot draw yet are hidden so you do not copy a box. They appear after a system update.'],
        ['Does it work offline?', 'Yes, after the page has loaded once. The emoji list is part of the site.']
      ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>'
  },
  {
      slug: 'sleep-calculator', cat: 'Calculators', name: 'Sleep Calculator',
      title: 'Sleep Calculator - Best Bedtime & Wake-Up Times (Cycles)',
      desc: 'Find the best time to go to bed or wake up using 90-minute sleep cycles, plus a nap guide. Free, simple and private.',
      card: 'Best bedtimes and wake-up times by sleep cycles.',
      intro: 'Enter when you need to wake up to see the best bedtimes, or when you go to bed to see the best wake-up times. Each result fits whole 90-minute sleep cycles plus time to fall asleep.',
      steps: ['Choose whether you know your wake-up time or your bedtime.', 'Enter the time, or press Now.', 'Adjust the minutes it takes you to fall asleep if needed.', 'Pick one of the recommended times.'],
      faq: [
        ['How does the sleep calculator work?', 'It counts in sleep cycles of about 90 minutes and adds the time it takes you to fall asleep (15 minutes by default), so you wake up at the end of a cycle instead of in deep sleep.'],
        ['How many sleep cycles do I need?', 'Most adults do best with 5 or 6 cycles a night, which is 7.5 to 9 hours. These options are marked as recommended.'],
        ['What is the best nap length?', 'A 20-minute power nap boosts alertness without grogginess. A 90-minute nap gives a full cycle. Naps of 30 to 60 minutes can leave you groggy for a while.'],
        ['Are sleep cycles always 90 minutes?', 'No. They range from about 70 to 120 minutes and change through the night, so treat the times as general guidance.'],
        ['Is this medical advice?', 'No. If you often feel tired or have trouble sleeping, talk to a doctor.']
      ],
      icon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/><path d="M15 4h4l-4 4h4"/>'
  },
  {
      slug: 'water-intake-calculator', cat: 'Calculators', name: 'Water Intake Calculator',
      title: 'Water Intake Calculator - How Much Water Should I Drink?',
      desc: 'Work out how much water to drink per day from your weight, exercise, weather and pregnancy, in litres or glasses, with a daily tracker.',
      card: 'Daily water goal in litres or glasses.',
      intro: 'Enter your weight and a few details to get a daily water goal in litres, fluid ounces and glasses, then tap glasses in the tracker as you drink.',
      steps: ['Choose metric or imperial and enter your weight.', 'Add exercise minutes, hot weather or pregnancy if they apply.', 'Read your daily total and number of glasses.', 'Tap a glass in the tracker each time you drink.'],
      faq: [
        ['How much water should I drink a day?', 'A common rule is about 35 ml per kg of body weight, so about 2.5 litres for a 70 kg adult, plus more for exercise, heat, pregnancy or breastfeeding.'],
        ['How much extra for exercise?', 'This calculator adds about 350 ml (12 fl oz) for every 30 minutes of exercise.'],
        ['Do other drinks and food count?', 'Yes. Tea, coffee, milk, soup, fruit and vegetables all provide water.'],
        ['Is the tracker saved?', 'Yes, in this browser only, and only for today. It starts again at zero tomorrow and is never uploaded.'],
        ['Is this medical advice?', 'No. People with heart or kidney conditions, or who have been told to limit fluids, should follow their doctor.']
      ],
      icon: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9.5 15a2.5 2.5 0 0 0 2.5 2.5"/>'
  },
  {
      slug: 'ideal-weight-calculator', cat: 'Calculators', name: 'Ideal Weight Calculator',
      title: 'Ideal Weight Calculator - Devine, Robinson, Miller, Hamwi',
      desc: 'Find your ideal body weight from height and sex with the Devine, Robinson, Miller and Hamwi formulas, plus the healthy BMI weight range.',
      card: 'Ideal weight by 4 formulas and healthy BMI range.',
      intro: 'Enter your height and sex to compare four ideal weight formulas and see the weight range that gives a healthy BMI for your height.',
      steps: ['Choose metric or imperial units.', 'Choose your sex and enter your height.', 'Compare the four formulas and the healthy BMI range.'],
      faq: [
        ['What is the most accurate ideal weight formula?', 'None is perfect. They only use height and sex. The average of the four and the healthy BMI range give a more balanced picture.'],
        ['What is the Devine formula?', 'Men: 50 kg plus 2.3 kg per inch over 5 feet. Women: 45.5 kg plus 2.3 kg per inch over 5 feet. It is widely used for medicine doses.'],
        ['What is a healthy BMI weight range?', 'The weights that give a BMI from 18.5 to 24.9 for your height.'],
        ['Does it work for people under 5 feet?', 'The formulas were designed for 5 feet and taller. Results below that are extended and marked as less reliable.'],
        ['Does it consider muscle or age?', 'No. Muscular people can be healthy above these numbers. Talk to a doctor for personal advice.']
      ],
      icon: '<path d="M5 20h14l-1.5-11h-11z"/><circle cx="12" cy="5.5" r="2.5"/><path d="M12 13l2-2"/>'
  },
  {
      slug: 'body-fat-calculator', cat: 'Calculators', name: 'Body Fat Calculator',
      title: 'Body Fat Calculator - US Navy Method & BMI Estimate',
      desc: 'Estimate body fat percentage with the US Navy tape measure method or from BMI, with ACE categories, fat mass and lean mass. Metric or imperial.',
      card: 'Body fat % by US Navy tape measure method.',
      intro: 'Measure your neck and waist (and hips for women) to estimate body fat with the US Navy method, or get a quick estimate from your BMI and age.',
      steps: ['Choose units and sex, then enter height, weight and age.', 'Measure and enter your neck and waist (and hips for women).', 'Read your body fat, ACE category, fat mass and lean mass.', 'Compare with the BMI-based estimate.'],
      faq: [
        ['How accurate is the US Navy method?', 'With careful measuring it is usually within about 3 to 4 percentage points of lab methods.'],
        ['Where should I measure?', 'Neck just below the voice box. Waist at the navel for men and at the narrowest point for women. Hips at the widest point.'],
        ['What is a healthy body fat percentage?', 'By ACE ranges, fitness level is 14 to 17% for men and 21 to 24% for women; average is 18 to 24% for men and 25 to 31% for women.'],
        ['What is the BMI-based estimate?', 'The Deurenberg formula: 1.2 × BMI + 0.23 × age − 10.8 × sex − 5.4 (sex is 1 for men, 0 for women). It is a rough estimate for adults.'],
        ['Is this medical advice?', 'No. The results are estimates for general information.']
      ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9l6.4 6.4"/>'
  },
  {
      slug: 'love-calculator', cat: 'Generators', name: 'Love Calculator',
      title: 'Love Calculator - Test Your Love Match Percentage (Fun)',
      desc: 'Type two names to get a playful love match percentage with a fun message and animated heart. Just for fun; names stay on your device.',
      card: 'Playful love match % for two names.',
      intro: 'Type two names and press Calculate love to get a fun love percentage. It is just a game: the same names always give the same result, and nothing is saved.',
      steps: ['Type your name and their name.', 'Press Calculate love.', 'Read the score and message, then copy or share it.'],
      faq: [
        ['Is the love calculator real?', 'No, it is just for fun. The score comes from the letters of the names, not from any science.'],
        ['Why do I always get the same result?', 'The names are turned into a number with a hash, so the same pair always gives the same score, in either order.'],
        ['Do capitals or spaces change the result?', 'No. Capitals, spaces and punctuation are ignored.'],
        ['Are the names saved or sent?', 'No. The names stay in your browser and are not saved.']
      ],
      icon: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M9 11h6M12 8v6"/>'
  },
  {
      slug: 'random-team-generator', cat: 'Generators', name: 'Random Team Generator',
      title: 'Random Team Generator - Split Names into Fair Teams',
      desc: 'Split a list of names into random teams by number of teams or team size, with optional skill balancing, team colours, copy and print.',
      card: 'Split names into fair random teams.',
      intro: 'Paste a list of names and split them into fair random teams. Add skill numbers to balance the teams, then copy or print them.',
      steps: ['Enter names, one per line (add ", 8" for skill if you like).', 'Choose number of teams or people per team.', 'Press Make teams.', 'Copy or print the teams.'],
      faq: [
        ['Is it really random?', 'Yes. Names are shuffled with your browser\'s cryptographic random generator, so every arrangement is equally likely.'],
        ['How does skill balancing work?', 'Add a number after a comma, like "Alice, 8". The strongest players are placed first, each into the weakest team among those with the fewest players.'],
        ['What if the names do not divide evenly?', 'Team sizes never differ by more than one.'],
        ['Is my list saved?', 'Only in this browser, while "Remember my list on this device" is ticked. It is never uploaded.'],
        ['How many names can I use?', 'Up to 2,000 names.']
      ],
      icon: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2.5 19a5.5 5.5 0 0 1 11 0M10.5 19a5.5 5.5 0 0 1 11 0"/>'
  },
  {
      slug: 'text-repeater', cat: 'Text tools', name: 'Text Repeater',
      title: 'Text Repeater - Repeat Text or Emoji Many Times Online',
      desc: 'Repeat any text, word or emoji up to millions of times with new line, space, comma or custom separators and numbering. Copy or download.',
      card: 'Repeat text many times with any separator.',
      intro: 'Type some text, choose how many times to repeat it and what goes between each copy, then copy the result or download it as a text file.',
      steps: ['Type the text to repeat.', 'Enter how many times and choose a separator.', 'Tick numbering if you want it.', 'Copy the result or download it as .txt.'],
      faq: [
        ['How many times can I repeat text?', 'Results up to 100,000 characters appear instantly. Larger results, up to 5,000,000 characters, are made after you confirm.'],
        ['Can I use my own separator?', 'Yes. Choose Custom and type it; \\n adds a new line and \\t a tab.'],
        ['Can I number each copy?', 'Yes. Tick "Number each copy" to get 1., 2., 3. and so on.'],
        ['Is my text uploaded?', 'No. Everything happens in your browser.']
      ],
      icon: '<rect x="4" y="3" width="11" height="5" rx="1"/><rect x="4" y="10" width="11" height="5" rx="1"/><path d="M4 17h11M18 6v12l2-2M18 18l-2-2"/>'
  },
  {
      slug: 'password-strength-checker', cat: 'Generators', name: 'Password Strength Checker',
      title: 'Password Strength Checker - Test How Secure It Is',
      desc: 'Check password strength privately in your browser: common passwords, words, keyboard patterns, dates and crack time estimates. Nothing is sent.',
      card: 'See how strong a password is, privately.',
      intro: 'Type a password to see how hard it is to guess and how long it would take to crack. The check runs only on your device; your password is never sent or saved.',
      steps: ['Type a password into the box.', 'Read the strength meter and crack times.', 'See which patterns were found.', 'Follow the tips to make it stronger.'],
      faq: [
        ['Is it safe to type my password here?', 'Yes. The check runs entirely in your browser. Nothing is sent, saved or logged, and the page works offline. Even so, consider testing a similar password rather than your real one.'],
        ['How is strength measured?', 'It looks for common passwords, words, names, keyboard patterns, repeats, sequences, dates and look-alike swaps, then estimates how many guesses an attacker would need.'],
        ['What is the difference between raw and real-world entropy?', 'Raw entropy assumes every character is random. Real-world entropy accounts for the patterns found, which is what attackers exploit.'],
        ['Why is P@ssw0rd weak?', 'It is the common password "password" with well-known swaps. Cracking tools try these first.'],
        ['What makes a strong password?', 'Length and unpredictability: 4 or more random words, or 16+ random characters from a password manager. Use a different password for every site.']
      ],
      icon: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M9 16l2 2 4-4"/>'
  },
  {
      slug: 'photo-editor', cat: 'Image tools', name: 'Photo Editor',
      title: 'Photo Editor - Filters, Adjustments, Crop & Rotate Free',
      desc: 'Edit photos in your browser: 15 filters, exposure, contrast, warmth, shadows, sharpen, vignette and grain, plus crop, rotate and straighten. No upload.',
      card: 'Filters, light and colour, crop and straighten.',
      intro: 'Brighten, recolour and crop your photos with filters and pro-style sliders, then save the full-size result as JPG, PNG or WebP.',
      steps: ['Choose or drop a photo.', 'Pick a filter and fine-tune exposure, contrast, colour, sharpness, vignette and grain.', 'Open Crop and rotate to crop to a shape, turn, flip or straighten the picture.', 'Hold Compare to check against the original, then download at full size.'],
      faq: [
        ['Is my photo uploaded?', 'No. All editing happens in your browser and the photo never leaves your device.'],
        ['Does it save at full resolution?', 'Yes. The preview is screen-sized for speed, but the download is processed at the full size of your photo (after any crop).'],
        ['Will big phone photos freeze the page?', 'No. The full-size image is processed in a background worker, so a 12 MP photo usually saves in a second or two while the page stays responsive.'],
        ['Can I undo changes?', 'Yes. Use Undo and Redo, or Ctrl+Z and Ctrl+Y. Double-click any slider to reset it, or use Reset all.'],
        ['Can I open HEIC or RAW photos?', 'Only formats your browser can show. Most browsers open JPG, PNG and WebP; convert HEIC or RAW files to JPG first.'],
        ['Does it keep the photo details (EXIF)?', 'No. The saved image is a fresh file without camera details or location, which is safer to share.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 16v-3M12 16V8M17 16v-5"/><circle cx="7" cy="11" r="1.5"/><circle cx="12" cy="6.5" r="1.5"/><circle cx="17" cy="9" r="1.5"/>'
  },
  {
      slug: 'collage-maker', cat: 'Image tools', name: 'Collage Maker',
      title: 'Collage Maker - Photo Grid & Mosaic Layouts, No Upload',
      desc: 'Make a photo collage from 2 to 9 pictures with 30+ grid and mosaic layouts. Pan and zoom each photo, set spacing, corners and colour, and save up to 3000 px.',
      card: 'Photo grids and mosaics for 2 to 9 pictures.',
      intro: 'Put 2 to 9 photos into a grid or mosaic layout, frame each one exactly how you like, and download a sharp collage for social media or print.',
      steps: ['Choose 2 to 9 photos.', 'Pick a layout and a canvas shape such as square, 4:5, 9:16, 16:9 or A4.', 'Drag photos to reposition them in their frames, zoom, swap frames, and set spacing, corners and background colour.', 'Download the collage as JPG or PNG at up to 3000 px.'],
      faq: [
        ['Are my photos uploaded?', 'No. The collage is drawn in your browser and your photos never leave your device.'],
        ['How many photos can a collage have?', 'From 2 to 9. There are layouts for every number, from simple side-by-side splits to mosaics with one big photo.'],
        ['How do I change which part of a photo shows?', 'Click a frame and drag the photo inside it. Zoom with the slider, the mouse wheel or two fingers on a phone.'],
        ['How do I move a photo to another frame?', 'Drag its thumbnail onto a frame, tap the thumbnail and then the frame, or select a frame and use Swap with another frame.'],
        ['Which size should I choose?', '1080 px suits Instagram and WhatsApp, 2000 px is a good all-round size, and 3000 px is best for printing.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h9M12 9h9"/>'
  },
  {
      slug: 'gif-maker', cat: 'Image tools', name: 'GIF Maker',
      title: 'GIF Maker - Turn Images into an Animated GIF Free',
      desc: 'Make an animated GIF from your pictures. Reorder frames, set the speed per frame, loop count and size, add a caption, preview it and download. No upload.',
      card: 'Turn pictures into an animated GIF.',
      intro: 'Combine two or more pictures into an animated GIF. Arrange the frames, choose the timing and size, add a caption and see a live preview before you save.',
      steps: ['Choose two or more images.', 'Drag the frames into order and set how long each one shows.', 'Choose the size, how the pictures fit, the loop setting and optional text.', 'Click Create GIF, check the result and its file size, then download.'],
      faq: [
        ['Are my pictures uploaded?', 'No. The GIF is encoded in your browser, in a background worker, and nothing leaves your device.'],
        ['How do I make the GIF faster or slower?', 'Change Time per frame. 100 ms is fast, 500 ms is half a second per picture. Untick Same time for every frame to give each frame its own time.'],
        ['How can I make the file smaller?', 'Use a smaller width, fewer frames or 64 colours per frame. Photos with lots of detail make bigger GIFs than simple graphics.'],
        ['Can the GIF play only once?', 'Yes. Set Repeat to Play once, or choose to play it 2, 3 or 5 times. Loop forever is the default.'],
        ['Why do photos look a little grainy or banded?', 'A GIF can show at most 256 colours per frame, so smooth gradients lose some detail. This is a limit of the GIF format.']
      ],
      icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M9.5 9.5a2 2 0 1 0 0 5h.5v-2M13 9.5v5M16 14.5v-5h2.5M16 12h2"/>'
  },
  {
      slug: 'blur-image', cat: 'Image tools', name: 'Blur & Censor Image',
      title: 'Blur Image - Blur, Pixelate or Black Out Parts of a Photo',
      desc: 'Hide faces, number plates and private details. Blur, pixelate or black out rectangles, ellipses or brush strokes, or blur the whole image. No upload.',
      card: 'Blur, pixelate or black out private details.',
      intro: 'Cover faces, names, addresses or number plates with blur, a pixel mosaic or a solid bar, then save the image at full resolution.',
      steps: ['Choose or paste an image.', 'Pick Rectangle, Ellipse or Brush and drag over what you want to hide.', 'Choose Blur, Pixelate or Solid bar and set the strength for each area. Move, resize or remove areas any time.', 'Download the censored image in its original size.'],
      faq: [
        ['Is my image uploaded?', 'No. The blurring happens in your browser and the image never leaves your device.'],
        ['Which effect is safest for passwords and ID numbers?', 'Solid bar. Light blur or large pixel blocks can sometimes be partly undone, so use a solid bar, or high strength, for anything sensitive.'],
        ['Can I change an area after drawing it?', 'Yes. Select it in the list or with Select and move, then drag it, resize it from a corner, change its effect or strength, or delete it.'],
        ['Does it find faces automatically?', 'Only in browsers that have a built-in face detector, where a Find faces button appears. Always check the result and cover anything it missed by hand.'],
        ['Is the original image changed?', 'No. You download a new copy; your original file stays as it was.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 9h2v2H8zM12 9h2v2h-2zM10 11h2v2h-2zM14 11h2v2h-2zM8 13h2v2H8zM12 13h2v2h-2z"/>'
  },
  {
      slug: 'barcode-generator', cat: 'Generators', name: 'Barcode Generator',
      title: 'Barcode Generator - EAN-13, UPC, Code 128 PNG & SVG Free',
      desc: 'Create EAN-13, EAN-8, UPC-A, Code 128, Code 39, ITF-14, MSI and Pharmacode barcodes with check digits. Download PNG or SVG, or a batch as ZIP.',
      card: 'EAN, UPC, Code 128 and more, as PNG or SVG.',
      intro: 'Type a number or text to get a scannable barcode. Check digits are worked out and checked for you, and you can make hundreds at once.',
      steps: ['Choose the barcode type, for example EAN-13 for retail products or Code 128 for any text.', 'Type the value. Check digits are added or verified automatically.', 'Set the bar width, height, text and colours.', 'Download PNG or SVG, or paste a list to get a ZIP of barcodes.'],
      faq: [
        ['Which barcode type should I use?', 'EAN-13 (or UPC-A in the US and Canada) for products sold in shops, ITF-14 for shipping cartons, and Code 128 for labels, inventory and anything with letters.'],
        ['Do I need to type the check digit?', 'No. Type 12 digits for EAN-13 (11 for UPC-A, 7 for EAN-8, 13 for ITF-14) and the check digit is added. If you type it, the tool tells you whether it is right.'],
        ['Can I use these barcodes on products in shops?', 'The barcodes are standard and scannable, but retail product numbers must be registered with GS1. Do not invent EAN or UPC numbers for products you sell.'],
        ['PNG or SVG?', 'SVG stays sharp at any size and is best for print and design software. PNG suits documents and websites; choose 4× resolution for print.'],
        ['How do I make many barcodes at once?', 'Paste one value per line in the Batch box and click Create ZIP. Invalid lines are skipped and listed.'],
        ['Is my data uploaded?', 'No. Barcodes are drawn in your browser and nothing leaves your device.']
      ],
      icon: '<path d="M3 5v14M6 5v14M10 5v14M13 5v14M17 5v14M21 5v14M8 5v14M19 5v14"/>'
  },
  {
      slug: 'screenshot-beautifier', cat: 'Image tools', name: 'Screenshot Beautifier',
      title: 'Screenshot Beautifier - Add Background, Frame & Shadow',
      desc: 'Make screenshots look polished: gradient background, padding, rounded corners, shadow, browser or phone frame, tilt and watermark. Export sharp PNG at 2×.',
      card: 'Gradient background, frame and shadow for screenshots.',
      intro: 'Paste a screenshot and turn it into a polished image for social media, docs or slides, with a background, rounded corners, shadow and an optional device frame.',
      steps: ['Paste a screenshot with Ctrl+V, or drop or choose an image.', 'Pick a gradient, solid colour or your own background image.', 'Add a browser or phone frame and set padding, rounding, shadow and tilt.', 'Choose a size such as Twitter/X or Instagram and download the PNG.'],
      faq: [
        ['Is my screenshot uploaded?', 'No. Everything is drawn in your browser, so private screens stay on your device.'],
        ['Why export at 2×?', 'A 2× image has twice the pixels in each direction, so text stays crisp on phones and high-resolution screens. 1× gives a smaller file.'],
        ['Which size should I pick for social media?', 'Twitter / X post (16:9) for X, Instagram square or portrait for Instagram, LinkedIn post for LinkedIn, and Fit the screenshot for docs and blogs.'],
        ['Can I keep a transparent background?', 'Yes. Choose Transparent as the background type; the PNG then has see-through areas around the screenshot.'],
        ['Are the browser and phone frames images of real devices?', 'No. They are simple generic frames drawn by the tool, not images of any brand of phone or browser.']
      ],
      icon: '<rect x="2" y="3" width="20" height="18" rx="3"/><rect x="6" y="7" width="12" height="10" rx="1.5"/><path d="M6 9.5h12"/>'
  },
  {
    slug: 'pdf-to-word', cat: 'PDF tools', name: 'PDF to Word',
    title: 'PDF to Word - Convert PDF to Editable DOCX Free',
    desc: 'Turn a PDF into an editable Word .docx with headings, bold, lists and pictures kept. Runs in your browser, so the file is never uploaded.',
    card: 'Turn a PDF into an editable Word file.',
    intro: 'Convert a PDF into a Word document you can edit. Paragraphs, headings, bold and italic text, simple lists and pictures are rebuilt on your own device.',
    steps: ['Click the box or drop your PDF onto it.', 'Choose whether to keep pictures and page breaks.', 'Click Convert to Word.', 'Click Download Word file and open it in Word, Google Docs or LibreOffice.'],
    faq: [
      ['Is my PDF uploaded?', 'No. The PDF is read and the Word file is built inside your browser. It never leaves your device.'],
      ['Will it look exactly like the PDF?', 'Text, headings, bold, italic, lists and pictures are kept. Tables, columns and complex layouts may need small fixes, because Word flows text while a PDF fixes every letter in place.'],
      ['What about scanned PDFs?', 'Pages with no real text are added as pictures. Use our Image to Text (OCR) tool to turn them into editable words.'],
      ['Does it work with password-protected PDFs?', 'No. Remove the password first, then convert.'],
      ['Which programs open the file?', 'The .docx opens in Microsoft Word, Google Docs, LibreOffice, Apple Pages and WPS Office.']
    ],
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M8 12l1.5 6 2.5-4.5 2.5 4.5 1.5-6"/>'
  },
  {
    slug: 'word-to-pdf', cat: 'PDF tools', name: 'Word to PDF',
    title: 'Word to PDF - Convert DOCX to PDF Free, No Upload',
    desc: 'Convert a Word .docx file to PDF with selectable text, pictures, tables and lists kept. Works in your browser with no upload and no sign-up.',
    card: 'Turn a Word .docx file into a PDF.',
    intro: 'Turn a Word document into a PDF that looks the same everywhere. Preview it first, then save a PDF with real, selectable text, all on your own device.',
    steps: ['Click the box or drop your .docx file onto it.', 'Check the preview of your pages.', 'Click Make PDF, then Download PDF.', 'For your exact fonts, use Print → Save as PDF instead.'],
    faq: [
      ['Is my document uploaded?', 'No. The document is read and the PDF is made inside your browser.'],
      ['Can I convert old .doc files?', 'No. Open the .doc in Word, LibreOffice or Google Docs, save it as .docx, then convert.'],
      ['Why do the letters look a little different?', 'Make PDF draws the text with the Noto Sans font. Use Print → Save as PDF to keep the fonts installed on your device.'],
      ['Can I select and copy text in the PDF?', 'Yes. The PDF holds real text, so it can be searched and copied.'],
      ['Are pictures and tables kept?', 'Yes. Pictures, table borders, shading, colours, lists, headers and footers are kept. Some Word charts and equations may not appear.']
    ],
    icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h3M15 15l2 2 2-2M17 17v-5"/>'
  },
  {
    slug: 'excel-csv-converter', cat: 'Developer tools', name: 'Excel to CSV Converter',
    title: 'Excel to CSV Converter - XLSX, CSV, TSV, JSON Free',
    desc: 'Convert Excel .xlsx, .xls and .ods to CSV, TSV or JSON, or CSV back to Excel. Pick the sheet, separator and UTF-8 option. No upload.',
    card: 'Convert Excel, CSV, TSV and JSON files.',
    intro: 'Change spreadsheets between Excel, OpenDocument, CSV, TSV and JSON. Choose the sheet, preview the rows and pick the separator, all in your browser.',
    steps: ['Click the box or drop your spreadsheet, CSV or JSON file onto it.', 'Choose the sheet and check the preview.', 'Pick the format and options, such as the separator and UTF-8 marker.', 'Click Convert, then Download.'],
    faq: [
      ['Is my spreadsheet uploaded?', 'No. The file is read and converted in your browser.'],
      ['Why do accents look wrong when I open the CSV in Excel?', 'Keep "Add a UTF-8 marker (BOM)" ticked. Excel then reads the file as UTF-8 and shows all letters correctly.'],
      ['Can I convert all sheets at once?', 'Excel and ODS output keep every sheet. CSV, TSV and JSON hold one sheet, so convert the others one by one.'],
      ['Are formulas kept?', 'Formulas are saved as their last calculated values.'],
      ['Are leading zeros kept?', 'Yes. Values like 007 or 0042 stay as text when a CSV is read.'],
      ['Which library does it use?', 'SheetJS Community Edition, an open-source spreadsheet library that runs in your browser.']
    ],
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>'
  },
  {
    slug: 'webcam-test', cat: 'Media tools', name: 'Webcam Test',
    title: 'Webcam Test - Check Your Camera Online Free',
    desc: 'Test your webcam in the browser: live preview, camera list, real resolution and frame rate, mirror view and snapshots. Nothing is uploaded.',
    card: 'Check your camera, resolution and frame rate.',
    intro: 'Make sure your camera works before a call. See the live picture, the resolution and frame rate you really get, and take a snapshot.',
    steps: ['Click Start camera and allow access.', 'Check the live picture and choose another camera if you have more than one.', 'Read the resolution and frame rate.', 'Take a snapshot to download it, then click Stop.'],
    faq: [
      ['Is my video recorded or uploaded?', 'No. The picture stays on your device and snapshots are saved only if you download them.'],
      ['Why is the picture black?', 'Another app may be using the camera, or the camera is switched off or covered. Close Zoom, Teams or the Camera app and try again.'],
      ['How do I allow the camera?', 'Click the camera or lock icon next to the web address and choose Allow, then press Start camera again.'],
      ['Why is my frame rate low?', 'Most cameras slow down in poor light. Add light in front of you, or choose a lower resolution.'],
      ['Does it work on phones?', 'Yes. After allowing the camera, use the Camera menu to switch between the front and back camera.']
    ],
    icon: '<circle cx="12" cy="10" r="6"/><circle cx="12" cy="10" r="2"/><path d="M8 21h8M12 16v5"/>'
  },
  {
    slug: 'mic-test', cat: 'Media tools', name: 'Mic Test',
    title: 'Mic Test - Check Your Microphone Online Free',
    desc: 'Test your microphone with a live level meter, waveform, frequency bars and clipping warning. Record 5 seconds and play it back. No upload.',
    card: 'Check your microphone and hear yourself.',
    intro: 'See whether your microphone works and how loud it is. Watch the level meter and waves, check for clipping, and record a short clip to hear yourself.',
    steps: ['Click Start microphone and allow access.', 'Speak normally and watch the level meter.', 'Choose another microphone if needed.', 'Click Record 5 seconds and listen to the playback.'],
    faq: [
      ['Is my voice uploaded?', 'No. The sound is analysed on your device and the recording is only saved if you download it.'],
      ['What does clipping mean?', 'The sound is so loud that the top of the wave is cut off, which sounds distorted. Lower the input volume or move back.'],
      ['What level is good?', 'Normal speech should peak around -20 to -10 dB, in the green, without the CLIPPING light.'],
      ['Why does nothing move?', 'The microphone may be muted, the wrong one may be selected, or its input volume may be at zero in your sound settings.'],
      ['Should I turn on noise reduction?', 'Leave it off to hear your microphone as it is. Turn it on to hear what a video call does to your voice.']
    ],
    icon: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>'
  },
  {
    slug: 'keyboard-tester', cat: 'Developer tools', name: 'Keyboard Tester',
    title: 'Keyboard Tester - Test Every Key Online Free',
    desc: 'Test your keyboard online: keys light up as you press them, with key codes, stuck key and ghosting checks, and a key history.',
    card: 'Check that every key on your keyboard works.',
    intro: 'Press each key and watch it light up on a full-size keyboard. See key names and codes, find stuck keys and check how many keys work together.',
    steps: ['Choose your keyboard layout.', 'Press every key; each one turns green once it works.', 'Hold several keys together to test ghosting.', 'Check the details and history, then press Reset test to start again.'],
    faq: [
      ['Is what I type saved or sent anywhere?', 'No. Key presses are shown on this page only and are forgotten when you leave.'],
      ['Why do some keys not light up?', 'Some keys never reach websites, such as Fn, Ctrl+Alt+Delete, Windows-key shortcuts and media keys. Other keys that stay grey may be faulty.'],
      ['What is ghosting?', 'Some keyboards cannot report certain keys pressed together. Hold the keys; any that do not light up are not detected.'],
      ['What is the difference between key and code?', 'key is the character the key types in your layout; code is the physical key position, which stays the same in every language.'],
      ['Does it work on a phone?', 'Use the "Type here" box to test a keyboard connected to a phone or tablet. On-screen keyboards often report keys as Unidentified.']
    ],
    icon: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8"/>'
  },
  {
    slug: 'screen-test', cat: 'Media tools', name: 'Dead Pixel & Screen Test',
    title: 'Dead Pixel Test - Screen Test and Stuck Pixel Fixer',
    desc: 'Find dead and stuck pixels with full-screen colours, gradients and patterns. Includes a stuck pixel fixer and your screen resolution and refresh rate.',
    card: 'Find dead pixels and test your screen.',
    intro: 'Fill your screen with solid colours and patterns to find dead or stuck pixels, backlight bleed and banding, and see your resolution and refresh rate.',
    steps: ['Click Start full-screen test or a colour tile.', 'Click or press the arrow keys to step through the colours.', 'Look closely for dots that stay dark, bright or coloured.', 'Press Esc to exit, and try the stuck pixel fixer if needed.'],
    faq: [
      ['What is the difference between a dead and a stuck pixel?', 'A dead pixel stays black on every colour. A stuck pixel stays one colour, such as red or green, and can sometimes be fixed.'],
      ['Does the stuck pixel fixer work?', 'Sometimes. Running fast flashing colours over a stuck pixel for 10 to 30 minutes can revive it. It cannot fix dead pixels.'],
      ['Is the fixer safe?', 'It flashes bright colours quickly, so do not use it if you or anyone watching has photosensitive epilepsy. It only starts after you confirm the warning.'],
      ['How accurate is the refresh rate?', 'It is an estimate from how often the browser draws. Battery saving or a busy computer can make it read lower.'],
      ['Does it work on phones?', 'Yes. Tap to change colours. On iPhone the test fills the page instead of using true full screen.']
    ],
    icon: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8h2v2H7z"/>'
  },
  {
      slug: 'emi-calculator',
      cat: 'Finance calculators',
      name: 'EMI Calculator',
      title: 'EMI Calculator - Loan EMI with Prepayment & Schedule',
      desc: 'Work out the monthly EMI for a home, car or personal loan, see total interest, a yearly chart and full schedule, and test prepayments.',
      card: 'Loan EMI, interest, prepayments and schedule.',
      intro: 'Enter a loan amount, interest rate and term to see your monthly payment (EMI), the total interest and a month-by-month repayment schedule. Add prepayments to see how much interest you save.',
      steps: [
    'Pick a loan type preset or type the loan amount, yearly interest rate and term.',
    'Optionally add an extra monthly payment or a one-time prepayment.',
    'Read the EMI, total interest and payoff date, then check the chart and schedule.',
    'Download the schedule as CSV or copy a summary.'
  ],
      faq: [
    [ 'What is an EMI?', 'EMI stands for equated monthly instalment: the same payment every month that covers interest and repays part of the loan until it is fully paid.' ],
    [ 'Which formula does it use?', 'EMI = P × r × (1 + r)^n ÷ ((1 + r)^n − 1), where P is the loan amount, r is the yearly rate ÷ 12 ÷ 100 and n is the number of months.' ],
    [
      'How does prepayment work here?',
      'Prepayments go straight to the balance and the EMI stays the same, so the loan finishes earlier. The tool shows the interest saved and how many months sooner you are debt-free.'
    ],
    [ 'Does it include fees or insurance?', 'Only if you add a processing fee, which is included in the total paid. Insurance, taxes and other charges from your lender are not included.' ],
    [ 'Can I use it for any currency?', 'Yes. Pick from about 40 currencies or type your own symbol. The maths is the same everywhere.' ]
  ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 15l3-3 3 2 4-5"/><path d="M7 8h4"/>'
  },
  {
      slug: 'income-tax-calculator',
      cat: 'Finance calculators',
      name: 'Income Tax Calculator',
      title: 'Income Tax Calculator - Salary Tax & Take-Home Pay',
      desc: 'Estimate income tax and take-home pay with editable tax slabs. Presets for the US, UK, Canada, Australia, India and more, or enter your own.',
      card: 'Tax and take-home pay with editable slabs.',
      intro: 'Enter your salary to estimate income tax, take-home pay and your average and top tax rates. Start from a country preset or type the tax slabs for any country.',
      steps: [
    'Choose a country preset, or Custom to enter your own tax slabs.',
    'Type your gross salary and choose per year or per month.',
    'Read the yearly and monthly tax, take-home pay and tax rates.',
    'Edit any slab, deduction or levy to match your situation.'
  ],
      faq: [
    [
      'Which countries are included?',
      'Presets cover United States federal tax (single and married joint, 2026), the United Kingdom (2026-27), Canada federal (2026), Australia (2026-27), India new regime (FY 2026-27), Pakistan salaried (tax years 2026 and 2027) and the UAE. Any other country works with Custom slabs.'
    ],
    [ 'How do tax slabs work?', 'Each slab taxes only the part of your income that falls inside it. Moving into a higher slab does not raise the tax on the income below it.' ],
    [
      'Is this exact?',
      'No. It is an estimate of income tax on salary. It does not include every credit, allowance, social security or local tax. Check the official tax website or an adviser before you file.'
    ],
    [
      'Are the rates up to date?',
      'Each preset shows its tax year and a link to the official source. Tax rules change every year, so check the latest rates there. You can edit any slab if something has changed.'
    ],
    [
      'What are cess, levy and surcharge?',
      'A cess or surcharge is an extra percentage of the tax (for example India’s 4% cess). A levy is a percentage of taxable income (for example Australia’s Medicare levy). Leave them at 0 if they do not apply.'
    ],
    [ 'Is my salary saved or sent anywhere?', 'Nothing is sent. Your entries and any custom slabs are kept only in this browser.' ]
  ],
      icon: '<path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><path d="M9 7h6M9 11h6"/><path d="M9.5 16l5-3"/><circle cx="9.5" cy="13.5" r=".5"/><circle cx="14.5" cy="16" r=".5"/>'
  },
  {
      slug: 'sip-calculator',
      cat: 'Finance calculators',
      name: 'SIP Calculator',
      title: 'SIP Calculator - Monthly Investment Growth with Step-Up',
      desc: 'See how a monthly investment (SIP) or a lump sum could grow. Add a yearly step-up, view the growth chart and a year-by-year table.',
      card: 'Monthly investment growth with step-up.',
      intro: 'Estimate the future value of a regular monthly investment or a one-time lump sum at an expected yearly return, with an optional yearly step-up.',
      steps: [
    'Choose Monthly investment (SIP) or Lump sum.',
    'Enter the amount, expected yearly return and number of years.',
    'Optionally add a yearly step-up to raise your monthly amount each year.',
    'Read the amount invested, estimated gains and total value, and check the chart.'
  ],
      faq: [
    [ 'What is a SIP?', 'A systematic investment plan: investing a fixed amount every month, usually into a fund. It works the same for any regular saving into an investment account.' ],
    [
      'How is the SIP value calculated?',
      'Like most SIP calculators: the yearly return ÷ 12 is applied every month, and each payment is made at the start of the month. A lump sum is compounded once a year.'
    ],
    [ 'What is a step-up?', 'Raising your monthly amount by a fixed percentage each year, for example 10% as your income grows. It can make a big difference over long periods.' ],
    [ 'Are returns guaranteed?', 'No. Real investments go up and down. The calculator shows what a steady average return would give, which helps you plan but is not a promise.' ],
    [ 'Does it include fees or tax?', 'No. Use a lower expected return to allow for fund fees and taxes.' ]
  ],
      icon: '<path d="M3 20h18"/><path d="M5 17l4-5 4 3 6-8"/><path d="M15 7h4v4"/>'
  },
  {
      slug: 'inflation-calculator',
      cat: 'Finance calculators',
      name: 'Inflation Calculator',
      title: 'Inflation Calculator - Future Cost & Purchasing Power',
      desc: 'See what something will cost in the future and how much buying power your money loses, using any inflation rate you choose.',
      card: 'Future prices and buying power over time.',
      intro: 'Type an amount, an inflation rate and a number of years to see the future cost of the same things and what today’s money will really be worth.',
      steps: [ 'Enter an amount in today’s money.', 'Enter the yearly inflation rate you expect.', 'Enter the number of years.', 'Read the future cost, buying power and the year-by-year table.' ],
      faq: [
    [ 'How is it calculated?', 'Future cost = amount × (1 + rate)^years. Buying power = amount ÷ (1 + rate)^years.' ],
    [
      'Which inflation rate should I use?',
      'Use your country’s recent average from its statistics office or central bank, or a guess for the future. Rates differ a lot between countries and years.'
    ],
    [ 'Can I use a negative rate?', 'Yes. A negative rate means deflation: prices fall and money buys more.' ],
    [ 'Does it use official price data?', 'No. You choose the rate, so it works for any country and any period.' ],
    [ 'How long until prices double?', 'The tool shows it. A quick rule: 70 ÷ the inflation rate is roughly the years for prices to double.' ]
  ],
      icon: '<path d="M12 3v18"/><path d="M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 2.6 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3"/><path d="M19 4l2 2-2 2"/>'
  },
  {
      slug: 'roi-calculator',
      cat: 'Finance calculators',
      name: 'ROI Calculator',
      title: 'ROI Calculator - Return on Investment & Break-Even',
      desc: 'Calculate return on investment, annualized ROI and profit, or find your break-even point in units and sales. Free and simple.',
      card: 'ROI, yearly ROI and break-even point.',
      intro: 'Find the return on an investment as a percentage and per year, or switch to Break-even to see how many units you must sell to cover your costs.',
      steps: [
    'Choose Return on investment or Break-even.',
    'For ROI, enter the amount invested, the amount returned and how long you held it.',
    'For break-even, enter fixed costs, price per unit and variable cost per unit.',
    'Read the results and copy them if you need to share.'
  ],
      faq: [
    [ 'How is ROI calculated?', 'ROI = (amount returned − total cost) ÷ total cost × 100, where total cost is the amount invested plus extra costs.' ],
    [
      'What is annualized ROI?',
      'The yearly growth rate that would give the same result: (returned ÷ cost)^(1 ÷ years) − 1. It lets you compare investments held for different lengths of time.'
    ],
    [ 'How is the break-even point found?', 'Break-even units = fixed costs ÷ (price − variable cost per unit), rounded up to a whole unit.' ],
    [ 'Why does break-even say the price is too low?', 'If each unit costs as much as or more than its price, every sale loses money and you never break even.' ],
    [ 'Is this financial advice?', 'No. It is a quick calculator to compare ideas. Include all costs for an honest result.' ]
  ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M8 15l3-3 2 2 3-4"/><path d="M14 10h2v2"/>'
  },
  {
      slug: 'savings-goal-calculator',
      cat: 'Finance calculators',
      name: 'Savings Goal Calculator',
      title: 'Savings Goal Calculator - How Much to Save Each Month',
      desc: 'Find out how much to save each month or week to reach a savings goal by a date, including interest, or how long a set amount takes.',
      card: 'Monthly saving needed to reach a goal.',
      intro: 'Set a goal, a date and your savings interest rate to see how much to put aside each month and week, and how long it takes if you save a set amount.',
      steps: [
    'Enter your savings goal and anything already saved.',
    'Pick the date you want to reach it and your interest rate.',
    'Read the monthly and weekly amount needed.',
    'Optionally type what you can save per month to see when you will get there.'
  ],
      faq: [
    [
      'How is the monthly amount worked out?',
      'It uses the future value of regular savings: your current savings grow with monthly interest, and the monthly deposit fills the gap to the goal by the date.'
    ],
    [ 'When are deposits made?', 'At the end of each month, with interest added monthly at the yearly rate ÷ 12.' ],
    [ 'What if I already have enough?', 'If what you have saved will grow to the goal by the date, the tool tells you no more saving is needed.' ],
    [ 'Should I include interest?', 'Use your savings account rate. Use 0 for cash or if you are unsure; that gives a safe, slightly higher monthly amount.' ],
    [ 'Can I see when I will reach the goal?', 'Yes. Type how much you can save per month in the second box to see the number of months and the month you reach it.' ]
  ],
      icon: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="M17 3v4h4"/>'
  },
  {
      slug: 'budget-planner',
      cat: 'Finance calculators',
      name: 'Budget Planner',
      title: 'Budget Planner - Monthly Budget with 50/30/20 Guide',
      desc: 'Plan your monthly budget: list income and expenses, compare them with the 50/30/20 rule, see where money goes, then print or save a PDF.',
      card: 'Monthly budget with the 50/30/20 guide.',
      intro: 'List your monthly income and costs, sort each cost into needs, wants or savings, and see how your budget compares with the 50/30/20 guide.',
      steps: [
    'Enter your monthly take-home income.',
    'Edit the example expenses and put each in Needs, Wants or Savings.',
    'Check what is left over and the 50/30/20 comparison.',
    'Print it or download a PDF. Your budget is saved on this device.'
  ],
      faq: [
    [
      'What is the 50/30/20 rule?',
      'A simple guide: about 50% of take-home pay for needs, 30% for wants and 20% for savings and extra debt payments. It is a starting point, not a strict rule.'
    ],
    [ 'Is my budget saved?', 'Yes, automatically, but only in this browser on this device. Nothing is uploaded.' ],
    [ 'Can I change the categories?', 'Yes. Rename, add or remove any income or expense and choose its group.' ],
    [ 'Which currency can I use?', 'About 40 currencies are listed, or choose Other to type your own symbol.' ],
    [ 'Can I print or share it?', 'Yes. Press Print or Download PDF for a clean one-page summary, or Copy summary for a short text.' ]
  ],
      icon: '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 10h18"/><path d="M7 15h3M14 15h3"/><path d="M8 3v4M16 3v4"/>'
  },
  {
      slug: 'freelancer-rate-calculator',
      cat: 'Finance calculators',
      name: 'Freelancer Rate Calculator',
      title: 'Freelance Rate Calculator - Hourly, Day & Project Rates',
      desc: 'Work out your freelance hourly, day and project rate from the income you want, billable hours, costs, tax and platform fees like Upwork or Fiverr.',
      card: 'Hourly and project rates that cover costs.',
      intro: 'Find the hourly and day rate you need to charge to take home the income you want after business costs, tax, platform fees and time off.',
      steps: [
    'Enter the take-home income you want per year or month.',
    'Enter your billable hours per week and weeks off per year.',
    'Add business costs, tax, platform and payment fees and a safety buffer.',
    'Read your hourly, day, monthly and yearly rate, and price a project by hours.'
  ],
      faq: [
    [
      'How is the rate calculated?',
      'It starts from your take-home goal, adds tax on profit and your business costs, then grosses up for platform and payment fees and a safety buffer. That total is divided by your billable hours in a year.'
    ],
    [ 'What are billable hours?', 'Hours you can charge a client for. Most freelancers bill 20 to 30 hours a week, because admin, sales and learning are unpaid.' ],
    [ 'Are the platform fees exact?', 'They are typical figures (for example Fiverr 20%, Upwork around 10%) and platforms change them. Check your platform and type the exact fee.' ],
    [ 'Should I include tax?', 'Yes. Type an estimate of income tax plus any self-employed social charges as a share of profit. Rules differ by country.' ],
    [ 'How do I price a fixed project?', 'Type the estimated hours in Price a project. The tool multiplies by your rate and adds a margin for risk and changes.' ]
  ],
      icon: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><circle cx="12" cy="13.5" r="2.5"/>'
  },
  {
      slug: 'receipt-generator',
      cat: 'Generators',
      name: 'Receipt Generator',
      title: 'Free Receipt Generator - Make a PDF Receipt Online',
      desc: 'Make a payment receipt with your logo, items, tax and payment method, then download a PDF or print it. Free, no sign-up, private.',
      card: 'Printable PDF receipts with logo and tax.',
      intro: 'Fill in your business, the customer, the items and how they paid to create a clean receipt with a live preview, then download it as a PDF or print it.',
      steps: [
    'Add your business name, contact details and logo.',
    'Enter the receipt number, date, customer and items.',
    'Add any discount and tax, the payment method and the amount received.',
    'Check the preview, then press Download PDF or Print.'
  ],
      faq: [
    [ 'Is the receipt generator free?', 'Yes. No sign-up, no watermark and no limit.' ],
    [ 'Is my data uploaded?', 'No. Everything runs in your browser. Your draft and logo are saved only on this device.' ],
    [ 'Can prices already include tax?', 'Yes. Choose “Already include tax” and the tool shows the tax part inside the total.' ],
    [ 'What if the customer paid only part?', 'Type the amount received. The receipt shows the balance due, or the change given if they paid more.' ],
    [ 'Which currencies work?', 'About 40 currencies are listed, or choose Other and type your own symbol.' ],
    [ 'Can I print on small paper?', 'Yes. Choose A5 for a smaller page, or print and pick your paper size in the print window.' ]
  ],
      icon: '<path d="M5 2h14v20l-2.5-1.5L14 22l-2-1.5L10 22l-2.5-1.5L5 22z"/><path d="M9 7h6M9 11h6M9 15h3"/>'
  },
  {
      slug: 'quotation-generator',
      cat: 'Generators',
      name: 'Quotation Generator',
      title: 'Free Quotation Generator - Make a PDF Quote or Estimate',
      desc: 'Create a professional quotation or estimate with your logo, items, discount, tax, deposit and terms, then download a PDF or print.',
      card: 'Make PDF quotes and estimates in minutes.',
      intro: 'Build a clear quotation, estimate or proposal with a live preview, then download it as a PDF or print it for your client to sign.',
      steps: [
    'Add your business details, logo and the client.',
    'Choose the title, number, date and how long the quote is valid.',
    'Enter the items, plus any discount, tax, other charges and deposit.',
    'Add notes and terms, then press Download PDF or Print.'
  ],
      faq: [
    [ 'What is the difference between a quote and an invoice?', 'A quote is an offer sent before work starts, showing the expected price. An invoice asks for payment after the work or sale.' ],
    [ 'Can I call it an estimate or proposal?', 'Yes. Choose Quotation, Estimate, Price quote or Proposal as the document title.' ],
    [ 'Is it free and private?', 'Yes. No sign-up or watermark, and everything stays on your device.' ],
    [ 'Can the client sign it?', 'Yes. An “Accepted by” signature line can be added at the bottom.' ],
    [ 'Can I ask for a deposit?', 'Yes. Type a deposit percentage and the amount appears under the total.' ],
    [ 'Do long quotes work?', 'Yes. Long quotes continue onto extra pages with page numbers.' ]
  ],
      icon: '<path d="M6 2h9l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M14 2v6h6"/><path d="M8 13h5M8 17h3"/><path d="M15 15l1.5 1.5L19 14"/>'
  },
  {
      slug: 'salary-slip-generator',
      cat: 'Generators',
      name: 'Salary Slip Generator',
      title: 'Salary Slip Generator - Free Payslip PDF Maker',
      desc: 'Make a professional salary slip (payslip) with earnings, deductions, net pay in words and signatures, then download a PDF or print.',
      card: 'Payslip PDF with earnings and deductions.',
      intro: 'Enter the company, employee, pay period, earnings and deductions to create a clean payslip with net pay, then download it as a PDF or print it.',
      steps: [
    'Add the company details and logo.',
    'Enter the employee details and pay period.',
    'List earnings and deductions with their amounts.',
    'Check the net pay and preview, then press Download PDF or Print.'
  ],
      faq: [
    [ 'Is this payslip generator free?', 'Yes. No sign-up or watermark, and no limit.' ],
    [ 'Is employee data uploaded?', 'No. Everything stays in your browser. The draft is saved only on this device.' ],
    [ 'Does it calculate tax?', 'No. Type the tax and other deductions yourself. The Income Tax Calculator can help estimate tax.' ],
    [ 'Can I make next month’s slip quickly?', 'Yes. Press Next month: the period and payment date move forward and the amounts stay for you to edit.' ],
    [ 'Is net pay shown in words?', 'Yes, in English, and you can turn it off.' ],
    [ 'Which currencies work?', 'About 40 currencies, or type your own symbol.' ]
  ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="10" r="2"/><path d="M5.5 16a3 3 0 0 1 6 0"/><path d="M14 9h4M14 13h4M14 16h2"/>'
  },
  {
      slug: 'savings-circle-calculator',
      cat: 'Finance calculators',
      name: 'Savings Circle (ROSCA) Calculator',
      title: 'Savings Circle Calculator - ROSCA Payout Schedule',
      desc: 'Plan a savings circle (ROSCA), also called committee, tanda, susu, chit fund or hui: payouts, dates, a random draw and a shareable schedule.',
      card: 'Plan a savings circle and its payout order.',
      intro: 'Set the members, the amount each pays and how often, then get the payout per round and a dated schedule of who receives the pot when. Share it on WhatsApp, print it or save a PDF.',
      steps: [
    'Enter the number of members, the amount each pays per round and how often.',
    'Pick the first payout date and type member names if you like.',
    'Choose the payout order: as listed, reversed or a random draw.',
    'Share the schedule on WhatsApp, copy it, print it or download a PDF.'
  ],
      faq: [
    [
      'What is a savings circle (ROSCA)?',
      'A rotating savings and credit association: a group where everyone pays the same amount each round and one member takes the whole pot, until everyone has had a turn. It is known as a committee or BC in South Asia, tanda or cundina in Latin America, susu or esusu in West Africa and the Caribbean, chama in East Africa, hui in China, gameya in Egypt, kye in Korea and a chit fund in India.'
    ],
    [ 'How much does each member get?', 'The pot is the number of members × the amount each pays, minus any organiser fee. Everyone pays in the same total and receives the pot once.' ],
    [ 'Is there interest?', 'No. Early receivers get an interest-free advance and later receivers are effectively saving. This tool does not handle bidding or auction circles.' ],
    [ 'Is the random draw fair?', 'It shuffles the names with a random order. Press Draw again for a new order and share the result with everyone at the same time.' ],
    [ 'Are the names saved?', 'Only in this browser on this device. Nothing is uploaded.' ]
  ],
      icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="4" r="1.5"/><circle cx="19" cy="15" r="1.5"/><circle cx="5" cy="15" r="1.5"/><path d="M12 9v6M10 13l2 2 2-2"/>'
  },
  {
      slug: 'bill-splitter',
      cat: 'Finance calculators',
      name: 'Bill Splitter',
      title: 'Bill Splitter - Split Trip & Group Expenses Fairly',
      desc: 'Split a group bill or trip expenses: add who paid what, choose who shares each cost, and see who owes whom with the fewest payments.',
      card: 'Who owes whom, with the fewest payments.',
      intro: 'Add the people in your group and each expense with who paid and who shared it. The splitter works out everyone’s balance and the fewest payments to settle up.',
      steps: [ 'Add the names of everyone in the group.', 'Add each expense, who paid it and who shares it.', 'Read who pays whom and each person’s balance.', 'Share the summary on WhatsApp or copy it.' ],
      faq: [
    [
      'How does it decide who pays whom?',
      'It works out each person’s balance (what they paid minus their share), then repeatedly matches the person who owes the most with the person owed the most. This settles everyone in as few payments as possible.'
    ],
    [ 'Can only some people share a cost?', 'Yes. Untick anyone who did not share an expense, such as someone who skipped a dinner.' ],
    [ 'How is rounding handled?', 'Amounts are split to the cent. If a cost does not divide evenly, the extra cent goes to the first people ticked, so totals always match.' ],
    [ 'Is my data saved?', 'Yes, in this browser only, so you can add expenses during a trip. Nothing is uploaded.' ],
    [ 'Can I use any currency?', 'Yes. Pick from the list or type your own symbol.' ]
  ],
      icon: '<path d="M4 4h16v6H4z"/><path d="M12 10v10"/><path d="M8 14l-4 4M16 14l4 4"/><path d="M9 7h6"/>'
  },
  {
      slug: 'debt-tracker',
      cat: 'Finance calculators',
      name: 'Debt Tracker (IOU Ledger)',
      title: 'Debt Tracker - Private IOU Ledger for Money Lent & Owed',
      desc: 'Keep a private ledger of money you lent and borrowed: balances per person, statements, CSV export and reminders. Saved only on your device.',
      card: 'Private ledger of money lent and owed.',
      intro: 'Record money you give to or get from friends, family or customers, and always know who owes you and whom you owe. Your ledger stays private on this device.',
      steps: [
    'Choose “I gave / lent money” or “I got / borrowed money”.',
    'Type the person, amount, date and an optional note, then press Add entry.',
    'Tap a person to see their entries and balance.',
    'Export a statement PDF or CSV, send a reminder, and download backups.'
  ],
      faq: [
    [ 'Where is my ledger stored?', 'Only in this browser on this device. It is never uploaded and is not part of account sync. Clearing your browser data deletes it.' ],
    [ 'How do I keep it safe?', 'Press Download backup now and then and keep the file safe. Restore backup brings it back on any device.' ],
    [ 'How is the balance worked out?', 'Money you gave counts as owed to you and money you got counts as owed by you. A positive balance means the person owes you.' ],
    [ 'Can I send a reminder?', 'Yes. Tap a person and press Send reminder to open WhatsApp with a polite message showing the balance.' ],
    [ 'Can I export my records?', 'Yes. Export CSV for spreadsheets, or Statement PDF for everyone or for one person with a running balance.' ],
    [ 'Is it the same as a khata book?', 'Yes. It works like a simple khata or IOU notebook for personal and small shop credit.' ]
  ],
      icon: '<path d="M4 4h12a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2z"/><path d="M18 8h2v12h-2"/><path d="M8 9h6M8 13h6"/><path d="M8 17l2-2M10 17l-2-2"/>'
  },
  {
    slug: 'audio-cutter', cat: 'Media tools', name: 'Audio Cutter',
    title: 'Audio Cutter - Cut MP3 & Make Ringtones Online Free',
    desc: 'Cut any song or audio file on a waveform, add fade in and fade out, and save as MP3, WAV or iPhone M4R ringtone. Works in your browser, no upload.',
    card: 'Cut songs and make ringtones with fades.',
    intro: 'Open a song, drag the start and end on its waveform, add a gentle fade in and fade out, and save the part you want as an MP3, WAV or iPhone ringtone. Everything happens on your own device.',
    steps: ['Click the box or drop a song, voice note or video onto it.', 'Drag the edges on the waveform, or type the start and end times. Press Play selection to listen.', 'Choose the fade in, fade out and the format: MP3, M4R (iPhone ringtone) or WAV.', 'Press Cut and save, then Download.'],
    faq: [
      ['Is my song uploaded?', 'No. The file is opened and cut inside your browser, so it never leaves your phone or computer.'],
      ['How do I make a ringtone?', 'Open the song, press "Ringtone: 30 seconds" and drag the highlighted part to your favourite section. Save as MP3 for Android, or as M4R for iPhone.'],
      ['How do I put the M4R ringtone on my iPhone?', 'Connect the iPhone to a computer and drag the M4R file onto it in Finder (Mac) or Apple Devices / iTunes (Windows). Then choose it in Settings, Sounds & Haptics, Ringtone. iPhone ringtones can be at most 40 seconds.'],
      ['Which files can I open?', 'MP3, M4A, WAV, OGG, FLAC and the sound of videos such as MP4 and WebM, as long as your browser can decode the sound. Chrome and Edge open the most formats.'],
      ['Does cutting lower the quality?', 'WAV keeps the exact quality. MP3 and M4R are compressed again; at 192 kbps or more the difference is very hard to hear.'],
      ['Is there a length limit?', 'Files up to 1 GB are accepted, but the whole sound is held in memory, so very long recordings can be slow on a phone.']
    ],
    icon: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>'
  },
  {
    slug: 'audio-converter', cat: 'Media tools', name: 'Audio Converter',
    title: 'Audio Converter - MP3, WAV, M4A, OGG, FLAC Online Free',
    desc: 'Convert audio files to MP3, WAV, M4A (AAC), OGG or FLAC. Choose the bitrate, convert many files at once and download a ZIP. Runs in your browser.',
    card: 'Convert audio to MP3, WAV, M4A, OGG or FLAC.',
    intro: 'Convert songs, voice notes and recordings between MP3, WAV, M4A (AAC), OGG and FLAC. Add many files at once, pick the quality, and download each file or all of them as a ZIP. Nothing is uploaded.',
    steps: ['Click the box or drop one or more audio or video files onto it.', 'Choose the format to convert to and the quality.', 'Optionally change the channels (stereo or mono) and sample rate.', 'Press Convert, then download each file or all of them as a ZIP.'],
    faq: [
      ['Are my files uploaded?', 'No. The files are converted inside your browser by a WebAssembly build of FFmpeg, so they stay on your device.'],
      ['Which formats can I convert from?', 'MP3, WAV, M4A, AAC, OGG, OPUS, FLAC, WMA, AMR, AIFF and the sound of videos such as MP4, MOV, MKV and WebM.'],
      ['Which format should I choose?', 'MP3 plays everywhere. M4A (AAC) sounds a little better at the same size and suits iPhone and Apple Music. FLAC and WAV keep the full quality; FLAC files are about half the size of WAV.'],
      ['Can I convert many files at once?', 'Yes, up to 50 files at a time. They are converted one after another, and you can download them all as one ZIP.'],
      ['Why is the first conversion slow?', 'The converter engine (about 32 MB) downloads the first time you use it. After that your browser keeps it, so it starts quickly.'],
      ['Does converting MP3 to WAV or FLAC improve quality?', 'No. It only makes a bigger file without loss from now on; detail already removed by MP3 cannot come back.']
    ],
    icon: '<path d="M4 7h12l-3-3M20 17H8l3 3"/><circle cx="19" cy="7" r="2"/><circle cx="5" cy="17" r="2"/>'
  },
  {
    slug: 'merge-videos', cat: 'Media tools', name: 'Merge Videos',
    title: 'Merge Videos Online - Join MP4 Clips Free, No Upload',
    desc: 'Join several video clips into one MP4 in the order you choose. Clips of different sizes are fitted automatically. Free, private, runs in your browser.',
    card: 'Join several video clips into one video.',
    intro: 'Put several video clips together into one video. Set the order, choose the size, and the clips are joined into a single MP4 on your own device. Matching clips can be joined in seconds without losing quality.',
    steps: ['Click the box or drop two or more video clips onto it.', 'Use the arrows to put the clips in the right order.', 'Choose the video size and how clips of a different shape should fit.', 'Press Merge videos, then Download.'],
    faq: [
      ['Are my videos uploaded?', 'No. The clips are joined inside your browser with a WebAssembly build of FFmpeg, so they never leave your device.'],
      ['Can I join clips of different sizes or formats?', 'Yes. Every clip is resized to the size you choose, with black bars or a slight crop for clips of a different shape, and the result is one standard MP4.'],
      ['What is fast join?', 'When all clips have the same format, size and frame rate (for example clips from the same phone), they can be joined end to end without re-encoding. This takes seconds and keeps the exact quality.'],
      ['How long does merging take?', 'Re-encoding runs on your device, so it depends on its speed. A minute of 720p video often takes one to three minutes on a computer, longer on a phone or at 1080p.'],
      ['Is there a size limit?', 'Up to 20 clips and 1 GB in total, because everything has to fit in your browser\'s memory.'],
      ['What happens to clips without sound?', 'Silence is added for those clips, so the sound of the other clips stays in sync.']
    ],
    icon: '<rect x="2" y="6" width="8" height="12" rx="1"/><rect x="14" y="6" width="8" height="12" rx="1"/><path d="M10 12h4"/>'
  },
  {
    slug: 'video-speed-changer', cat: 'Media tools', name: 'Video Speed Changer',
    title: 'Video Speed Changer - Speed Up or Slow Down Video Free',
    desc: 'Make a video faster or slower, from 0.25x slow motion to 4x, and keep the normal voice pitch. Save as MP4. Free, private, runs in your browser.',
    card: 'Speed up or slow down a video, 0.25x to 4x.',
    intro: 'Speed up a long video or make slow motion from 0.25x to 4x. The sound changes speed too, and keeps its normal pitch so voices do not sound like chipmunks. The new video is saved as an MP4 on your device.',
    steps: ['Click the box or drop a video onto it.', 'Pick a speed such as 0.5x or 2x, or type your own between 0.25 and 4.', 'Choose what happens to the sound, and check the speed in the player.', 'Press Change speed, then Download.'],
    faq: [
      ['Is my video uploaded?', 'No. The video is processed in your browser with a WebAssembly build of FFmpeg and never leaves your device.'],
      ['Does the voice sound strange when sped up?', 'Not by default. "Keep the normal voice pitch" changes the speed without making voices higher or lower. Choose "Change speed and pitch" if you want the chipmunk or deep-voice effect.'],
      ['Which speeds can I use?', 'Any speed from 0.25x (four times slower) to 4x (four times faster), for example 0.5, 1.25 or 1.75.'],
      ['Is slow motion smooth?', 'Frames are repeated to slow the video down, so very slow speeds can look a little steppy, especially if the video was not filmed at a high frame rate.'],
      ['How long does it take?', 'The video is re-encoded on your device, which often takes about as long as the new video plays, more on a phone.'],
      ['Is there a size limit?', 'Videos up to 1 GB. The video engine (about 32 MB) downloads the first time you use any of the video tools. After that your browser keeps it, so it starts quickly.']
    ],
    icon: '<path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>'
  },
  {
    slug: 'mute-video', cat: 'Media tools', name: 'Mute Video',
    title: 'Mute Video - Remove Audio from Video Online Free',
    desc: 'Remove the sound from an MP4, MOV, WebM or MKV video in seconds without losing quality. Free, private and runs in your browser, no upload.',
    card: 'Remove the sound from a video in seconds.',
    intro: 'Take the sound track out of a video and keep the picture exactly as it is. The video is copied without re-encoding, so it takes only seconds and the quality does not change. Nothing is uploaded.',
    steps: ['Click the box or drop a video onto it.', 'Keep "Fast, no quality loss" (or choose a standard MP4).', 'Press Remove sound.', 'Download your silent video.'],
    faq: [
      ['Is my video uploaded?', 'No. The sound is removed inside your browser, so the video never leaves your device.'],
      ['Does removing the sound reduce the quality?', 'No. In fast mode the picture is copied exactly as it is, without re-encoding.'],
      ['Which formats work?', 'MP4, MOV, M4V, WebM, MKV, AVI, 3GP and more. Fast mode keeps the same format; if that is not possible, a standard MP4 is made instead.'],
      ['Why is the silent file smaller?', 'The sound track is part of the file size. Removing it makes the file a little smaller.'],
      ['Can I remove only part of the sound?', 'Not with this tool. To keep only part of a video without sound, use the Video Trimmer and tick "Remove sound".'],
      ['Is there a size limit?', 'Videos up to 1 GB. The video engine (about 32 MB) downloads the first time you use any of the video tools. After that your browser keeps it, so it starts quickly.']
    ],
    icon: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/>'
  },
  {
    slug: 'rotate-video', cat: 'Media tools', name: 'Rotate Video',
    title: 'Rotate Video Online - Turn 90°, 180° or Flip Free',
    desc: 'Rotate a sideways or upside-down video by 90 or 180 degrees, or mirror and flip it. Preview first, save as MP4. Free and private, no upload.',
    card: 'Turn a sideways video upright or mirror it.',
    intro: 'Fix a video that was filmed sideways or upside down, or mirror it. See the result before you save, then download it as an MP4 that plays the right way up everywhere. Nothing is uploaded.',
    steps: ['Click the box or drop a video onto it.', 'Choose 90° right, 90° left, upside down, mirror or flip, and check the preview.', 'Press Rotate video.', 'Download the turned video.'],
    faq: [
      ['Is my video uploaded?', 'No. The video is turned inside your browser, so it never leaves your device.'],
      ['Which way should I turn it?', 'Look at the preview: it shows the result before you save. Choose 90° right if the top of the picture is on the left, and 90° left if it is on the right.'],
      ['What is the difference between mirror and flip?', 'Mirror swaps left and right, like a selfie camera. Flip turns the picture upside down as if seen in a lake, without swapping left and right.'],
      ['Does it lose quality?', 'The video is re-encoded to MP4. With "Good" or "High" quality the difference is very hard to see.'],
      ['Will it play the right way on every device?', 'Yes. The picture itself is turned, not just a rotation flag, so all players show it the same way.'],
      ['How long does it take?', 'About as long as the video plays on a computer, longer on a phone. The video engine (about 32 MB) downloads the first time you use any of the video tools. After that your browser keeps it, so it starts quickly.']
    ],
    icon: '<path d="M21 12a9 9 0 1 1-2.64-6.36L21 8"/><path d="M21 3v5h-5"/><rect x="8" y="9" width="8" height="6" rx="1"/>'
  },
  {
    slug: 'video-to-images', cat: 'Media tools', name: 'Video to Images',
    title: 'Video to Images - Extract Frames as JPG or PNG Free',
    desc: 'Save frames from a video as JPG or PNG pictures: one every few seconds, a set number, or at the exact times you choose. Download all as ZIP. No upload.',
    card: 'Save video frames as JPG or PNG pictures.',
    intro: 'Turn moments of a video into pictures. Take a frame every few seconds, a set number spread over the video, or at the exact times you choose, as JPG or PNG. Download one picture or all of them as a ZIP. Nothing is uploaded.',
    steps: ['Click the box or drop a video onto it.', 'Choose which pictures: every few seconds, a set number, or at times you choose.', 'Pick JPG or PNG and the picture size.', 'Press Get pictures, then tap a picture or download them all as a ZIP.'],
    faq: [
      ['Is my video uploaded?', 'No. The pictures are taken inside your browser, so the video never leaves your device.'],
      ['What quality are the pictures?', 'Each picture is a full frame at the size of the video (or smaller if you choose). PNG is an exact copy of the frame; JPG is much smaller and looks almost the same.'],
      ['How many pictures can I take?', 'Up to 300 at a time. For more, run it again on another part of the video.'],
      ['How do I get a picture at an exact moment?', 'Choose "At times I choose", play the video, pause at the moment you want and press "Add the player\'s current time". Repeat for each picture.'],
      ['Why are some pictures blurry?', 'Frames from fast movement are often blurred in the video itself. Try a time a fraction of a second earlier or later.'],
      ['Which video formats work?', 'Anything your browser can play is handled instantly. Other formats such as some MKV or AVI files use the video engine, which downloads once (about 32 MB) and is slower.']
    ],
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 4v16M17 4v16M2 9h5M2 15h5M17 9h5M17 15h5"/>'
  },
  {
    slug: 'metronome', cat: 'Media tools', name: 'Metronome',
    title: 'Online Metronome - Free, Accurate, With Tap Tempo',
    desc: 'A free, accurate online metronome from 20 to 300 BPM with tap tempo, time signatures, accents, subdivisions, sounds and a visual beat. Works on phones.',
    card: 'Keep time with an accurate metronome.',
    intro: 'Practise in time with an accurate metronome. Set the tempo from 20 to 300 BPM or tap it, choose the time signature, accent the first beat, add subdivisions, and follow the lit-up beat on screen.',
    steps: ['Set the tempo with the slider, the − and + buttons, the box, or Tap tempo.', 'Choose the time signature and, if you like, clicks between beats.', 'Tap a beat circle to make it accented, normal or silent.', 'Press Start (or the space bar) and play along.'],
    faq: [
      ['How accurate is this metronome?', 'Very accurate. The clicks are scheduled on your device\'s audio clock in advance, not with an ordinary timer, so they stay steady even when the page is busy.'],
      ['How does tap tempo work?', 'Tap the "Tap tempo" button in time with the music at least twice. The tempo is the average of your last few taps.'],
      ['Can I use it on my phone?', 'Yes. On iPhone, turn off silent mode, otherwise the clicks are muted. The screen is kept awake while it plays where the browser allows it.'],
      ['What do the beat circles do?', 'They light up on each beat. Tap one to change it between accented (louder, higher), normal and silent, for example to practise with gaps.'],
      ['What are clicks between beats?', 'Subdivisions: quieter clicks that split each beat into 2 (eighth notes), 3 (triplets) or 4 (sixteenth notes).'],
      ['How does 6/8 work?', 'Each click is an eighth note. Beats 1 and 4 are accented so you feel the two main pulses of the bar.']
    ],
    icon: '<path d="M9 3h6l4 18H5z"/><path d="M12 16l5-10"/><path d="M7.5 14h9"/>'
  },
  {
    slug: 'guitar-tuner', cat: 'Media tools', name: 'Guitar Tuner',
    title: 'Online Guitar Tuner - Free Tuner With Microphone',
    desc: 'Tune your guitar with your microphone: standard, Drop D and other tunings, bass, ukulele, violin and a chromatic mode. See the note and cents live.',
    card: 'Tune a guitar, bass or ukulele with your mic.',
    intro: 'Tune your guitar using your phone or computer microphone. Play a string and see the note, how many cents it is off, and whether to tune up or down. Standard and alternate tunings, bass, ukulele, violin and a chromatic mode are included.',
    steps: ['Press Start tuner and allow the microphone.', 'Choose your instrument and tuning.', 'Play one string and let it ring.', 'Turn the peg until the needle is in the green and it says In tune.'],
    faq: [
      ['Is the sound from my microphone recorded or uploaded?', 'No. The sound is analysed live on your device and is never recorded or sent anywhere.'],
      ['Which tunings are included?', 'Guitar standard, Drop D, half step down, full step down, Drop C, Open G, Open D, Open E and DADGAD; 4 and 5 string bass; ukulele; violin; and a chromatic mode for any note.'],
      ['What does "cents" mean?', 'A cent is one hundredth of a semitone. Within 5 cents of the target sounds in tune to almost everyone.'],
      ['The tuner shows the wrong string', 'It picks the string closest to the note it hears. If a string is very far out of tune, tap the string you are tuning to lock it.'],
      ['Can I hear the right note?', 'Yes. Tap a string button to hear its reference note for two seconds.'],
      ['What is the reference pitch?', 'Most music uses A4 = 440 Hz. Change it if you play with a piano or band tuned slightly differently, for example 432 or 442 Hz.']
    ],
    icon: '<path d="M19 3l2 2-5.5 5.5"/><path d="M13.5 8.5a4 4 0 0 0-5.6.4L4 13a3.5 3.5 0 0 0 0 5l2 2a3.5 3.5 0 0 0 5 0l4.1-3.9a4 4 0 0 0 .4-5.6z"/><circle cx="9.5" cy="14.5" r="1.5"/>'
  },
  {
    slug: 'speech-to-text', cat: 'Media tools', name: 'Speech to Text',
    title: 'Speech to Text Online - Free Voice Typing, 90+ Languages',
    desc: 'Type with your voice in English, Spanish, French, Arabic, Hindi, Chinese, Japanese and 90+ languages. Live transcript, punctuation, copy and save as TXT.',
    card: 'Type with your voice in 90+ languages.',
    intro: 'Speak and watch your words appear as text. Choose from over 90 languages and accents, including English, Urdu, Hindi, Arabic, Spanish, French, Chinese and Bengali. Add punctuation, edit the text, then copy it or save it as a TXT file.',
    steps: ['Choose the language you will speak.', 'Press Start dictation and allow the microphone.', 'Speak clearly; your words appear in the box. Add punctuation with your voice (English) or the buttons.', 'Press Stop, edit if needed, then Copy text or Download .txt.'],
    faq: [
      ['Which browsers does it work in?', 'Chrome and Edge on computers and Android phones, and Safari on Mac, iPhone and iPad. Firefox does not support speech recognition yet.'],
      ['Which languages can I use?', 'More than 90 languages and regional accents, including English, Spanish, French, German, Portuguese, Arabic, Urdu, Hindi, Bengali, Chinese, Japanese, Russian, Indonesian and Turkish. The list starts with your browser\'s language.'],
      ['Is my voice sent anywhere?', 'Your browser\'s speech service turns speech into text: Chrome uses Google, Edge uses Microsoft and Safari uses Apple, so an internet connection is needed. This website does not receive or store your voice or text.'],
      ['How do I add commas and full stops?', 'In English, say "comma", "full stop" or "period", "question mark", "new line" or "new paragraph". In any language you can tap the punctuation buttons, including ۔ ، ؟ for Urdu and । for Hindi.'],
      ['Why does it stop by itself?', 'Browsers end listening after a pause. The tool starts listening again automatically until you press Stop, or stops after a long silence.'],
      ['Can I edit the text?', 'Yes. The text box is a normal text area: click anywhere to fix words while you dictate or afterwards.']
    ],
    icon: '<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/><path d="M8 21h8"/>'
  },
  {
      slug: 'electricity-bill-calculator', cat: 'Calculators', name: 'Electricity Bill Calculator',
      title: 'Electricity Bill Calculator - Units to Bill With Slabs',
      desc: 'Estimate your electricity bill from units (kWh) with a flat rate or your own slab table, plus fixed charges and taxes. Presets for several countries.',
      card: 'Units (kWh) to bill with slabs, charges and tax.',
      intro: 'Turn the units on your meter into an estimated bill. Use one flat price or a slab table you can edit, add fixed charges and taxes, and see every line of the breakdown.',
      steps: ['Pick a preset or keep "My own rates", and choose flat rate or slabs.', 'Enter the units (kWh) you used, or work them out from two meter readings.', 'Add fixed charges and taxes from your bill.', 'Read the estimated total and the line-by-line breakdown.'],
      faq: [
        ['Are the preset rates up to date?', 'Presets are examples with the date they were published. Electricity prices change often, so copy the current rates from your bill or your supplier and edit them.'],
        ['What is a slab or tiered rate?', 'With slabs the price per unit changes with how much you use, for example the first 100 units at one price and the next 100 at a higher price.'],
        ['What is the "one previous slab benefit"?', 'Units up to the end of the previous slab all pay that slab\'s rate, and only the rest pays the current rate. Some utilities, for example in Pakistan, bill this way.'],
        ['Why is my real bill different?', 'Bills can include fuel or price adjustments, meter rent, subsidies, late fees and rounding. Add known extras in the charges and tax fields.'],
        ['Where do I find my units?', 'Your bill shows the units consumed, or subtract the previous meter reading from the current one using the meter readings box.']
      ],
      icon: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'
  },
  {
      slug: 'area-calculator', cat: 'Calculators', name: 'Area Calculator',
      title: 'Area Calculator - Shapes, Plots and Land Unit Converter',
      desc: 'Find the area of rectangles, triangles, circles, trapezoids and irregular plots, and convert to m², sq ft, acres, hectares and regional land units.',
      card: 'Shape and plot area in every land unit.',
      intro: 'Work out the area of a room, garden or plot of land from its measurements, then see it in metric, imperial and regional land units.',
      steps: ['Choose the shape, or "I already know the area" to convert units.', 'Pick the length unit and type the measurements.', 'Choose the unit you want for the answer.', 'See the area in every unit in the table below.'],
      faq: [
        ['How do I measure an irregular four-sided plot?', 'Measure all four sides and one diagonal between opposite corners. The plot is split into two triangles for an exact area. Without the diagonal you get an estimate.'],
        ['How big is a marla or kanal?', 'A marla is usually 225 or 272.25 square feet depending on the region, and 1 kanal is 20 marla. Pick the size used where you are.'],
        ['How big is a bigha?', 'It differs a lot between regions, so type the size used locally. 14,400 square feet is common in Bangladesh, West Bengal and Assam.'],
        ['How many square feet are in an acre?', '43,560 square feet, which is about 4,047 m² or 0.405 hectares.'],
        ['Is this good enough for legal documents?', 'It is for planning. For buying, selling or registering land, use an official survey.']
      ],
      icon: '<path d="M3 3h18v18H3z"/><path d="M3 9h4M3 15h4M9 3v4M15 3v4"/>'
  },
  {
      slug: 'construction-calculator', cat: 'Calculators', name: 'Construction Material Calculator',
      title: 'Construction Calculator - Bricks, Cement, Sand and Concrete',
      desc: 'Estimate bricks, cement bags, sand and crushed stone for walls, concrete slabs and plaster. Metric or imperial, editable mix ratios and wastage.',
      card: 'Bricks, cement, sand and stone for a job.',
      intro: 'Estimate how many bricks and how much cement, sand and crushed stone you need for a wall, a concrete slab or plastering, before you buy.',
      steps: ['Choose metric or imperial and what you are building.', 'Enter the sizes and pick the brick size or concrete mix.', 'Adjust the mix ratio, wastage and bag size if needed.', 'Read the materials list and how it was worked out.'],
      faq: [
        ['What is the dry volume factor?', 'A dry mix of cement and sand shrinks when water is added, so you need more dry material than the finished volume: about 1.33 for mortar and plaster and 1.54 for concrete.'],
        ['Which concrete mix should I use?', '1 : 1.5 : 3 is common for general structural work and 1 : 2 : 4 for floors and footings. Follow your engineer and local rules for anything structural.'],
        ['How much wastage should I add?', '5–10% is typical for breakage, spills and cutting.'],
        ['How big is a bag of cement?', '50 kg in most countries and 94 lb in the US. Change the bag size to match yours.'],
        ['Does it work with concrete blocks?', 'Yes. Choose the concrete block size or type your own block size.']
      ],
      icon: '<path d="M3 21h18M5 21V11h14v10M5 11V7h6v4M11 7V3h8v8"/>'
  },
  {
      slug: 'fuel-cost-calculator', cat: 'Calculators', name: 'Fuel Cost Calculator',
      title: 'Fuel Cost Calculator - Trip Cost and Split Per Person',
      desc: 'Work out the fuel cost of a trip from distance, fuel economy (km/L, L/100 km or mpg) and price, split it between people. Works for electric cars too.',
      card: 'Trip fuel cost, split between people.',
      intro: 'Find out how much fuel a trip needs and what it will cost, in kilometers or miles, liters or gallons, and split the cost between passengers.',
      steps: ['Enter the distance and choose one way or round trip.', 'Enter your car\'s fuel economy and its unit.', 'Enter the fuel price and choose per liter, gallon or kWh.', 'Read the total cost and the cost per person.'],
      faq: [
        ['What is the difference between US and UK mpg?', 'A UK (imperial) gallon is 4.546 liters and a US gallon is 3.785 liters, so the same car shows a higher mpg in the UK.'],
        ['Does it work for electric cars?', 'Yes. Choose kWh/100 km, km per kWh, miles per kWh or Wh per mile, and enter the price per kWh.'],
        ['Where do I find my fuel economy?', 'Your car\'s trip computer, the manual, or measure it with the Mileage Calculator.'],
        ['Does it include tolls or parking?', 'No, only fuel or electricity.']
      ],
      icon: '<path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h12M4 10h10M14 8l3 2v7a1.5 1.5 0 0 0 3 0V9l-3-3"/>'
  },
  {
      slug: 'average-calculator', cat: 'Calculators', name: 'Average Calculator',
      title: 'Average Calculator - Mean, Median, Mode and Ratio',
      desc: 'Find the mean, median, mode, range and weighted average of a list of numbers. Also simplify ratios, solve proportions and share amounts in a ratio.',
      card: 'Mean, median, mode and ratio tools.',
      intro: 'Paste a list of numbers to get the average and other summaries instantly, or switch to the Ratio tab to simplify ratios and solve proportions.',
      steps: ['Type or paste your numbers, separated by commas, spaces or new lines.', 'Choose Weighted if each value has a weight.', 'Read the mean, median, mode and range.', 'Open the Ratio tab for ratio problems.'],
      faq: [
        ['What is the difference between mean, median and mode?', 'The mean is the total divided by the count, the median is the middle value when sorted, and the mode is the value that appears most often.'],
        ['How is a weighted average worked out?', 'Each value is multiplied by its weight, the results are added, and the total is divided by the sum of the weights.'],
        ['How do I simplify a ratio with decimals?', 'Type it as it is, for example 1.5:2.25:3. The tool multiplies to remove decimals, then divides by the highest common factor to give 2:3:4.'],
        ['How do I solve 3:4 = 15:?', 'In "Solve a proportion" fill in 3, 4 and 15 and leave the last box empty. The answer is 20.']
      ],
      icon: '<path d="M4 20h16M7 16V9M12 16V5M17 16v-4M3 12h18" />'
  },
  {
      slug: 'speed-distance-time-calculator', cat: 'Calculators', name: 'Speed Distance Time Calculator',
      title: 'Speed Distance Time Calculator - Solve Any One',
      desc: 'Find speed, distance or time from the other two, in km/h, mph, m/s, knots or running pace, with every unit converted for you.',
      card: 'Solve speed, distance or time; pace too.',
      intro: 'Choose what you want to find, enter the other two values, and get the answer with conversions to every common unit, including running pace.',
      steps: ['Choose Speed, Distance or Time.', 'Enter the two values you know and pick their units.', 'Read the answer and the conversion tables.'],
      faq: [
        ['What is the formula?', 'Speed = distance ÷ time, distance = speed × time, and time = distance ÷ speed.'],
        ['Can I use running pace?', 'Yes. Choose "pace, min per km" or "pace, min per mile" as the speed unit, and type the pace in minutes (5.5 means 5:30).'],
        ['How do I convert km/h to mph?', 'Divide by 1.609. The table under the answer shows every unit at once.'],
        ['What is a knot?', 'One nautical mile (1,852 m) per hour, used at sea and in aviation.']
      ],
      icon: '<path d="M12 14l4-4"/><path d="M3.3 17a9 9 0 1 1 17.4 0"/><circle cx="12" cy="14" r="1"/>'
  },
  {
      slug: 'size-converter', cat: 'Calculators', name: 'Size Converter',
      title: 'Shoe, Clothing and Ring Size Converter - US, UK, EU',
      desc: 'Convert shoe sizes for men, women and kids, clothing sizes and ring sizes between US, UK, EU, Japan and more, or find your size by measuring.',
      card: 'Shoe, clothing and ring sizes worldwide.',
      intro: 'Shopping from another country? Convert shoe, clothing and ring sizes between US, UK, EU, Japan and other systems, or measure to find your size.',
      steps: ['Choose what you are converting.', 'Pick the size system you know.', 'Choose your size and read the equivalents.', 'Or open "Measure instead" and type your foot length or ring diameter.'],
      faq: [
        ['Are size charts the same for every brand?', 'No. Brands differ, so treat this as a guide and check the brand\'s own chart when you can.'],
        ['How do I measure my foot?', 'Stand on paper, mark the heel and the longest toe, and measure in cm. Measure in the evening and use your longer foot.'],
        ['How do I measure my ring size?', 'Measure the inside diameter of a ring that fits, in millimeters, or wrap a strip of paper around your finger and measure the circumference.'],
        ['What do C and Y mean for kids\' shoes?', 'C is child (toddler and little kid) and Y is youth (big kid) in US sizing.']
      ],
      icon: '<path d="M3 16c0-2 1-3 3-3l4-1 3-5h3l-1 6c3 0 5 1 5 3v1H3z"/><path d="M3 17v2h18v-2"/>'
  },
  {
      slug: 'gold-weight-converter', cat: 'Calculators', name: 'Gold Weight Converter',
      title: 'Gold Weight Converter - Grams, Troy Oz, Tola, Baht, Tael',
      desc: 'Convert gold weight between grams, troy ounces, tola, masha, ratti, baht, tael, mithqal and more. Find pure gold by karat and value at your price.',
      card: 'Grams, troy oz, tola, baht and karat value.',
      intro: 'Convert gold and silver weights between international and traditional units, see how much pure gold an item contains, and value it at a price you enter.',
      steps: ['Type the weight and choose its unit.', 'Read it in every other unit.', 'Choose the karat to see the pure gold content.', 'Optionally type a price to estimate the value.'],
      faq: [
        ['Is a troy ounce the same as an ounce?', 'No. Gold is priced in troy ounces of 31.1035 g. An ordinary (avoirdupois) ounce is 28.35 g.'],
        ['How many grams is a tola?', '11.6638 grams. 1 tola = 12 masha = 96 ratti.'],
        ['What is the difference between karat and carat?', 'Karat (K) measures gold purity, 24K being pure. Carat (ct) is a weight for gemstones, 0.2 g.'],
        ['Does it show live gold prices?', 'No. Type today\'s price from your jeweler, bank or a market website.'],
        ['How heavy is a baht or tael?', 'A Thai baht of gold is 15.244 g. A tael is 37.429 g in Hong Kong, 37.5 g in Taiwan and Vietnam, and 50 g in mainland China.']
      ],
      icon: '<path d="M3 18l3-7h12l3 7z"/><path d="M8 11l2-5h4l2 5"/>'
  },
  {
      slug: 'mileage-calculator', cat: 'Calculators', name: 'Mileage Calculator',
      title: 'Mileage Calculator - Fuel Average km/L, L/100km, MPG',
      desc: 'Work out your car\'s real fuel average from odometer readings and fuel filled, in km/L, L/100 km and mpg, and keep a log of fill-ups.',
      card: 'Real fuel average from odometer and fill-ups.',
      intro: 'Measure your car or bike\'s real fuel economy with the full-tank method, and log several fill-ups to see your average, best and worst.',
      steps: ['Fill the tank to full and note the odometer.', 'Next time, fill to full again and note the odometer and fuel added.', 'Enter both readings and the fuel to see your average.', 'Add each fill-up to the log to track it over time.'],
      faq: [
        ['What is the full-tank method?', 'Fill to full, drive, then fill to full again. The fuel added the second time is exactly what you used for the distance driven.'],
        ['Why does my average change between fill-ups?', 'City driving, traffic, air conditioning, load and how full the pump stops all change it. An average over several fill-ups is more reliable.'],
        ['Is my log saved?', 'It stays in this browser on this device if remembering inputs is on in Settings. It is never uploaded.'],
        ['How do I convert km/L to L/100 km?', 'Divide 100 by the km/L figure. 15 km/L is 6.67 L/100 km.']
      ],
      icon: '<circle cx="12" cy="13" r="8"/><path d="M12 13l4-4M8 21h8"/>'
  },
  {
      slug: 'unit-price-comparer', cat: 'Calculators', name: 'Unit Price Comparer',
      title: 'Unit Price Calculator - Compare Price per kg, L or Item',
      desc: 'Compare products of different sizes to find the cheapest per kg, 100 g, liter, ounce or item. Handles multipacks and mixed units.',
      card: 'Which pack is cheapest per kg, L or item?',
      intro: 'Big pack or small pack? Enter the price and size of each product and see which is the best value per kilogram, liter, ounce or item.',
      steps: ['Enter the price and size of each product.', 'Pick the unit and the number of packs if it is a multipack.', 'Choose what to compare per (kg, 100 g, L, item).', 'The best value is highlighted.'],
      faq: [
        ['Can I compare grams with kilograms?', 'Yes. Mix any weight units, any volume units, or any length units. Everything is converted first.'],
        ['Can I compare weight with volume?', 'No, because that depends on the product\'s density. Those products are marked so you can change the unit.'],
        ['How do multipacks work?', 'Type the size of one pack and the number of packs, for example 6 × 250 g.'],
        ['Is the biggest pack always cheapest?', 'Not always. Offers and small packs on sale often beat bulk sizes, which is why it helps to check.']
      ],
      icon: '<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/>'
  },
  {
      slug: 'solar-panel-calculator', cat: 'Calculators', name: 'Solar Panel Calculator',
      title: 'Solar Panel Calculator - Panels, Battery and Inverter Size',
      desc: 'Size a solar system from your bill or appliances: number of panels, kW, battery kWh and Ah, inverter and charge controller, using your sun hours.',
      card: 'Panels, battery and inverter for your use.',
      intro: 'Estimate the solar system you need: how many panels, how big a battery bank and inverter, and how much energy and money it could save.',
      steps: ['Enter your monthly kWh, daily kWh, or list your appliances.', 'Enter your peak sun hours, or pick a rough guide for your region.', 'Set panel size, battery share and battery type.', 'Read the panels, battery, inverter and yearly production.'],
      faq: [
        ['What are peak sun hours?', 'The day\'s sunlight counted as hours of full-strength sun (1,000 W per m²). Most places get 2.5–6.5 on a yearly average.'],
        ['Why add system losses?', 'Heat, dust, wiring, the inverter and battery all waste some energy. 15–25% is typical.'],
        ['Do I need batteries?', 'Only if you want power at night or during outages. For a grid-tied system without backup, set the battery share to 0.'],
        ['Which battery voltage should I choose?', '12 V suits very small systems. 24 V or 48 V is better for homes because the current and cable sizes are lower.'],
        ['Is this enough to buy a system?', 'It is a first estimate. Get a site survey from a qualified installer who checks shade, roof direction and local rules.']
      ],
      icon: '<rect x="3" y="11" width="18" height="10" rx="1"/><path d="M3 16h18M9 11v10M15 11v10M12 2v3M5.6 4.6l1.4 1.4M18.4 4.6L17 6"/>'
  },
  {
      slug: 'ups-battery-backup-calculator', cat: 'Calculators', name: 'UPS Battery Backup Calculator',
      title: 'UPS Battery Backup Calculator - Backup Time and Inverter Size',
      desc: 'Find how long a UPS or inverter battery will last from its Ah, voltage and your load in watts, the battery size for a target time, and inverter VA.',
      card: 'Battery backup hours and UPS/inverter size.',
      intro: 'Work out how many hours your UPS or inverter battery will run your devices, what battery you need for a target time, and what VA rating to buy.',
      steps: ['Enter the battery voltage, Ah and how many batteries you have.', 'Choose the battery type and inverter efficiency.', 'Enter your total load in watts, or add devices.', 'Read the backup time, battery needed and inverter size.'],
      faq: [
        ['How is backup time calculated?', 'Backup hours = battery volts × Ah × usable share × inverter efficiency ÷ load in watts.'],
        ['Why only 50% for lead-acid batteries?', 'Draining lead-acid batteries deeper shortens their life a lot. Lithium (LiFePO4) batteries can safely use about 90%.'],
        ['What is the difference between VA and watts?', 'VA is apparent power. Watts = VA × power factor, usually about 0.8 for UPS ratings.'],
        ['Series or parallel?', 'Series adds the voltages (two 12 V make 24 V); parallel adds the Ah. The stored energy is the same either way.']
      ],
      icon: '<rect x="2" y="7" width="18" height="12" rx="2"/><path d="M22 11v4M7 13h3M8.5 11.5v3M13 13h3"/>'
  },
  {
      slug: 'appliance-energy-cost-calculator', cat: 'Calculators', name: 'Appliance Energy Cost Calculator',
      title: 'Appliance Energy Cost Calculator - kWh and Running Cost',
      desc: 'List your appliances with watts and hours to see kWh and running cost per day, month and year, and which appliance uses the most electricity.',
      card: 'kWh and running cost of each appliance.',
      intro: 'Find out what each appliance costs to run. Add your devices with their watts and hours, enter your price per kWh, and see the daily, monthly and yearly cost.',
      steps: ['Enter your electricity price per kWh and currency.', 'Add appliances with watts, how many and hours a day.', 'Use quick-add buttons for common devices.', 'Read the cost per day, month and year, and the biggest user.'],
      faq: [
        ['How is the cost worked out?', 'kWh = watts × hours ÷ 1,000. Cost = kWh × your price per kWh.'],
        ['Where do I find the watts?', 'On the label or rating plate, usually on the back or bottom, or in the manual.'],
        ['Why does my fridge or AC use less than shown?', 'They switch on and off by themselves, so they often run only 30–60% of the time. Lower the hours to match.'],
        ['Is my list saved?', 'It stays in this browser if remembering inputs is on in Settings. Nothing is uploaded.']
      ],
      icon: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>'
  },
  {
      slug: 'date-calculator', cat: 'Time tools', name: 'Date Calculator',
      title: 'Date Calculator - Add or Subtract Days, Weeks, Months',
      desc: 'Add or subtract days, weeks, months and years from any date and see the resulting date and weekday. Optional working-days-only counting.',
      card: 'Add or subtract days, weeks, months, years.',
      intro: 'Find the date that is a number of days, weeks, months or years before or after another date, with the weekday and ISO week number.',
      steps: ['Pick the start date (today is filled in).', 'Choose Add or Subtract.', 'Type the years, months, weeks and days.', 'Read the result date and its weekday.'],
      faq: [
        ['What happens with 31 January plus 1 month?', 'February has no 31st, so the last day of February is used (28 or 29). The tool tells you when this happens.'],
        ['In what order is it added?', 'Years and months first, then weeks and days. This matches how most people and spreadsheets count.'],
        ['Can I count only working days?', 'Yes. Tick the working days option and weeks and days skip Saturdays and Sundays. For other weekends or holidays use the Working Days Calculator.'],
        ['Can I use negative numbers?', 'Yes. A negative number moves the other way, so Add with -3 days is the same as Subtract 3 days.']
      ],
      icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M12 13v5M9.5 15.5h5"/>'
  },
  {
      slug: 'working-days-calculator', cat: 'Time tools', name: 'Working Days Calculator',
      title: 'Working Days Calculator - Business Days Between Dates',
      desc: 'Count working days between two dates with your own weekend days (Sat-Sun, Fri-Sat and more) and a holiday list. Also add business days to a date.',
      card: 'Business days between dates, any weekend.',
      intro: 'Count the business days between two dates for deadlines, payroll and leave. Choose which days are your weekend and paste your public holidays.',
      steps: ['Pick the start and end dates.', 'Choose your weekend days.', 'Paste holidays, one date per line (optional).', 'Read the working days, or add working days to a date below.'],
      faq: [
        ['Are the start and end dates counted?', 'Both are counted by default, like the NETWORKDAYS function in spreadsheets. Untick either box to leave it out.'],
        ['My weekend is Friday and Saturday. Can I use that?', 'Yes. Choose it from the Weekend list or tick any days you like.'],
        ['Which holidays are included?', 'Only the ones you type. Public holidays differ by country and region, so paste your own list.'],
        ['What if a holiday falls on a weekend?', 'It is not subtracted twice. If your employer gives a replacement day off, add that day to the list.']
      ],
      icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 15l2 2 4-4"/>'
  },
  {
      slug: 'time-calculator', cat: 'Time tools', name: 'Time Calculator',
      title: 'Time Calculator - Add Hours, Minutes and Timesheets',
      desc: 'Add and subtract hours, minutes and seconds, total a timesheet with breaks and overnight shifts, and convert between decimal hours and h:mm.',
      card: 'Add times, timesheets and decimal hours.',
      intro: 'Add or subtract lengths of time, total the hours on a timesheet, and convert hours and minutes to decimal hours for payroll.',
      steps: ['Type hours, minutes and seconds on each line; choose − to subtract.', 'Fill in start, end and break for each day in the timesheet.', 'Use the converter to switch between 7:45 and 7.75 hours.'],
      faq: [
        ['How do I convert minutes to decimal hours?', 'Divide the minutes by 60. 45 minutes is 0.75 hours, so 7:45 is 7.75 hours.'],
        ['Does the timesheet handle night shifts?', 'Yes. If the end time is earlier than the start time, the shift is counted as running past midnight.'],
        ['Can I type more than 59 minutes?', 'Yes. 90 minutes is counted as 1 hour 30 minutes.'],
        ['Can it work out pay?', 'Yes. Type your hourly rate under the timesheet to see the pay for the total hours.']
      ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M17 3l2 2M7 3L5 5"/>'
  },
  {
      slug: 'lcm-hcf-calculator', cat: 'Study tools', name: 'LCM and HCF Calculator',
      title: 'LCM and HCF Calculator With Steps - GCD and Primes',
      desc: 'Find the LCM and HCF (GCD) of two or more numbers with prime factor and Euclid steps. Includes a prime number checker and prime factorization.',
      card: 'LCM, HCF/GCD with steps, prime checker.',
      intro: 'Get the lowest common multiple and highest common factor of any whole numbers, with the working shown two ways, plus a prime checker.',
      steps: ['Type two or more whole numbers.', 'Read the HCF (GCD) and LCM.', 'Follow the prime factor and Euclid steps below.', 'Check whether a number is prime and see its factors.'],
      faq: [
        ['Are HCF and GCD the same?', 'Yes. Highest common factor (HCF), greatest common divisor (GCD) and greatest common factor (GCF) all mean the same thing.'],
        ['How is the LCM found?', 'With prime factors, take every prime with its largest power. Or use LCM(a, b) = a × b ÷ HCF(a, b), one number at a time.'],
        ['How big can the numbers be?', 'Up to 9,007,199,254,740,991. The LCM itself can be much larger and is shown exactly.'],
        ['Is 1 a prime number?', 'No. A prime has exactly two factors, 1 and itself. 1 has only one factor.']
      ],
      icon: '<path d="M9 4L7 20M17 4l-2 16M4 9h16M3 15h16"/>'
  },
  {
      slug: 'excel-to-pdf', cat: 'PDF tools', name: 'Excel to PDF',
      title: 'Excel to PDF Converter - XLSX, XLS, CSV to PDF Free',
      desc: 'Turn Excel, OpenDocument or CSV spreadsheets into neat PDF tables. Pick a sheet, fit wide tables, repeat headers. Runs in your browser, no upload.',
      card: 'Turn spreadsheets and CSV files into PDF tables.',
      intro: 'Convert an Excel workbook, an .ods file or a CSV into a clean, printable PDF table. Choose the sheets, paper size and orientation; the file never leaves your device.',
      steps: ['Click the box or drop your .xlsx, .xls, .ods or .csv file.', 'Choose one sheet or all sheets, and the paper size.', 'Pick how wide tables should fit, then check the preview.', 'Click Make PDF, then Download PDF.'],
      faq: [
        ['Is my spreadsheet uploaded?', 'No. The file is read and turned into a PDF by your browser, on your own device.'],
        ['What happens to wide tables?', 'By default the text is made smaller so every column fits the page width, and the page turns to landscape when needed. You can instead keep the text size and let extra columns continue on more pages.'],
        ['Are formulas, colours and charts kept?', 'Formulas show their last calculated values and cell fill colours are kept. Charts, pictures, fonts and conditional formatting are not copied into the PDF.'],
        ['Does it work with Chinese, Arabic or Hindi text?', 'Yes. Letters that the built-in font does not have are drawn by your browser, so they show correctly in the PDF.'],
        ['Is there a size limit?', 'Up to about 1.5 million cells at once. Big sheets with tens of thousands of rows work, but can take a minute on a phone.'],
        ['Can I convert a password-protected workbook?', 'No. Open it in your spreadsheet program, remove the password, save, and try again.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M8 12h8M8 16h8M12 12v6"/>'
  },
  {
      slug: 'powerpoint-to-pdf', cat: 'PDF tools', name: 'PowerPoint to PDF',
      title: 'PowerPoint to PDF - Convert PPTX to PDF Free, No Upload',
      desc: 'Convert a PowerPoint .pptx into a PDF with one page per slide: text, pictures, shapes, tables and backgrounds. Runs in your browser, no upload.',
      card: 'Turn a .pptx presentation into a PDF.',
      intro: 'Turn the slides of a PowerPoint presentation into a PDF you can share, print or send. The slides are drawn in your browser and your file is never uploaded.',
      steps: ['Click the box or drop your .pptx file.', 'Tick Include hidden slides if you want those too.', 'Click Make PDF and check the slide previews.', 'Click Download PDF.'],
      faq: [
        ['Is my presentation uploaded?', 'No. The .pptx file is opened and turned into a PDF inside your browser, on your own device.'],
        ['Will the PDF look exactly like my slides?', 'Very close, but not always identical. Text uses the Noto Sans font, so lines can wrap a little differently from your fonts. For a perfect copy, use File, Export, PDF in PowerPoint, Keynote or LibreOffice.'],
        ['What is not included?', 'Animations, transitions, sound and video are left out (videos show their cover picture). Charts, 3D models, equations and some effects cannot be drawn; the tool tells you which slides had them.'],
        ['Can I convert old .ppt files?', 'No, only .pptx (also .ppsx and .potx). Open an old .ppt in PowerPoint, Google Slides or LibreOffice and save it as .pptx first.'],
        ['Is the text in the PDF selectable?', 'Yes. Text is real text, so you can search and copy it.'],
        ['What about hidden slides?', 'They are skipped unless you tick Include hidden slides.']
      ],
      icon: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v4M8 21h8M8 8h5a2 2 0 0 1 0 4H8V8z"/>'
  },
  {
      slug: 'unlock-pdf', cat: 'PDF tools', name: 'Unlock PDF',
      title: 'Unlock PDF - Remove PDF Password Free, No Upload',
      desc: 'Remove the password from a PDF you can open, and lift print, copy and edit limits. Works with AES-256, AES-128 and RC4. Runs in your browser.',
      card: 'Remove a known password and print or copy limits.',
      intro: 'Remove the open password from a PDF when you know it, or take away limits on printing, copying and editing. Everything happens on your device; the file and password are never uploaded.',
      steps: ['Click the box or drop your locked PDF.', 'If it asks for one, type the PDF password.', 'Click Unlock PDF.', 'Click Download unlocked PDF.'],
      faq: [
        ['Can it unlock a PDF if I forgot the password?', 'No. You need the password that opens the file. The tool does not guess or break passwords.'],
        ['Is my password sent anywhere?', 'No. The PDF and the password stay in your browser. Decryption runs on your device.'],
        ['Which kinds of PDF encryption work?', 'All standard PDF passwords: AES 256-bit, AES 128-bit and the older RC4 40-bit and 128-bit.'],
        ['My PDF opens without a password but I cannot print or copy. Can this help?', 'Yes. Drop the file in and click Unlock PDF. The new copy has no printing, copying or editing limits.'],
        ['Does unlocking change the content?', 'No. Pages, text, pictures and links stay exactly the same; only the encryption is removed.'],
        ['Is it legal?', 'Only unlock files that are yours or that you have permission to change.']
      ],
      icon: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2M12 15v2"/>'
  },
  {
      slug: 'protect-pdf', cat: 'PDF tools', name: 'Protect PDF',
      title: 'Protect PDF with Password - AES-256 Encryption, Free',
      desc: 'Add a password to a PDF with strong AES-256 encryption, and optionally block printing, copying or editing. Runs in your browser; nothing is uploaded.',
      card: 'Add a password and printing or copying limits.',
      intro: 'Lock a PDF with a password so only people who know it can open it. You can also stop printing, copying or editing. The file is encrypted on your own device.',
      steps: ['Click the box or drop your PDF.', 'Type a password twice.', 'Optionally open Restrictions to block printing, copying or editing.', 'Click Protect PDF, then Download protected PDF.'],
      faq: [
        ['How strong is the protection?', 'The PDF is encrypted with AES 256-bit, the strongest standard PDF encryption. A long password with letters, numbers and symbols is very hard to guess.'],
        ['Will the PDF open on any device?', 'Yes. Adobe Reader, browsers, phones and Mac Preview all open AES-256 PDFs after you type the password. Choose AES 128-bit only for very old readers.'],
        ['Is my password uploaded?', 'No. The password and the file never leave your browser.'],
        ['What if I forget the password?', 'There is no way to recover it, not even for us. Keep a copy of the original file or write the password down somewhere safe.'],
        ['What is the owner password?', 'It is a second password that lets you change or remove the restrictions later. If you leave it empty, a random one is made and shown to you.'],
        ['Do restrictions work everywhere?', 'Most readers respect them, but some programs ignore them. Only the open password truly keeps people out.']
      ],
      icon: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"/>'
  },
  {
      slug: 'crop-pdf', cat: 'PDF tools', name: 'Crop PDF',
      title: 'Crop PDF - Trim PDF Margins Online Free, No Upload',
      desc: 'Crop PDF pages by dragging a box on the page, or trim white margins automatically. Apply to all pages or the ones you choose. Free, in your browser.',
      card: 'Cut margins or keep just part of each page.',
      intro: 'Cut away margins or keep only the part of a page you need. Drag a box on the preview, or let the tool find the white margins for you. Your PDF stays on your device.',
      steps: ['Click the box or drop your PDF.', 'Drag the crop box or its handles over the page, or press Trim white margins.', 'Choose all pages, this page or a list of pages.', 'Click Crop PDF, then Download cropped PDF.'],
      faq: [
        ['Is my PDF uploaded?', 'No. It is previewed and cropped in your browser, on your own device.'],
        ['Does cropping reduce quality?', 'No. Pages are not redrawn; the tool only changes which part of each page is shown, so text stays sharp and selectable.'],
        ['Is the cut-away part deleted?', 'It is hidden, not erased. Every reader and printer shows the new size, but the hidden content is still inside the file. Do not rely on cropping to remove private information.'],
        ['Can I crop pages of different sizes?', 'Yes. The box is applied as the same share of each page, or choose "Trim white margins on every page separately" to fit each page on its own.'],
        ['Does it work on a phone?', 'Yes. Drag the box and the round handles with your finger.']
      ],
      icon: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>'
  },
  {
      slug: 'extract-images-from-pdf', cat: 'PDF tools', name: 'Extract Images from PDF',
      title: 'Extract Images from PDF - Save Original Pictures Free',
      desc: 'Pull every picture out of a PDF in its original quality. JPEG photos are saved untouched, other images as PNG. Download one by one or as a ZIP.',
      card: 'Save the pictures inside a PDF as files.',
      intro: 'Get the photos and pictures that are inside a PDF as separate image files, at the quality they were stored in. Nothing is uploaded; the PDF is read on your device.',
      steps: ['Click the box or drop your PDF.', 'Optionally type page numbers and choose whether to skip tiny images.', 'Click Extract images.', 'Tap a picture to save it, or click Download all (ZIP).'],
      faq: [
        ['Are the images saved at full quality?', 'Yes. JPEG photos are copied out byte for byte, exactly as stored in the PDF. Other pictures are saved as lossless PNG, with transparency when the PDF has it.'],
        ['Why are some pictures missing?', 'Text, lines, charts and logos drawn by the PDF itself are not images. To save those, use PDF to PNG, which turns whole pages into pictures.'],
        ['What are the tiny images that get skipped?', 'Many PDFs contain small dots, lines and icons stored as images. By default images under 32 pixels are skipped; choose "Keep every image" to include them.'],
        ['Does it work on scanned PDFs?', 'Yes. Each scanned page is usually one image, including black-and-white fax and JBIG2 scans, which are saved as PNG.'],
        ['Is my PDF uploaded?', 'No. Everything runs in your browser.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>'
  },
  {
      slug: 'pdf-to-png', cat: 'PDF tools', name: 'PDF to PNG',
      title: 'PDF to PNG Converter - High Quality, Transparent, Free',
      desc: 'Convert PDF pages to sharp PNG images up to 300 dpi, with an optional transparent background. Choose pages, download as ZIP. No upload.',
      card: 'Turn PDF pages into sharp PNG images.',
      intro: 'Turn every page of a PDF, or just the pages you choose, into lossless PNG pictures. Pick the resolution and an optional transparent background. Your file stays on your device.',
      steps: ['Click the box or drop your PDF.', 'Choose the resolution, and type pages if you only need some.', 'Tick Transparent background if you want no white paper.', 'Click Convert to PNG, then download the images or the ZIP.'],
      faq: [
        ['Why PNG instead of JPG?', 'PNG is lossless, so text, lines and diagrams stay perfectly sharp with no blurry edges. It can also be transparent. JPG files are smaller and better for photos.'],
        ['What does transparent background do?', 'The white paper behind the page is left out, so text and drawings sit on a see-through background. This is useful for logos, signatures and slides.'],
        ['Which resolution should I choose?', 'High (144 dpi) suits screens and documents. Print quality (300 dpi) is best for printing but gives much bigger files.'],
        ['How many pages can I convert?', 'Up to 300 pages at a time. Type a range such as 1-50 for bigger PDFs.'],
        ['Is my PDF uploaded?', 'No. The pages are drawn in your browser on your own device.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><circle cx="10" cy="12" r="1.5"/><path d="M19 17l-4-4-6 6"/>'
  },
  {
      slug: 'grayscale-pdf', cat: 'PDF tools', name: 'Grayscale PDF',
      title: 'Grayscale PDF - Convert PDF to Black and White Free',
      desc: 'Make a PDF grayscale (black and white) for cheaper printing. Keep text selectable, or rebuild pages as true grey images. Free, runs in your browser.',
      card: 'Turn a colour PDF into black and white.',
      intro: 'Remove the colour from a PDF so it prints in black and white or shades of grey. Choose a fast mode that keeps text selectable, or a strong mode that rebuilds every page in grey. Nothing is uploaded.',
      steps: ['Click the box or drop your PDF.', 'Choose how to convert: keep text selectable, or rebuild pages as grey images.', 'Click Convert to greyscale and check the preview.', 'Click Download grey PDF.'],
      faq: [
        ['What is the difference between the two modes?', 'Keep text selectable adds a grey filter over each page, so text stays sharp and searchable and the file stays small. Rebuild pages turns each page into a grey picture, which truly removes all colour but makes text unselectable.'],
        ['Which mode should I use for a print shop?', 'Use Rebuild pages as grey images. Some print shops check the file for colour, and only this mode removes the colour data completely.'],
        ['Will links and form fields still work?', 'In Keep text selectable mode, yes, but comments, highlights and form fields keep their colour. In Rebuild mode they are flattened into the page picture.'],
        ['What does pure black and white do?', 'It turns every pixel either black or white, which suits text and scanned documents and makes them crisp.'],
        ['Is my PDF uploaded?', 'No. Everything runs in your browser on your device.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><circle cx="12" cy="14" r="3.5"/><path d="M12 10.5v7a3.5 3.5 0 0 0 0-7z" fill="currentColor"/>'
  },
  {
      slug: 'passport-photo-maker', cat: 'Image tools', name: 'Passport Photo Maker',
      title: 'Passport Photo Maker - Free Passport & Visa Photos Online',
      desc: 'Make passport and visa photos for the US, UK, EU, Canada, India, China and more. White background, head guides, 4×6 or A4 print sheet. No upload.',
      card: 'Passport and visa photos for any country, ready to print.',
      intro: 'Make a passport or visa photo at home. Choose your country, upload or take a photo, line the face up with the guides, swap the background for white or another colour, and download a single photo or a sheet of copies to print. Your photo never leaves your device.',
      steps: ['Choose your country and document, for example United States 2 × 2 in or EU / Schengen 35 × 45 mm.', 'Upload a photo or press Take a photo to use your camera.', 'Pick a background colour, then drag and zoom so the top of the head and the chin sit on the guide lines.', 'Download the single photo for online forms, or a 4 × 6 in or A4 sheet with several copies to print.'],
      faq: [
        ['Which countries are included?', 'A standard 35 × 45 mm size used by most countries, plus presets for the United States, United Kingdom, EU and Schengen countries, Canada, Australia, India (passport and visa), China, Japan, Pakistan, Saudi Arabia, the United Arab Emirates, Brazil and Nigeria, plus a custom size for anything else.'],
        ['Will my photo be accepted?', 'The tool gets the size, head height and background right, but the office also checks things like lighting, shadows, expression and glasses. Rules change, so always compare with your government\'s official photo rules before you print or submit.'],
        ['How do I print it at the right size?', 'Download the 4 × 6 in sheet and print it as a normal 4 × 6 in (10 × 15 cm) photo at any photo shop or kiosk, or print the A4 / Letter PDF at 100% (Actual size), never Fit to page.'],
        ['How is the background replaced?', 'A small AI model runs in your browser, cuts out the person and puts them on the colour you pick. It downloads once (about 19 MB) and then stays on your device.'],
        ['Is my photo uploaded?', 'No. Everything, including the background removal, happens in your browser. Nothing is sent to a server.'],
        ['Can I use my phone camera?', 'Yes. Press Take a photo. Stand in front of a plain wall in even daylight, look straight at the camera with a neutral face, and ask someone else to take it if you can.']
      ],
      icon: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7.5 18c.8-2.2 2.5-3.3 4.5-3.3s3.7 1.1 4.5 3.3"/>'
  },
  {
      slug: 'image-upscaler', cat: 'Image tools', name: 'Image Upscaler',
      title: 'AI Image Upscaler - Enlarge Photos 2x or 4x Free, No Upload',
      desc: 'Make small or blurry pictures 2× or 4× bigger with AI that adds detail, or with fast Lanczos resizing. Before/after slider. Free and private.',
      card: 'Enlarge small pictures 2× or 4× with AI.',
      intro: 'Make a small picture bigger and sharper. Choose 2× or 4×, and an AI model running in your browser adds real detail and removes blur and JPG blocks. A fast mode gives an instant smooth result. Nothing is uploaded.',
      steps: ['Choose or drop a JPG, PNG or WebP picture.', 'Pick 2× or 4× bigger, and AI (sharpest) or Fast (smooth).', 'Wait for the progress bar, then drag across the picture to compare before and after.', 'Choose PNG, JPG or WebP and press Download bigger image.'],
      faq: [
        ['How does the AI upscaler work?', 'It uses Real-ESRGAN, a well-known open-source model for enlarging photos. It runs inside your browser with WebAssembly or WebGPU, so your picture never leaves your device.'],
        ['How long does it take?', 'A small picture takes a few seconds. A 1000 × 1000 px picture can take one to two minutes on a laptop and longer on an older phone, because all the work happens on your device. A timer shows how long is left, and you can stop at any time.'],
        ['Is there a size limit?', 'Yes. The AI works on pictures up to about 2 megapixels and the result is kept under 16 megapixels so phones can save it. Bigger pictures are reduced first, and the tool tells you when it does.'],
        ['What is the difference between AI and Fast?', 'Fast uses Lanczos resizing: instant and smooth but it cannot invent detail. AI rebuilds edges, textures and text, so results look much sharper, but it is slower.'],
        ['Does it keep transparency?', 'Yes. See-through parts of PNG pictures are kept and enlarged smoothly. Save as PNG or WebP to keep them.'],
        ['Is it really free and private?', 'Yes. There is no upload, no sign-up and no watermark. The AI files download once (about 17 MB) and then stay in your browser.']
      ],
      icon: '<rect x="3" y="11" width="10" height="10" rx="1"/><path d="M14 3h7v7M21 3l-8 8"/>'
  },
  {
      slug: 'rotate-flip-image', cat: 'Image tools', name: 'Rotate & Flip Image',
      title: 'Rotate Image Online - Rotate 90°, Any Angle & Flip, Free',
      desc: 'Rotate pictures 90°, 180° or any angle and flip them horizontally or vertically. Batch rotate many images and download a ZIP. No upload.',
      card: 'Rotate by any angle and mirror pictures in bulk.',
      intro: 'Turn sideways photos the right way up, straighten a tilted horizon or mirror a picture. Rotate by 90 or 180 degrees or by any angle, flip horizontally or vertically, and apply the same change to many pictures at once. Nothing is uploaded.',
      steps: ['Choose or drop one or more pictures.', 'Press Rotate left, Rotate right, 180° or a Flip button, or set any angle with the slider.', 'For tilted angles, choose whether to fill or crop the empty corners.', 'Download this image, or all of them as a ZIP.'],
      faq: [
        ['Can I rotate many pictures at once?', 'Yes. Add as many as you like. The same rotation and flip are used for all of them, and "Download all as ZIP" saves them together.'],
        ['Does rotating reduce quality?', 'PNG keeps every pixel exactly. JPG and WebP are saved again at the quality you choose (92% by default), which looks the same to the eye.'],
        ['How do I straighten a crooked photo?', 'Move the "Any angle" slider or type an angle such as 2.5, then choose "Crop off the empty corners" so no blank triangles are left.'],
        ['What happens to the corners when I rotate by an odd angle?', 'Either the picture is made bigger so all of it shows, with corners filled transparent, white, black or your colour, or the corners are cropped away.'],
        ['Is my picture uploaded?', 'No. Everything happens in your browser.']
      ],
      icon: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/><path d="M12 8v8M8 12h8" stroke-dasharray="2 2"/>'
  },
  {
      slug: 'image-splitter', cat: 'Image tools', name: 'Image Splitter',
      title: 'Image Splitter - Split Image into Grid, Strips or Carousel',
      desc: 'Cut a picture into a grid of rows and columns, equal strips, or a seamless Instagram carousel panorama. Download all pieces in a ZIP. Free, no upload.',
      card: 'Cut a picture into a grid, strips or carousel slides.',
      intro: 'Split one picture into equal pieces: a 3 × 3 grid, horizontal or vertical strips, or slides for a seamless Instagram carousel. The pieces are numbered and saved in a ZIP. Your picture never leaves your device.',
      steps: ['Choose or drop a picture.', 'Pick how to split: grid, Instagram carousel, horizontal strips or vertical strips.', 'Set the rows, columns or number of slides and check the cut lines on the preview.', 'Press Split and download ZIP, or tap a piece to save it on its own.'],
      faq: [
        ['How do I make a seamless Instagram carousel?', 'Choose "Instagram carousel (panorama)", the number of slides and the slide shape. The middle of your picture is cropped to fit exactly, then cut into slides of 1080 px wide. Post them in number order.'],
        ['Are the pieces exactly equal?', 'Yes, to the nearest pixel. If the size does not divide evenly, some pieces are one pixel wider or taller, so no part of the picture is lost.'],
        ['Does splitting reduce quality?', 'No for PNG. JPG and WebP pieces use the quality you choose. Grid and strip pieces are cut from the full-size picture.'],
        ['How many pieces can I make?', 'Up to 20 rows and 20 columns, so up to 400 pieces.'],
        ['Is my picture uploaded?', 'No. It is cut in your browser.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'
  },
  {
      slug: 'merge-images', cat: 'Image tools', name: 'Merge Images',
      title: 'Merge Images Online - Combine Photos Side by Side or Grid',
      desc: 'Join two or more pictures side by side, top to bottom or in a grid. Match sizes, add spacing, borders and a background colour. Free, no upload.',
      card: 'Join pictures side by side, stacked or in a grid.',
      intro: 'Combine several pictures into one. Put them side by side, stack them top to bottom or arrange them in a grid, make them the same size, and add space and a background colour between them. Your pictures never leave your device.',
      steps: ['Choose or drop two or more pictures.', 'Use the arrows to put them in order.', 'Pick a layout and adjust size matching, spacing, border and background.', 'Choose JPG, PNG or WebP and press Merge and download.'],
      faq: [
        ['How many pictures can I merge?', 'As many as you like. Very large results are reduced to about 16 megapixels so phones can save them, and the size is shown before you download.'],
        ['Can the pictures be different sizes?', 'Yes. "Make them the same size" scales them to match the largest or smallest, or choose "No, keep each size" and line them up at the top, centre or bottom.'],
        ['Can I make a before-and-after picture?', 'Yes. Add two pictures, choose "Side by side" and a small space between them.'],
        ['Can the background be see-through?', 'Yes. Tick "See-through" and save as PNG or WebP.'],
        ['Are my pictures uploaded?', 'No. They are joined in your browser.']
      ],
      icon: '<rect x="2" y="5" width="9" height="14" rx="1"/><rect x="13" y="5" width="9" height="14" rx="1"/>'
  },
  {
      slug: 'photo-to-sketch', cat: 'Image tools', name: 'Photo to Sketch',
      title: 'Photo to Sketch - Pencil, Cartoon & Oil Painting Effects Free',
      desc: 'Turn photos into pencil sketches, colour pencil drawings, cartoons, oil paintings, posters or line art. Adjust strength and compare. No upload.',
      card: 'Turn photos into sketches, cartoons and paintings.',
      intro: 'Turn a photo into art. Choose pencil sketch, colour pencil, cartoon, oil painting, posterize or line art, adjust the sliders, drag to compare with the original and download the full-size picture. Your photo never leaves your device.',
      steps: ['Choose or drop a photo.', 'Pick an effect: pencil sketch, colour pencil, cartoon, oil painting, posterize or line art.', 'Move the sliders and drag across the picture to compare with the original.', 'Choose JPG, PNG or WebP and press Download artwork.'],
      faq: [
        ['Which effects are there?', 'Pencil sketch, colour pencil, cartoon, oil painting, posterize and line art. Each has two sliders, and "Effect amount" blends with the original photo.'],
        ['Does it use AI?', 'No. The effects are classic image filters running in your browser, so they are fast and work offline.'],
        ['What size is the result?', 'The same size as your photo, up to about 8 megapixels. Larger photos are saved at about 8 megapixels so phones do not run out of memory.'],
        ['Which photos work best?', 'Clear, well-lit photos with a simple background. Portraits, pets and buildings look great as sketches and line art.'],
        ['Is my photo uploaded?', 'No. Everything happens on your device.']
      ],
      icon: '<path d="M3 21l3.5-1 12-12a2.1 2.1 0 0 0-3-3l-12 12z"/><path d="M14 6l3 3M14 21h7"/>'
  },
  {
      slug: 'exif-remover', cat: 'Image tools', name: 'EXIF Remover',
      title: 'EXIF Remover - View & Remove Photo Metadata and GPS Location',
      desc: 'See hidden photo data such as camera, date and GPS location, then remove all metadata without losing quality. Batch clean and ZIP. No upload.',
      card: 'See and remove hidden photo data like GPS location.',
      intro: 'Photos hide extra data: the camera, the date and often the exact place they were taken. See what your photos contain, then remove it all before you share them. JPG, PNG and WebP are cleaned without changing a single pixel. Nothing is uploaded.',
      steps: ['Choose or drop one or more photos.', 'Read what each photo contains, including any GPS location.', 'Press Remove metadata and download, or Clean all and download ZIP.', 'Share the clean copies instead of the originals.'],
      faq: [
        ['What is EXIF data?', 'Extra information saved inside a photo by the camera or phone: make and model, date and time, settings like exposure and ISO, and often GPS coordinates of where it was taken. Editing apps add more, such as XMP and comments.'],
        ['Does removing it lower the quality?', 'No. JPG, PNG and WebP files are cleaned by removing the data blocks only, so the picture itself is not re-compressed. Other formats are saved as a fresh PNG.'],
        ['Will my phone photos end up sideways?', 'No. If a photo uses the rotation setting, a tiny block with only the rotation is kept, so it still shows the right way up. It holds no personal information.'],
        ['What about the colour profile?', 'It is kept by default because it holds no personal data and keeps colours correct. Untick the box to remove it too.'],
        ['Are my photos uploaded?', 'No. They are read and cleaned in your browser.']
      ],
      icon: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><path d="M9 7l6 6M15 7l-6 6"/>'
  },
  {
      slug: 'svg-to-png', cat: 'Image tools', name: 'SVG to PNG Converter',
      title: 'SVG to PNG Converter - SVG to JPG at Any Size, PNG to SVG',
      desc: 'Convert SVG to sharp PNG, JPG or WebP at any size, or paste SVG code. Second tab turns PNG or JPG logos into SVG vectors. Free, no upload.',
      card: 'SVG to PNG or JPG at any size, and PNG to SVG.',
      intro: 'Turn an SVG file or SVG code into a crisp PNG, JPG or WebP at exactly the size you need, with a see-through or coloured background. The second tab does the opposite: it traces a PNG or JPG logo into a scalable SVG. Nothing is uploaded.',
      steps: ['Choose the SVG → PNG / JPG tab and drop an SVG file or paste SVG code.', 'Pick a scale or an exact width or height, the format and the background.', 'Press Convert and download.', 'For PNG / JPG → SVG, open the second tab, drop a picture, adjust colours and detail, and download the SVG.'],
      faq: [
        ['Will the PNG be sharp?', 'Yes. The SVG is drawn directly at the size you choose, not enlarged from a small picture, so edges stay crisp even at 8× or 4000 px.'],
        ['What is the largest size?', 'Up to 16,000 px on the longest side and about 40 megapixels in total, which is the limit browsers can handle.'],
        ['Why do some parts of my SVG not show?', 'Pictures or fonts linked from the internet inside the SVG are not loaded, for privacy and security. Embed images in the SVG, or convert text to outlines in your design app.'],
        ['How good is PNG to SVG?', 'Tracing works best on logos, icons, signatures and drawings with clear shapes and few colours. Photos become large files with a painted look.'],
        ['Are my files uploaded?', 'No. Converting and tracing happen in your browser.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 16.5l2-3 1.5 2 1.5-2.5 2 3.5z"/>'
  },
  {
      slug: 'favicon-generator', cat: 'Image tools', name: 'Favicon Generator',
      title: 'Favicon Generator - favicon.ico, Apple & Android Icons Free',
      desc: 'Make favicon.ico, apple-touch-icon, Android icons and site.webmanifest from an image, text or emoji. Get the HTML code and a ZIP. No upload.',
      card: 'Make favicon.ico and app icons from an image or text.',
      intro: 'Create every icon a website needs in one go: favicon.ico with 16, 32 and 48 px sizes, PNG favicons, the Apple touch icon, Android icons and the web manifest. Start from your logo, a few letters or an emoji, then copy the ready-made HTML. Nothing is uploaded.',
      steps: ['Choose Image, Text or Emoji and add your logo, letters or emoji.', 'Pick the shape, background colour and padding, and check the previews.', 'Type your website name and theme colour.', 'Download all as a ZIP and paste the HTML code into the head of your pages.'],
      faq: [
        ['What files do I get?', 'favicon.ico (16, 32 and 48 px), favicon-16x16.png, favicon-32x32.png, favicon-48x48.png, apple-touch-icon.png (180 px), android-chrome-192x192.png, android-chrome-512x512.png, site.webmanifest and a text file with the HTML code.'],
        ['Where do I put the files?', 'Unzip them into the main (root) folder of your website, next to your home page, then paste the HTML code into the <head> of every page.'],
        ['Why does the Apple icon have a background?', 'iPhones put black behind see-through icons, so the Apple touch icon always gets a solid background: your colour, or white if you chose see-through.'],
        ['What picture works best?', 'A square logo of at least 512 × 512 px with simple shapes. Fine detail disappears at 16 px, so a single letter or symbol often works better.'],
        ['Is my logo uploaded?', 'No. All icons are made in your browser.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><rect x="6" y="12" width="4" height="4" rx="1"/><path d="M13 13h5M13 16h3"/>'
  },
  {
      slug: 'color-palette-from-image', cat: 'Image tools', name: 'Color Palette from Image',
      title: 'Color Palette from Image - Extract HEX & RGB Colors Free',
      desc: 'Find the main colours in any photo or logo. Get HEX, RGB and HSL codes, copy them or as CSS, pick any pixel and download a palette PNG. No upload.',
      card: 'Find the main colours in a picture, with HEX codes.',
      intro: 'Find the main colours of any photo, logo or screenshot. Choose how many colours you want, copy their HEX or RGB codes, tap the picture to pick any single colour, and download the palette as a PNG. Nothing is uploaded.',
      steps: ['Choose or drop a picture.', 'Pick how many colours to find and how to sort them.', 'Copy any HEX or RGB code, or tap the picture to pick a single colour.', 'Copy all codes or CSS variables, or download the palette PNG.'],
      faq: [
        ['How are the colours found?', 'The tool groups similar pixels together (k-means clustering) and shows the average colour of each group, with the share of the picture it covers.'],
        ['Why do I get fewer colours than I asked for?', 'Shades that look the same are joined, so a flat logo with three colours shows three, not sixteen near-identical shades.'],
        ['Does it ignore transparent parts?', 'Yes. See-through pixels in PNG and WebP pictures are left out.'],
        ['Can I pick the exact colour of one spot?', 'Yes. Tap or click anywhere on the picture to read that pixel\'s HEX and RGB code.'],
        ['Is my picture uploaded?', 'No. The colours are found in your browser.']
      ],
      icon: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.4-1.8-.3-.9.3-1.8 1.3-1.8H17a4 4 0 0 0 4-4c0-5.5-4-10.4-9-10.4z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.5" r="1.2"/>'
  },
  {
      slug: 'round-corners-image', cat: 'Image tools', name: 'Round Corners Image',
      title: 'Round Image Corners Online - Circle Crop, Border & Shadow',
      desc: 'Give pictures rounded corners or crop them to a circle or oval. Add a border and soft shadow, and save a transparent PNG. Free, no upload.',
      card: 'Rounded corners, circle crops, borders and shadows.',
      intro: 'Round the corners of any picture, or crop it into a circle or an oval. Add a coloured border and a soft shadow, and save a PNG with see-through corners, ready for websites, slides and profile pictures. Nothing is uploaded.',
      steps: ['Choose or drop a picture.', 'Pick Rounded corners, Circle or Oval and set the roundness.', 'Add a border and shadow if you like, and choose the background.', 'Choose PNG, WebP or JPG and press Download image.'],
      faq: [
        ['Will the corners be see-through?', 'Yes, when you save as PNG or WebP with "See-through" ticked. JPG cannot be see-through, so it uses the background colour.'],
        ['How do I make a round profile picture?', 'Choose "Circle". The largest circle from the middle is used; for a wide or tall picture, move "Circle position" to centre the face.'],
        ['Does it lower the quality?', 'No. The picture is used at full size (up to about 16 megapixels) and PNG keeps every pixel.'],
        ['What does the shadow do?', 'It adds a soft drop shadow under the picture and makes the canvas a little bigger so the shadow fits.'],
        ['Is my picture uploaded?', 'No. Everything happens in your browser.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="6"/><circle cx="12" cy="12" r="4"/>'
  },
  {
    slug: 'find-and-replace', cat: 'Text tools', name: 'Find and Replace',
    title: 'Find and Replace Text Online - Regex, Match Case, Whole Word',
    desc: 'Find and replace words in any text. Match case, whole words, regular expressions, highlighted matches and a live count. Free and private, in your browser.',
    card: 'Find and replace words in any text, with regex.',
    intro: 'Paste your text, type what to find and what to put instead. Every match is highlighted and counted as you type, and Replace all changes them in one click, with Undo if you change your mind.',
    steps: ['Paste your text or open a text file.', 'Type the word or phrase to find, and what to replace it with.', 'Tick Match case, Whole words only or Use regular expression if you need them.', 'Click Replace all (or step through with Next and Replace this one), then copy or download the text.'],
    faq: [
      ['Does whole word work with accents and other languages?', 'Yes. A word edge is any character that is not a letter, digit or mark in any alphabet, so café, niño, Привет and عربی are matched as whole words correctly.'],
      ['How do I replace line breaks?', 'Tick Read \\n as new line and \\t as tab, then type \\n in Find or Replace with. With regular expressions on, \\n always means a line break.'],
      ['Can I use $1 for groups?', 'Yes, when Use regular expression is ticked: $1, $2 and $<name> insert captured groups and $& inserts the whole match. Without regex, the replacement is inserted exactly as typed.'],
      ['Is there a size limit?', 'No fixed limit. Texts of several megabytes work; the preview highlights the first 200,000 characters but Replace all changes the whole text.'],
      ['Is my text uploaded?', 'No. Searching and replacing happen in your browser and nothing is sent or saved.']
    ],
    icon: '<circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L20 20M7.5 10h5"/>'
  },
  {
    slug: 'sort-lines', cat: 'Text tools', name: 'Sort Lines',
    title: 'Sort Lines Online - A to Z, Numbers, Length, Shuffle',
    desc: 'Sort lines of text A to Z, Z to A, by number, by length or in natural order. Shuffle, reverse, remove duplicates and empty lines. Free, in your browser.',
    card: 'Sort any list A to Z, by number, length or shuffle.',
    intro: 'Paste a list with one item per line and choose how to sort it: alphabetically, by the numbers in each line, by length, in natural order or at random. Duplicates, empty lines and stray spaces can be removed at the same time.',
    steps: ['Paste your list, one item on each line.', 'Choose a sort order, such as A to Z, Numbers or Shuffle.', 'Tick the clean-up options you want, like Remove duplicates.', 'Copy the result or download it as a .txt file.'],
    faq: [
      ['Does it sort accented letters and other alphabets correctly?', 'Yes. Alphabetical sorting follows the rules of your browser\'s language, so É sorts next to E, and Cyrillic, Greek, Arabic-script and other alphabets sort in their natural order.'],
      ['What is natural order?', 'Numbers inside text are compared by value, so item2 comes before item10, and file9 before file10. Plain A to Z would put item10 first.'],
      ['How does sorting by numbers work?', 'The first number in each line is used, including negatives, decimals and thousands separators like 1,234.5. Lines without a number are kept at the end in their original order.'],
      ['Is the shuffle really random?', 'Yes. It uses your browser\'s secure random number generator and a fair Fisher-Yates shuffle, so every order is equally likely.'],
      ['How long can my list be?', 'Hundreds of thousands of lines work. Very long lists are sorted when you click Sort lines instead of while typing.']
    ],
    icon: '<path d="M3 6h10M3 12h7M3 18h4M17 4v16M14 17l3 3 3-3"/>'
  },
  {
    slug: 'remove-extra-spaces', cat: 'Text tools', name: 'Remove Extra Spaces',
    title: 'Remove Extra Spaces and Line Breaks from Text Online',
    desc: 'Remove double spaces, trim lines, delete empty lines, join broken lines, change tabs to spaces and fix invisible spaces. Free, instant and private.',
    card: 'Remove double spaces, empty lines and line breaks.',
    intro: 'Paste messy text, for example from a PDF, email or website, and get clean text instantly. Double spaces, stray tabs, invisible characters and broken lines are fixed as you type.',
    steps: ['Paste your text into the top box.', 'Tick the clean-up options you want, such as Join lines or Remove all empty lines.', 'Check the clean text and the count of removed characters.', 'Copy the clean text or download it as a .txt file.'],
    faq: [
      ['How do I fix text copied from a PDF?', 'Tick Join lines (remove line breaks) and keep Keep paragraphs on. Lines inside each paragraph are joined with a space, and the gaps between paragraphs stay.'],
      ['What are invisible or odd spaces?', 'Characters such as non-breaking spaces, zero-width spaces and byte-order marks that look like nothing but break searches and formulas. They are turned into normal spaces or removed. Joiners needed by emoji and many scripts are kept.'],
      ['Will it change the text inside my lines?', 'Only spaces and line breaks change. Words, punctuation and letters stay exactly as they were, unless you tick Remove spaces before punctuation.'],
      ['Do tabs keep columns lined up?', 'Yes. Change tabs to spaces fills each tab up to the next tab stop of the width you choose, so tables made with tabs stay aligned.'],
      ['Is my text uploaded?', 'No. Everything happens in your browser.']
    ],
    icon: '<path d="M4 7h16M4 12h10M4 17h6"/><path d="M16 15l4 4M20 15l-4 4"/>'
  },
  {
    slug: 'word-frequency-counter', cat: 'Text tools', name: 'Word Frequency Counter',
    title: 'Word Frequency Counter - Most Used Words and Phrases',
    desc: 'Find the most used words and 2 or 3-word phrases in any text. Skip common words, see counts and percentages, and download the list as CSV.',
    card: 'See the most used words and phrases in any text.',
    intro: 'Paste any text to see which words and phrases appear most often, with counts, percentages and a bar chart. Common English words like "the" and "and" can be skipped so the important words stand out.',
    steps: ['Paste your text or open a text file.', 'Choose single words, 2-word or 3-word phrases.', 'Adjust the filters, such as skipping common words or short words.', 'Read the ranked list, then download it as CSV or copy it.'],
    faq: [
      ['Does it work for languages other than English?', 'Yes. Words are found in any alphabet, including accented Latin, Cyrillic, Greek, Arabic, Urdu and Hindi. Chinese, Japanese and Thai, which are written without spaces, are split into words by your browser. The common-word filter is for English only, but you can add your own words to skip.'],
      ['How are phrases counted?', 'Phrases are runs of 2 or 3 words next to each other that do not cross a full stop, comma or line break. A phrase may have a common word in the middle, like "piece of cake", but not at the start or end.'],
      ['What does Share mean?', 'The percentage of all counted words (or phrases) that this word makes up, after filters are applied.'],
      ['Will the CSV open in Excel?', 'Yes. The file is UTF-8 with a marker that tells Excel and other spreadsheet apps to show every alphabet correctly.'],
      ['Is my text uploaded?', 'No. All counting happens in your browser.']
    ],
    icon: '<path d="M4 20V10M9 20V4M14 20v-7M19 20v-11"/>'
  },
  {
    slug: 'morse-code-translator', cat: 'Text tools', name: 'Morse Code Translator',
    title: 'Morse Code Translator - Text to Morse with Sound and Light',
    desc: 'Translate text to Morse code and Morse back to text. Play it as sound, flash a light, adjust speed and tone, and download a WAV file. Free and private.',
    card: 'Translate text and Morse code, with sound and light.',
    intro: 'Type text to get Morse code, or type dots and dashes to read them as text. Press Play to hear it, watch the light flash, or download the sound. Speed and tone are adjustable for practice.',
    steps: ['Type text in the Text box, or dots and dashes in the Morse code box.', 'Set the speed in words per minute and the tone.', 'Press Play to hear and see the code, or Full-screen flash to signal with your screen.', 'Copy the result or download the sound as a .wav file.'],
    faq: [
      ['How do I type Morse code?', 'Use a full stop for a dot and a hyphen for a dash. Put a space between letters and a slash (/) or three spaces between words, for example .... .. / - .... . .-. .'],
      ['Which characters are supported?', 'Letters A to Z, digits, common punctuation (. , ? \' ! / ( ) & : ; = + - _ " $ @) and international letters such as Ä, É, Ñ, Ö and Ü. Other accented letters use their base letter. Characters with no Morse code are listed and left out.'],
      ['What does WPM mean?', 'Words per minute, using the standard word PARIS. At 20 WPM one dot lasts 60 milliseconds. Beginners usually start between 5 and 15 WPM.'],
      ['What is the extra space option?', 'It is the Farnsworth method: letters are sent at full speed but the gaps between letters and words are longer, which makes learning by ear easier.'],
      ['Why is there no sound on my phone?', 'Check that your phone is not on silent mode and the volume is up. On iPhone, the ring/silent switch mutes web audio.']
    ],
    icon: '<circle cx="5" cy="12" r="1.5"/><path d="M9 12h5"/><circle cx="18" cy="12" r="1.5"/><path d="M3 6h18M3 18h18"/>'
  },
  {
    slug: 'json-csv-yaml-converter', cat: 'Developer tools', name: 'JSON CSV YAML Converter',
    title: 'JSON to CSV, CSV to JSON, YAML Converter - Free Online',
    desc: 'Convert between JSON, CSV and YAML in any direction. Flattens nested data into columns and rebuilds it, detects separators, and downloads the result.',
    card: 'Convert JSON, CSV and YAML in any direction.',
    intro: 'Paste or open JSON, CSV or YAML and convert it to any of the other two formats. Nested objects become columns like address.city in CSV and are rebuilt when you convert back. Everything runs in your browser.',
    steps: ['Paste your data, open a file, or press Load sample.', 'Check the From format (it is detected automatically) and choose JSON, CSV or YAML under To.', 'Adjust options such as the CSV separator, JSON indent or flattening.', 'Copy the result or download it as a file.'],
    faq: [
      ['How is nested JSON turned into CSV?', 'Each nested value gets its own column named with dots, such as address.city, and list items get numbered columns like tags.0 and tags.1. Converting that CSV back to JSON rebuilds the nested objects and lists.'],
      ['Which CSV separators are supported?', 'Comma, semicolon, tab and pipe. When reading, the separator is detected from the first line. Quoted values with separators, quotes and line breaks inside them are handled correctly.'],
      ['Why did 00123 stay as text?', 'Values with leading zeros, like postcodes and phone numbers, are kept as text so no digits are lost. Untick Read numbers and true/false in CSV to keep every value as text.'],
      ['Are very large numbers safe?', 'JSON numbers longer than about 15 digits lose precision in any browser. Store long IDs as text (in quotes) to keep them exact.'],
      ['Is my data uploaded?', 'No. Converting happens in your browser and nothing is sent anywhere.']
    ],
    icon: '<path d="M4 4h6v6H4zM14 14h6v6h-6z"/><path d="M14 7h3a3 3 0 0 1 3 3v1M10 17H7a3 3 0 0 1-3-3v-1"/><path d="M18 9l2 2 2-2M6 15l-2-2-2 2"/>'
  },
  {
    slug: 'unix-timestamp-converter', cat: 'Developer tools', name: 'Unix Timestamp Converter',
    title: 'Unix Timestamp Converter - Epoch to Date and Date to Epoch',
    desc: 'Convert Unix epoch timestamps in seconds, milliseconds, microseconds or nanoseconds to dates in UTC, your time zone or any zone, and dates back to epoch.',
    card: 'Convert Unix epoch time to dates and back.',
    intro: 'See the current Unix time live, turn any timestamp into a readable date in UTC, your own time zone or any other zone, and turn a date and time back into a timestamp. A batch box converts whole lists from logs.',
    steps: ['Paste a timestamp, or press Use current time.', 'Read the date in your time zone, UTC, ISO 8601 and other formats, and copy what you need.', 'To go the other way, pick a date, time and time zone to get the timestamp.', 'Paste many timestamps in the list box to convert them all at once.'],
    faq: [
      ['What is a Unix timestamp?', 'The number of seconds since 1 January 1970 at 00:00:00 UTC, also called epoch time or POSIX time. It is the same everywhere in the world, which is why computers use it to store moments in time.'],
      ['Seconds or milliseconds: how does it know?', 'From the number of digits. Today a timestamp in seconds has 10 digits, in milliseconds 13, in microseconds 16 and in nanoseconds 19. You can also choose the unit yourself.'],
      ['What is the year 2038 problem?', 'Old systems store the timestamp in a signed 32-bit number, which runs out on 19 January 2038 at 03:14:07 UTC. The tool warns you when a timestamp is past that point.'],
      ['How are daylight-saving changes handled?', 'Time zones use your browser\'s up-to-date time zone database, so summer time is applied automatically. If you pick a time that is skipped when clocks go forward, the tool tells you.'],
      ['Can I use negative timestamps?', 'Yes. Negative numbers are dates before 1970, for example -86400 is 31 December 1969.']
    ],
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M3 3l3 3M21 3l-3 3"/>'
  },
  {
    slug: 'jwt-decoder', cat: 'Developer tools', name: 'JWT Decoder',
    title: 'JWT Decoder - Decode JSON Web Tokens Online, Privately',
    desc: 'Decode a JWT to read its header and payload, see when it expires, and get each claim explained. Runs in your browser; the token is never sent anywhere.',
    card: 'Decode JSON Web Tokens and check their expiry.',
    intro: 'Paste a JSON Web Token to see its header and payload as readable JSON, whether it has expired, and what each claim such as exp, iat, sub and aud means. The token never leaves your browser. The signature is not verified.',
    steps: ['Paste the token (with or without the word Bearer).', 'Read the expiry badge at the top.', 'Check the header, payload and the claims explained in plain words.', 'Copy the header or payload JSON if you need it.'],
    faq: [
      ['Does this check if the token is genuine?', 'No. It only decodes the token. Anyone can create a token with any content, so the signature must be verified on your server with the correct secret or public key before you trust the data.'],
      ['Is it safe to paste a real token?', 'Decoding happens entirely in your browser and the token is not sent or stored. Still, a valid token works like a password until it expires, so avoid sharing it and prefer expired or test tokens.'],
      ['Why does it say the token is encrypted?', 'Tokens with five parts are encrypted JWE tokens. Their header can be read, but the content needs the private key and cannot be decoded here.'],
      ['What do exp, iat and nbf mean?', 'exp is when the token expires, iat when it was issued, and nbf the time before which it must not be accepted. They are Unix timestamps in seconds and are shown as dates in your time zone.'],
      ['Which algorithms are recognised?', 'All common ones: HS256/384/512, RS256/384/512, PS256/384/512, ES256/384/512 and EdDSA. Tokens with alg none are flagged because they are not signed.']
    ],
    icon: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M8 15h.01M12 15h.01M16 15h.01"/>'
  },
  {
    slug: 'code-minifier', cat: 'Developer tools', name: 'Code Minifier & Beautifier',
    title: 'Minify and Beautify HTML, CSS and JavaScript Online',
    desc: 'Minify HTML, CSS and JavaScript to make files smaller, or beautify minified code to make it readable. Uses Terser for JavaScript. Free and private.',
    card: 'Minify or beautify HTML, CSS and JavaScript.',
    intro: 'Paste HTML, CSS or JavaScript and press Minify to remove spaces, comments and long names so the file loads faster, or Beautify to turn minified code back into neatly indented code. The language is detected for you.',
    steps: ['Paste your code or open a .html, .css or .js file.', 'Leave the language on Auto or pick HTML, CSS or JavaScript.', 'Press Minify for a smaller file, or Beautify for readable code.', 'Check the size saved, then copy or download the result.'],
    faq: [
      ['Is minified JavaScript safe to use?', 'Yes. JavaScript is minified with Terser, the same tool used by most website build systems. It only makes changes that keep the code working. If your code has a syntax error, it tells you the line and column instead.'],
      ['What does Shorten variable names do?', 'It renames local variables and function parameters to short names like a and b, which saves a lot of space. Global names and object properties are never renamed, so other scripts keep working.'],
      ['What is removed from HTML?', 'Comments and the spaces between tags that the browser ignores. Text inside pre and textarea is kept exactly, and spaces between inline words are kept so the page looks the same. Inline CSS and JavaScript are minified too.'],
      ['Why keep licence comments?', 'Comments that start with /*! usually hold a copyright or licence notice that must stay with the code. Untick the option to remove them as well.'],
      ['Is my code uploaded?', 'No. Minifying and beautifying run in your browser.']
    ],
    icon: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/><path d="M11 12h2"/>'
  },
  {
    slug: 'sql-formatter', cat: 'Developer tools', name: 'SQL Formatter',
    title: 'SQL Formatter - Beautify SQL for MySQL, PostgreSQL and More',
    desc: 'Format messy SQL into clean, indented queries for MySQL, PostgreSQL, SQL Server, Oracle, SQLite, BigQuery and 15 more dialects. Or compact it to one line.',
    card: 'Format SQL queries for 20 database dialects.',
    intro: 'Paste a long or messy SQL query and get it back neatly indented, with keywords in the case you like. Choose your database dialect so its special syntax is understood, or compact a query to a single line.',
    steps: ['Paste your SQL, open a .sql file, or press Load sample.', 'Choose your database under SQL dialect.', 'Pick keyword case, indent and layout; the result updates instantly.', 'Copy the formatted SQL or download it as a .sql file.'],
    faq: [
      ['Which databases are supported?', 'Standard SQL, MySQL, MariaDB, PostgreSQL, SQLite, SQL Server (T-SQL), Oracle PL/SQL, BigQuery, Snowflake, Redshift, ClickHouse, DuckDB, Db2, Db2 for i, Hive, Spark SQL, Trino/Presto, TiDB, SingleStore and Couchbase N1QL.'],
      ['Why does it say Could not format?', 'The query uses syntax the chosen dialect does not know, such as [square bracket] names outside SQL Server, or it has a typo. Pick your database under SQL dialect, then check the line and column in the message.'],
      ['Does formatting change what my query does?', 'No. Only spaces, line breaks and the letter case of keywords change. Strings, quoted names and comments stay exactly as written.'],
      ['What does Compact to one line do?', 'It removes line breaks and extra spaces so the query fits on one line, for example for a log or a config file. Line comments (--) become /* */ comments so the rest of the query is not commented out.'],
      ['Is my SQL sent to a server?', 'No. Formatting runs in your browser with the open-source sql-formatter library.']
    ],
    icon: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3M15 17h6M15 20h4"/>'
  },
  {
    slug: 'meta-tag-generator', cat: 'Developer tools', name: 'Meta Tag Generator',
    title: 'Meta Tag Generator - SEO, Open Graph and X Card Preview',
    desc: 'Create SEO title, description, Open Graph and X (Twitter) card meta tags with a live Google and social media preview. Copy the HTML in one click.',
    card: 'Make SEO and social meta tags with live previews.',
    intro: 'Fill in your page title, description, link and share image to get ready-to-paste meta tags for search engines and social media. Live previews show how your page will look in Google results and when shared on Facebook, LinkedIn, WhatsApp and X.',
    steps: ['Type your page title and description.', 'Add the page URL, site name and a share image link.', 'Check the Google and social previews and the list of checks.', 'Copy the HTML and paste it inside the <head> of your page.'],
    faq: [
      ['How long should the title and description be?', 'Aim for 30 to 60 characters for the title, since Google cuts titles at about 600 pixels, and 70 to 160 characters for the description. The counters turn green when you are in range.'],
      ['What size should the share image be?', '1200 × 630 pixels (a 1.91:1 ratio) works for Facebook, LinkedIn, WhatsApp and X large cards. The tool loads your image and tells you its real size.'],
      ['What are Open Graph tags?', 'og: tags are read by Facebook, LinkedIn, WhatsApp, Telegram, Slack, Discord and many other apps to build the preview card when someone shares your link.'],
      ['Will these tags improve my ranking?', 'A good title and description help people choose your result and make shared links more attractive. They do not guarantee a higher ranking, which mainly depends on your content.'],
      ['Why do social apps still show my old preview?', 'They cache previews. After changing the tags, use the platform\'s sharing debugger (for example the Facebook Sharing Debugger or LinkedIn Post Inspector) to refresh it.']
    ],
    icon: '<path d="M4 7V4h16v3M9 20h6M12 4v16"/><path d="M17 13l3 3-3 3M7 13l-3 3 3 3"/>'
  },
  {
    slug: 'utm-builder', cat: 'Developer tools', name: 'UTM Builder',
    title: 'UTM Builder - Campaign URL Builder with QR Code',
    desc: 'Build campaign links with utm_source, utm_medium and utm_campaign tags for any analytics tool. Presets for social, email and ads, plus a QR code. Free.',
    card: 'Build tracked campaign links with a QR code.',
    intro: 'Add UTM tags to any link so your analytics tool shows exactly which post, email, ad or poster brought each visitor. Pick a preset, type a campaign name, and copy the link or download it as a QR code.',
    steps: ['Paste the web page you want to link to.', 'Pick a preset such as Instagram bio or Email newsletter, or fill in source and medium yourself.', 'Type a campaign name and, if you like, term and content.', 'Copy the finished link, test it, or download the QR code.'],
    faq: [
      ['What are UTM tags?', 'Short labels added to the end of a link, like ?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale. Analytics tools such as Google Analytics, Matomo, Plausible and many others read them to show where visitors came from.'],
      ['Which fields do I need?', 'Source (where the link is placed, like facebook or newsletter), medium (the type of channel, like social, email or cpc) and campaign (your promotion name). Term, content and ID are optional extras.'],
      ['Why make everything lower case?', 'Analytics tools treat Facebook and facebook as two different sources. Using lower case and the same words every time keeps reports clean.'],
      ['What happens to parameters already in my link?', 'They are kept. Only old utm_ values are replaced, and anything after # stays at the end where it belongs.'],
      ['Is my data stored?', 'The last 10 links you copy are kept in your own browser so you can copy them again. They are never uploaded; press Clear recent links to remove them.']
    ],
    icon: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/><path d="M18 17v4M16 19h4"/>'
  },
  {
    slug: 'cron-generator', cat: 'Developer tools', name: 'Cron Expression Generator',
    title: 'Cron Expression Generator and Explainer - Next Run Times',
    desc: 'Build cron schedules with simple menus, explain any cron expression in plain English, and see the next 5 run times in your time zone or UTC.',
    card: 'Build and explain cron schedules, see next runs.',
    intro: 'Create a cron expression by picking minutes, hours, days and months, or paste one to read it in plain English. The next five run times are listed in your own time zone or in UTC, so you can be sure a job runs when you expect.',
    steps: ['Pick a preset, type an expression, or build one step by step.', 'Read the plain-English explanation.', 'Check the next 5 run times in your time or UTC.', 'Copy the expression into your crontab, CI pipeline or scheduler.'],
    faq: [
      ['What do the five fields mean?', 'In order: minute (0-59), hour (0-23), day of the month (1-31), month (1-12 or JAN-DEC) and day of the week (0-7 or SUN-SAT, where 0 and 7 are both Sunday). * means every value.'],
      ['What do */5, 1-5 and 1,15 mean?', '*/5 means every 5th value (every 5 minutes), 1-5 is a range (Monday to Friday), and 1,15 is a list (the 1st and 15th). They can be combined, like 0-30/10.'],
      ['Why does my job run on more days than expected?', 'When both day of the month and day of the week are set, standard cron runs the job when either one matches, not only when both do. The explanation points this out.'],
      ['Does it support seconds and @daily?', 'Yes. Six fields are read as seconds first (as in many job libraries), and shortcuts like @hourly, @daily, @weekly, @monthly, @yearly and @reboot are explained. Quartz extras such as L, W and # are not part of standard cron and are flagged.'],
      ['Which time zone does cron use?', 'The time zone of the server where it runs, often UTC. Switch Next 5 runs to UTC to check a server schedule, or to My time to see it in your local time.']
    ],
    icon: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3"/><path d="M19 5l1.5-1.5"/>'
  },
  {
      slug: 'resume-maker', cat: 'Generators', name: 'Resume Maker',
      title: 'Free Resume Maker - CV Builder with PDF Download',
      desc: 'Build a professional resume or CV with 5 templates, including an ATS-friendly one. Live preview, autosave, real text PDF and print. Free and private.',
      card: 'Build a CV with 5 templates and download a PDF.',
      intro: 'Fill in your details section by section and watch your CV take shape in a live preview. Pick one of five clean templates, including a plain ATS-friendly one, then download a real text PDF or print it. Your work is saved on this device as you type.',
      steps: ['Fill in your contact details, then add your experience, education, skills and any other sections you need.', 'Choose a template, colour, font, text size and A4 or US Letter paper.', 'Check the live preview and the tips under it. Tap a page to see it larger.', 'Press Download PDF or Print. Use Save backup file to keep a copy you can open on another device.'],
      faq: [
        ['Is this resume maker really free?', 'Yes. There is no sign-up, no watermark and no paywall on the PDF. You can make as many CVs as you like.'],
        ['Is the PDF readable by applicant tracking systems (ATS)?', 'Yes. The PDF contains real, selectable text, not a picture. For online job portals, the ATS simple template is the safest choice: one column, standard headings and no photo or graphics.'],
        ['Is my information uploaded anywhere?', 'No. Everything runs in your browser. Your CV is saved only in this browser on this device, and you can save a backup file to move it elsewhere.'],
        ['Should I use A4 or US Letter?', 'Use US Letter for jobs in the United States and Canada, and A4 almost everywhere else. The tool picks the usual size for your region, and you can change it.'],
        ['Should I add a photo?', 'It depends on the country. In the US, UK, Canada and Australia, CVs usually have no photo. In much of Europe, the Middle East and Asia a photo is common. The ATS template always hides it.'],
        ['Can I write my CV in another language?', 'Yes. Headings can be renamed and any language works in the PDF. Arabic, Urdu, Hebrew, Hindi, Bengali, Tamil and Thai are real text with their own font, loaded only when you use them; Chinese, Japanese, Korean and emoji are added as sharp pictures.']
      ],
      icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="9" cy="8" r="2"/><path d="M6.5 13a3 3 0 0 1 5 0M14 7h3M14 10h3M7 16h10M7 19h7"/>'
  },
  {
      slug: 'email-signature-generator', cat: 'Generators', name: 'Email Signature Generator',
      title: 'Email Signature Generator - Free for Gmail & Outlook',
      desc: 'Make a professional HTML email signature with photo, logo, social links and a button. Copy it into Gmail, Outlook or Apple Mail in one click.',
      card: 'Make an email signature for Gmail and Outlook.',
      intro: 'Type your details, pick one of five layouts and a colour, and copy a ready-made signature that pastes straight into Gmail, Outlook, Apple Mail and most other email apps. Step-by-step instructions for each app are below the preview.',
      steps: ['Type your name, job, company and contact details.', 'Add a photo or logo link, social links and an optional button.', 'Choose a layout, colour, font and size.', 'Press Copy signature and paste it into your email settings, following the steps for your app.'],
      faq: [
        ['Which email apps does it work with?', 'Gmail, Outlook (web, new app and classic desktop), Apple Mail, Thunderbird, Yahoo Mail and most others that accept a pasted or HTML signature. Phone apps often only take plain text.'],
        ['Why does my photo not show in Gmail?', 'Gmail and some versions of Outlook remove pictures that are stored inside the signature. Upload your photo to your website or an image host and paste its https:// link instead.'],
        ['Is it free?', 'Yes, with no sign-up and no "made with" branding added to your signature.'],
        ['Are my details uploaded?', 'No. The signature is built in your browser and saved only on this device.'],
        ['Can I edit the HTML?', 'Yes. Press "Copy HTML code" or open "Show the HTML code" and change it in any editor. The code uses simple tables and inline styles that email apps understand.']
      ],
      icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/><path d="M13 17c1.5-1.5 2.5-1 3 0s1.5 1.5 3-1"/>'
  },
  {
      slug: 'business-card-maker', cat: 'Generators', name: 'Business Card Maker',
      title: 'Business Card Maker - Print-Ready PDF with Bleed & QR',
      desc: 'Design a business card front and back with your logo and a QR code, then download a print-ready PDF with bleed, a home printing sheet or PNG.',
      card: 'Design business cards and get a print-ready PDF.',
      intro: 'Type your details, add your logo and pick from six designs. Your card gets a QR code that saves your contact details, and you can download a print-shop PDF with 3 mm bleed and crop marks, a sheet of 10 cards for home printing, or PNG pictures.',
      steps: ['Type your name, job, company and contact details, and add your logo.', 'Pick a template, colour, font, card size and what the QR code holds.', 'Check the front and back in the preview.', 'Download the PDF for a print shop or for home printing, or save each side as a PNG.'],
      faq: [
        ['What size are the cards?', 'Choose 85 × 55 mm (Europe and most countries), 3.5 × 2 in (US and Canada), 90 × 55 mm (Australia, India and China) or 91 × 55 mm (Japan).'],
        ['What is bleed and do I need it?', 'Bleed is extra background beyond the cut line, so no white edge shows if the cutter is slightly off. Print shops usually ask for 3 mm (about 1/8 inch). The print-shop PDF includes it and marks the trim size.'],
        ['What does the QR code do?', 'By default it holds a contact card (vCard). When someone scans it, their phone offers to save your name, phone, email and website. You can also make it open your website or any text you choose.'],
        ['Can I print the cards at home?', 'Yes. Choose "Print at home" to get 10 cards on A4 or US Letter with cut marks. Print the fronts, turn the sheet over and print the backs at 100% scale.'],
        ['Is it free and private?', 'Yes. It is free with no watermark, and everything, including your logo, stays on your device.']
      ],
      icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16a3 3 0 0 1 5 0M14 10h4M14 13h4M14 16h2"/>'
  },
  {
      slug: 'certificate-maker', cat: 'Generators', name: 'Certificate Maker',
      title: 'Certificate Maker - Free Certificates with Batch PDF',
      desc: 'Make certificates of achievement, participation, appreciation or completion. Paste a list of names to get one page per person in a single PDF.',
      card: 'Make certificates for a whole list of names.',
      intro: 'Choose what the certificate is for, pick a design and colour, and add your logo and signatures. Paste a list of names and download one PDF with a certificate for each person, or save any one as a picture.',
      steps: ['Choose the certificate type and edit the title and wording.', 'Paste the names, one per line, and add your organisation and date.', 'Add up to two signatures, typed or as pictures, and choose a design.', 'Download the PDF with one page per name, or save one certificate as a PNG.'],
      faq: [
        ['How many names can I add?', 'Up to 500. Each name gets its own page in the same PDF, ready to print or email.'],
        ['Can I use a real signature?', 'Yes. Take a photo or scan of a signature on white paper and add it. The white background is removed automatically. Otherwise the name is written in an elegant script font.'],
        ['Which paper sizes are there?', 'A4 and US Letter, in landscape or portrait.'],
        ['Can I change the wording?', 'Yes. Every line can be edited. Type {name} in the description to repeat the person\'s name there.'],
        ['Is it free?', 'Yes, with no watermark and no sign-up. Logos and signatures stay on your device.']
      ],
      icon: '<rect x="3" y="4" width="18" height="13" rx="1"/><path d="M7 8h10M8 11h8"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5 10 22l2-1 2 1-.5-2.5"/>'
  },
  {
      slug: 'card-maker', cat: 'Generators', name: 'Card Maker',
      title: 'Card Maker - Birthday, Wedding & Invitation Cards',
      desc: 'Make greeting cards and invitations for birthdays, weddings, parties, thank-yous and more. Add a photo, then download a PNG or print-ready PDF.',
      card: 'Make greeting cards and invitations to share or print.',
      intro: 'Pick an occasion and the headline and message fill in for you. Change the words, choose decorations, colours and a font, add a photo if you like, and download a picture to share or a PDF to print.',
      steps: ['Choose an occasion, such as Birthday, Party invite, Wedding or Thank you.', 'Edit the headline and message, and for invitations add the date, place and RSVP.', 'Pick decorations, colours, a font, a size and an optional photo.', 'Download a PNG to share or a PDF to print.'],
      faq: [
        ['What occasions are included?', 'Birthday, party invitation, wedding, thank you, congratulations, festive greetings, new baby, anniversary and get well soon. You can write anything you like for any other occasion.'],
        ['Can I use it for religious festivals?', 'Yes. The "Festive greetings" card has neutral wording by default. Type your own greeting, such as Eid Mubarak, Merry Christmas, Happy Diwali or Happy Lunar New Year.'],
        ['What size should I choose?', 'Square or Story for WhatsApp, Instagram and other apps; 5 × 7 in, A5 or 7 × 5 in to print and fold or post.'],
        ['Is my photo uploaded?', 'No. The card is made in your browser and your photo never leaves your device.'],
        ['Is it free?', 'Yes, with no watermark and no sign-up.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 9.5c-1.2-1.8-4-1-3.5 1.2.4 1.6 3.5 3.8 3.5 3.8s3.1-2.2 3.5-3.8c.5-2.2-2.3-3-3.5-1.2z"/>'
  },
  {
      slug: 'business-name-generator', cat: 'Generators', name: 'Business Name Generator',
      title: 'Business Name Generator - Brand & Domain Name Ideas',
      desc: 'Get business name ideas from your keywords and industry, in brandable, professional, fun or short styles, with matching .com and other domain ideas.',
      card: 'Get brand name ideas with domain suggestions.',
      intro: 'Type a few words about your business, pick your industry and a style, and get 48 name ideas at a time. Each name shows matching web addresses with the endings you choose. Tap to copy, star the ones you like and keep a shortlist.',
      steps: ['Type one to three keywords about your business.', 'Choose your industry, a style and the longest name you want.', 'Tick the domain endings to show, such as .com, .co.uk or .ca.', 'Press Generate names, tap a name to copy it and star your favourites.'],
      faq: [
        ['Does it check if a domain or name is available?', 'No. It suggests web addresses as text only. Check them with a domain registrar, and search your country\'s business and trademark registers before you decide.'],
        ['Which domain endings are included?', 'Global endings such as .com, .net, .org, .io, .co, .app, .shop, .store and .online, plus country endings such as .co.uk, .ca, .com.au, .de, .fr, .in, .pk, .ae, .ng, .za and .com.br.'],
        ['What do the styles mean?', 'Brandable makes new invented words; Professional adds words like Partners or Studio; Fun uses playful twists; Short keeps to one word.'],
        ['Where are my favourites kept?', 'In this browser on this device. Use Copy favourites to keep them somewhere else.']
      ],
      icon: '<path d="M4 20V9l8-5 8 5v11"/><path d="M9 20v-6h6v6"/><path d="M17 3l.6 1.4L19 5l-1.4.6L17 7l-.6-1.4L15 5l1.4-.6z"/>'
  },
  {
      slug: 'color-palette-generator', cat: 'Generators', name: 'Color Palette Generator',
      title: 'Color Palette Generator - Harmonies, Locks & Gradients',
      desc: 'Generate color palettes from random, complementary, analogous or triadic rules. Lock colors, copy HEX and CSS, and build CSS gradients.',
      card: 'Make color palettes and CSS gradients.',
      intro: 'Press Generate or the space bar for a new palette. Choose a colour rule, start from your own colour and lock the shades you like. Copy HEX codes or CSS variables, save palettes, and turn any palette into a CSS gradient.',
      steps: ['Choose a colour rule and how many colours you want.', 'Press Generate, or the space bar, until you like what you see. Lock colours to keep them.', 'Tap a code to copy it, or copy the whole palette as CSS or HEX.', 'Open the Gradient tab to build a gradient and copy its CSS.'],
      faq: [
        ['What do the colour rules mean?', 'Complementary uses opposite colours on the colour wheel; analogous uses neighbours; triadic and square use three or four evenly spaced hues; monochrome uses shades of one hue.'],
        ['How do I keep a colour I like?', 'Tap the lock on it. Locked colours stay when you generate again.'],
        ['Can I start from my brand colour?', 'Yes. Type its HEX code in "Start from colour" and the palette is built around it.'],
        ['Can I use the colours in my website?', 'Yes. Copy CSS gives you ready-made CSS variables, and the Gradient tab gives a background line you can paste in.'],
        ['Where are saved palettes kept?', 'In this browser on this device.']
      ],
      icon: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.9-.6-1.3-.6-2.1 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4c0-4.9-4-8.8-9-8.8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>'
  },
  {
      slug: 'multiplication-table-generator', cat: 'Study tools', name: 'Multiplication Table Generator',
      title: 'Multiplication Table Generator - Charts, Worksheets & Quiz',
      desc: 'Show times tables from 1 to 100, a multiplication chart, printable worksheets with answer keys, and a practice quiz with scores and streaks.',
      card: 'Times tables, printable worksheets and a quiz.',
      intro: 'See any times table from 1 to 100, highlight rows on a multiplication chart, print worksheets with an answer key, or practise in a quick quiz that tracks your score, streak and the facts you missed.',
      steps: ['Choose Tables, Chart, Worksheet or Practice at the top.', 'Pick the tables and how far to multiply, for example 1 to 12.', 'Print the tables, chart or worksheet, or start a practice round.', 'In Practice, type each answer and press Check; your score and missed facts show at the end.'],
      faq: [
        ['Which tables can I show?', 'Any table from 1 to 100, multiplied up to 10, 12, 15, 20, 25 or 30. Up to 50 tables show at once.'],
        ['Does the worksheet come with answers?', 'Yes. Print gives the worksheet on page 1 and the answer key on page 2. You can also show answers on screen.'],
        ['What question types are there?', 'Find the answer (3 × 4 = __), missing number (3 × __ = 12), division (12 ÷ 3 = __), or a mix.'],
        ['Is it good for young children?', 'Yes. Start with the 2, 5 and 10 tables, short 10-question rounds and no timer, then add more tables.'],
        ['Is it free?', 'Yes, with no sign-up. Everything runs in your browser.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/><path d="M13 13l4 4M17 13l-4 4"/>'
  },
  {
      slug: 'long-division-calculator', cat: 'Study tools', name: 'Long Division Calculator',
      title: 'Long Division Calculator - Step by Step with Remainders',
      desc: 'Divide any numbers with long division shown step by step, the way it is taught in school. Remainders, decimals, repeating decimals and explanations.',
      card: 'See long division worked out step by step.',
      intro: 'Type the number to divide and the number to divide by. The tool writes out the long division just like on paper, in the bus stop or European layout, and explains every step: divide, multiply, subtract and bring down.',
      steps: ['Type the dividend (the number to divide) and the divisor.', 'Choose an answer with a remainder or with decimals.', 'Pick the layout you learned at school.', 'Read the written working and the numbered steps underneath.'],
      faq: [
        ['What is the difference between a remainder and a decimal answer?', 'With a remainder, you stop at whole numbers: 1000 ÷ 7 = 142 remainder 6. With decimals, you keep dividing by adding zeros: 142.857…'],
        ['Can it divide decimals?', 'Yes. If the divisor has decimals, both numbers are multiplied by 10, 100 and so on until the divisor is whole, just as taught in school. The answer stays the same.'],
        ['What is a repeating decimal?', 'Some answers never end, like 1 ÷ 3 = 0.333… When a remainder comes back, the digits repeat. The tool spots this and marks the repeating digits with a line.'],
        ['Which layout should I use?', 'The bus stop layout is used in the US, UK, India, Pakistan, Australia and many other countries. Much of Europe writes dividend : divisor = answer with the working below.'],
        ['How big can the numbers be?', 'Up to 22 digits for the dividend and 10 for the divisor.']
      ],
      icon: '<path d="M5 12h14"/><circle cx="12" cy="6.5" r="1.5"/><circle cx="12" cy="17.5" r="1.5"/>'
  },
  {
      slug: 'scientific-notation-converter', cat: 'Study tools', name: 'Scientific Notation Converter',
      title: 'Scientific Notation Converter - E, Engineering & Sig Figs',
      desc: 'Convert numbers to and from scientific notation, E notation and engineering notation with SI prefixes. Round to significant figures and count them.',
      card: 'Convert to scientific and engineering notation.',
      intro: 'Type a number in any form, such as 0.000452, 6.02 × 10^23 or 3.1e-7, and see it in scientific, E, engineering and standard form at once. Round to the significant figures you need and see which digits are significant.',
      steps: ['Type or paste a number in normal or scientific form.', 'Choose how many significant figures to keep.', 'Copy the result in the format you need.', 'Check the highlighted significant figures in what you typed.'],
      faq: [
        ['What is scientific notation?', 'A way to write very big or small numbers as a number between 1 and 10 multiplied by a power of ten. For example, 45,000 is 4.5 × 10⁴ and 0.0032 is 3.2 × 10⁻³.'],
        ['What is engineering notation?', 'Like scientific notation, but the power of ten is always a multiple of 3, so it matches SI prefixes such as kilo (10³), mega (10⁶) and micro (10⁻⁶).'],
        ['How do significant figures work?', 'All non-zero digits count. Zeros between them count. Leading zeros never count. Trailing zeros count only when there is a decimal point, such as 45.00.'],
        ['What formats can I type?', '0.000452, 4.52e-4, 4.52E-4, 4.52 × 10^-4, 4.52x10^-4, 4.52 × 10⁻⁴, 10^6 and numbers with thousands separators.'],
        ['Does it round correctly?', 'Yes. It works on the digits themselves, not on computer floating point, so there are no rounding errors. 5 and above rounds up.']
      ],
      icon: '<path d="M3 10l5 5M8 10l-5 5"/><path d="M11 9.5 12.5 8v8"/><rect x="14.5" y="8" width="4" height="8" rx="2"/><path d="M18.5 3.5h2.5l-2.5 3H21"/>'
  },
  {
      slug: 'word-scramble', cat: 'Study tools', name: 'Word Scramble',
      title: 'Word Scramble Game - Unscramble Words with Hints',
      desc: 'Play word scramble with 11 categories, 3 difficulty levels, hints, timed rounds and best scores. Add your own word lists for spelling practice.',
      card: 'Unscramble words by category, with hints.',
      intro: 'Unscramble the letters to find the hidden word. Pick a category and difficulty, then tap letters or type your answer. Use hints when you are stuck, build streaks and beat your best score. Teachers can add their own word lists.',
      steps: ['Choose a category, difficulty and round length.', 'Press Start game.', 'Tap the letters in order or type the word, then press Check.', 'Use Hint, Shuffle or Skip when you are stuck, and try to beat your best score.'],
      faq: [
        ['How are points scored?', 'Each solved word is worth 10 points per letter, minus 5 for each hint, with at least 5 points per word.'],
        ['Can I use my own words?', 'Yes. Choose "My own words" and type or paste a list, such as this week\'s spelling words.'],
        ['What do the difficulty levels mean?', 'Easy uses words with 3 to 5 letters, medium 5 to 7, and hard 8 or more.'],
        ['Is my best score saved?', 'Yes, in this browser on this device.'],
        ['Does it work on phones?', 'Yes. Tap the big letter tiles, or type with the keyboard.']
      ],
      icon: '<rect x="3" y="7" width="5" height="5" rx="1"/><rect x="10" y="4" width="5" height="5" rx="1"/><rect x="16" y="10" width="5" height="5" rx="1"/><path d="M4 18h16M6 15l-2 3 2 3"/>'
  },
  {
      slug: 'youtube-tag-generator', cat: 'Social media tools', name: 'YouTube Tag Generator',
      title: 'YouTube Tag Generator - Free Tags from Your Title',
      desc: 'Generate YouTube tags from your video title and keywords, pick the best ones and stay under the 500-character limit with a live counter. Free.',
      card: 'Make YouTube tags from your title, within 500 chars.',
      intro: 'Type your video title and choose the type of video. The tool finds the main topic and builds main tags, related phrases and broad tags, picks a strong starting set, and counts characters the way YouTube does so you stay under 500.',
      steps: ['Type your video title, plus any extra keywords.', 'Choose the type of video, such as tutorial, review or gaming.', 'Press Generate tags, then tap tags to add or remove them.', 'Press Copy tags and paste them into the Tags box in YouTube Studio.'],
      faq: [
        ['How many characters can YouTube tags have?', '500 in total. Commas between tags count, and a tag with spaces counts 2 extra characters because YouTube stores it in quotes. The counter follows these rules.'],
        ['Do tags still matter?', 'YouTube says tags play a small role, mostly for common misspellings and alternative names. Your title, description and thumbnail matter more, but good tags do no harm.'],
        ['Where do I paste the tags?', 'In YouTube Studio, open the video\'s details, click "Show more" and paste into Tags. They are added one by one at each comma.'],
        ['Does it use YouTube data or paid tools?', 'No. It works out tags from your own words with built-in patterns, entirely in your browser.'],
        ['Can I add my own tags?', 'Yes. Type them in the box and press Add, separated by commas if you have several.']
      ],
      icon: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>'
  },
  {
      slug: 'instagram-caption-generator', cat: 'Social media tools', name: 'Instagram Caption Generator',
      title: 'Instagram Caption Generator - Captions & Bio Ideas',
      desc: 'Get Instagram captions and bio ideas by mood and topic, with emojis and hashtags. Ten ideas at a time, character counts and one-tap copy. Free.',
      card: 'Instagram captions and bios by mood and topic.',
      intro: 'Choose a topic and a mood, add what your post is about, and get ten caption ideas with emojis and hashtags. Switch to Bio for short profile bios that fit Instagram\'s 150-character limit.',
      steps: ['Pick Captions or Bio.', 'Choose a topic and mood, and type what the post is about.', 'Set the amount of emojis, hashtags and the ending.', 'Press Generate, then tap Copy on the one you like.'],
      faq: [
        ['How long can an Instagram caption be?', 'Up to 2,200 characters and 5 hashtags. Only the first line or two show before "more", so start strong.'],
        ['How long can an Instagram bio be?', '150 characters. Each bio idea shows its length, and long ones are marked.'],
        ['How many hashtags should I use?', 'Instagram allows up to 5 on a post or Reel. Pick specific, relevant ones rather than very general tags.'],
        ['Does it use AI or send my words anywhere?', 'No. Ideas come from a built-in library of templates, mixed with your words, entirely in your browser.'],
        ['Can I use these captions on other apps?', 'Yes. They work on TikTok, Facebook, Threads and other apps too; check each app\'s limits.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M7 15h7M7 11h10M7 7h4"/>'
  },
  {
      slug: 'youtube-title-checker', cat: 'Social media tools', name: 'YouTube Title Checker',
      title: 'YouTube Title Checker - Length, Keyword & Preview',
      desc: 'Check your YouTube title and description: length, keyword position, hashtags and chapters, with a live preview of how the title gets cut off.',
      card: 'Check titles and see where YouTube cuts them.',
      intro: 'Type your video title, main keyword and description. You get a score, clear checks and a live preview of how the title looks on phones, in search, in suggested videos and on the watch page, including exactly where it gets cut off.',
      steps: ['Type your title and the main keyword people would search for.', 'Paste your description.', 'Read the score and the checks, and fix anything marked with ! or ✕.', 'Switch the preview between phone, search, suggested and watch page to see where the title is cut.'],
      faq: [
        ['How long can a YouTube title be?', '100 characters. On most screens about 60 to 70 show before the title is cut off, so put the important words first.'],
        ['How long can the description be?', '5,000 characters. Only the first two or three lines show before "more".'],
        ['How many hashtags can I use?', 'If a description has more than 15 hashtags, YouTube ignores all of them. The first three can show above the title.'],
        ['How do chapters work?', 'Start a list of timestamps with 0:00, include at least three, and make each chapter at least 10 seconds long.'],
        ['Is the preview exact?', 'It is a close guide using YouTube\'s usual font sizes and widths. Real devices and window sizes vary a little.']
      ],
      icon: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h6M6 8h8M6 11h5"/><path d="m15.5 18.5 2 2 4-4"/>'
  },
  {
      slug: 'tiktok-caption-counter', cat: 'Social media tools', name: 'TikTok Caption Counter',
      title: 'TikTok Caption Counter - Characters, Hashtags & Preview',
      desc: 'Count TikTok caption characters, hashtags, mentions and emojis against the 4,000 limit, and preview how your caption looks on a video before "more".',
      card: 'Count caption characters and preview it on a video.',
      intro: 'Type or paste your caption to count characters, hashtags, mentions, words and emojis against TikTok\'s limit. A phone preview shows the caption over a video, cut after two lines like in the app, with tips to improve it.',
      steps: ['Type or paste your caption.', 'Check the counters and the bar against the limit.', 'Look at the phone preview to see what shows before "more".', 'Follow the tips, then copy the caption.'],
      faq: [
        ['How long can a TikTok caption be?', 'Up to 4,000 characters for video captions in current versions of the app. Some older apps and tools still use 2,200, so you can check against that too.'],
        ['How are characters counted?', 'Each letter, space, line break, hashtag sign and emoji counts. Emojis made of several parts, like family or flag emojis, count as one, as you see them.'],
        ['How many hashtags should I use?', 'There is no fixed rule. Three to five specific, relevant hashtags usually work better than a long list.'],
        ['Why did my hashtag break?', 'Hashtags stop at spaces and punctuation, so #self-care becomes #self. Write #selfcare.'],
        ['Is my caption saved?', 'Only in this browser, so you can come back to it. Nothing is uploaded.']
      ],
      icon: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M9 14h6M9 17h4M11 5h2"/>'
  },
  {
    slug: 'online-keyboard', cat: 'Text tools', name: 'Online Keyboard (All Languages)',
    title: 'Online Keyboard for 49 Languages - Virtual Keyboard, Free',
    desc: 'Type in Arabic, Hindi, Russian, Greek, Korean, Japanese, Thai, Hebrew, Vietnamese and 40 more languages with an on-screen keyboard. Copy or download.',
    card: 'Type in 49 languages with an on-screen keyboard.',
    intro: 'Type in almost any language without installing anything. Pick a keyboard from the list, then tap the on-screen keys or use your computer keys, which are mapped to the chosen language. Korean letters join into syllables, Japanese romaji becomes kana, and accent keys add marks to any letter.',
    steps: ['Find your language in the list (it starts with your browser\'s language).', 'Type with your computer keys or tap the on-screen keys; Shift and AltGr give more characters.', 'Use the accent keys or special-letter keys above the keyboard when you need them.', 'Copy your text or download it as a .txt file.'],
    faq: [
      ['Which languages are included?', 'Arabic, Persian, Urdu, Pashto, Hindi, Marathi, Nepali, Bengali, Punjabi, Gujarati, Tamil, Telugu, Russian, Ukrainian, Bulgarian, Serbian, Kazakh, Greek, Hebrew, Georgian, Armenian, Thai, Korean, Japanese, Amharic, Vietnamese, Chinese Pinyin, Turkish, Azerbaijani, Spanish, French, German, Portuguese, Italian, Polish, Czech, Romanian, Hungarian, Swedish, Norwegian, Danish, Icelandic, Dutch, Swahili, Yoruba, Hausa, Igbo and English.'],
      ['How do my computer keys type another alphabet?', 'Each key position is mapped to the chosen language\'s standard layout (for example ЙЦУКЕН for Russian, InScript for Indian languages, Kedmanee for Thai, 2-set for Korean), whatever layout your computer uses. The small Latin letter on each on-screen key shows which key to press.'],
      ['How do I type accents like é, ñ or ş?', 'Tap an accent key (´ ` ^ ¨ ~ ˇ and more), then a letter. Most Latin languages also have a row of their special letters, and AltGr (right Alt) with a letter gives common accented letters. You can also turn on accent keys for your own keyboard: \' then e gives é.'],
      ['How do Korean, Japanese and Vietnamese work?', 'Korean jamo join into syllable blocks as you type. For Japanese, type romaji (konnichiha) and it turns into hiragana or katakana. For Vietnamese, Telex typing turns aa into â, dd into đ and s f r x j into tone marks; tone buttons are on screen too.'],
      ['Is my text saved or uploaded?', 'No. Your text stays in your browser. Only your last chosen keyboard is remembered on this device.']
    ],
    icon: '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 15h8"/><circle cx="18" cy="3.5" r="2.5"/>'
  },
  {
      slug: 'subtitle-generator', cat: 'Media tools', name: 'Subtitle Generator',
      title: 'AI Subtitle Generator - Video to SRT Free, No Upload',
      desc: 'Make subtitles from a video or audio file with Whisper AI in your browser. Auto language detection, editable captions, SRT, VTT and TXT, burn-in. No upload.',
      card: 'Auto-caption videos with AI, then edit and export SRT.',
      intro: 'Turn the speech in a video or recording into timed subtitles. Whisper, an open-source speech recognition model, runs inside your browser, so your file is never uploaded. Fix any words, then download SRT, VTT or text, or burn the captions into the video.',
      steps: ['Click the box or drop a video or audio file onto it.', 'Choose the spoken language or leave it on Detect automatically, and pick Fast or Better accuracy.', 'Press Generate subtitles and watch the captions appear.', 'Fix words or times, then download SRT, VTT or text, or make a video with the subtitles burned in.'],
      faq: [
        ['Is my video uploaded?', 'No. The speech model is downloaded to your browser once and the recognition happens on your device, so your file never leaves it.'],
        ['Which languages work?', 'Whisper understands about 100 languages, including English, Spanish, French, German, Portuguese, Hindi, Urdu, Arabic, Bengali, Chinese, Japanese, Indonesian and Swahili. Accuracy is best for widely spoken languages with clear audio; use Better accuracy for others.'],
        ['How long does it take?', 'With the Fast model a typical computer needs about 10 to 30 seconds per minute of speech; Better is about twice as slow, and phones are slower. The first use also downloads the model (41 or 77 MB).'],
        ['Can it translate the subtitles?', 'Yes, into English: set Subtitles in to English (translate). For other target languages, download the text and use the Offline Translator.'],
        ['Can I put the subtitles into the video?', 'Yes. Make video with subtitles draws the captions onto the picture and saves an MP4. It re-encodes the whole video on your device, so it can take one to three times the video length.'],
        ['Why are some words wrong?', 'Speech recognition makes mistakes with names, noise, music, strong accents and several people talking at once. Click into any caption to correct it before downloading.']
      ],
      icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 12h4M12 12h6M6 15.5h8M16 15.5h2"/>'
  },
  {
      slug: 'noise-remover', cat: 'Media tools', name: 'Noise Remover',
      title: 'Remove Background Noise from Audio & Video - Free, No Upload',
      desc: 'Clean fan hum, traffic, wind and room noise from voice recordings and videos with RNNoise AI in your browser. Compare before and after, save MP3, WAV or video.',
      card: 'Clean background noise from voice recordings.',
      intro: 'Remove steady background noise such as fans, hum, traffic and room echo from speech. The open-source RNNoise model cleans the sound on your device; compare before and after, then save it as MP3, WAV or a video with clean sound.',
      steps: ['Click the box or drop a voice recording or a video onto it.', 'Press Remove noise.', 'Press Play and switch between Before and After; adjust Strength and the pauses setting until it sounds right.', 'Choose MP3, WAV or video, press Make, then Download.'],
      faq: [
        ['Is my recording uploaded?', 'No. The noise remover runs in your browser with WebAssembly, so the sound never leaves your device.'],
        ['What kind of noise does it remove?', 'Steady and everyday noise behind a voice: fans, air conditioning, computer hum, traffic, wind, keyboard clicks and room noise. It cannot remove other voices or music without affecting the speaker.'],
        ['Can I use it for music?', 'It is designed for speech. On music it removes too much and the result sounds thin.'],
        ['What does Strength do?', 'At 100% you hear only the cleaned sound. Lower values mix some of the original back in, which sounds more natural when the noise was light.'],
        ['Can I clean the sound of a video?', 'Yes. Drop an MP4, MOV, WebM or MKV video and choose Video with the cleaned sound. The picture is copied as it is, so it stays sharp and saving is quick.'],
        ['How long can the recording be?', 'Up to 1 hour. It cleans roughly 30 to 60 seconds of sound per second on a computer.']
      ],
      icon: '<path d="M2 12h2l2-5 3 10 3-14 3 12 2-6 2 3h3"/>'
  },
  {
      slug: 'vocal-remover', cat: 'Media tools', name: 'Vocal Remover',
      title: 'Vocal Remover - Make Karaoke & Acapella Online Free',
      desc: 'Remove the vocals from a song to make a karaoke track, or isolate the voice for an acapella. AI separation runs in your browser. Save MP3 or WAV. No upload.',
      card: 'Split a song into karaoke music and vocals.',
      intro: 'Split a song into the music without the singer (karaoke or instrumental) and the vocals alone (acapella). The open-source Spleeter AI model runs on your device; a quick centre-cut method is also included. Results depend on the song.',
      steps: ['Click the box or drop a song onto it.', 'Keep AI separation (best) or choose Quick centre cut.', 'Press Separate vocals, then play Music only, Vocals only and Original to compare.', 'Choose the track and format, press Make file, then Download.'],
      faq: [
        ['Is my song uploaded?', 'No. The AI model downloads to your browser once (about 54 MB) and the separation happens on your device.'],
        ['How good is the result?', 'For most studio songs the voice becomes much quieter or disappears, but traces and echoes of the voice can remain, and some instruments may sound slightly watery. Live recordings and songs with heavy reverb are harder.'],
        ['What is the difference between the two methods?', 'AI separation uses Spleeter, a model trained to tell voices from instruments, and works on most songs, even mono ones. Quick centre cut removes only what is exactly in the middle of a stereo mix; it is instant but works on fewer songs.'],
        ['Can I get just the vocals?', 'Yes. Choose Vocals only (acapella) under Track to save. It is approximate: some drums or instruments can leak in.'],
        ['How long can the song be?', 'Up to 10 minutes. A 4-minute song usually takes under a minute on a computer and a few minutes on a phone.'],
        ['Can I use the result commercially?', 'The tool itself places no limits, but the song still belongs to its rights holders. Use karaoke tracks of other people’s songs only where you have the right to.']
      ],
      icon: '<path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M19 11a7 7 0 0 1-12.2 4.7M5 11a7 7 0 0 0 .4 2.3M12 18v3M3 3l18 18"/>'
  },
  {
      slug: 'offline-translator', cat: 'Text tools', name: 'Offline Translator',
      title: 'Offline Translator - Private Text Translation in Your Browser',
      desc: 'Translate text on your own device: Chrome’s built-in translator or free offline models for English with Spanish, French, German, Hindi and Urdu. No upload.',
      card: 'Translate text privately, on your own device.',
      intro: 'Translate text without sending it to a server. The tool uses the translator built into Chrome where available, and otherwise downloads small open-source Firefox Translations models that keep working offline.',
      steps: ['Choose the From and To languages, or press ⇄ to swap them.', 'Type or paste your text.', 'Press Translate (or Ctrl + Enter). The first time, the language downloads once.', 'Copy the translation or download it as a text file.'],
      faq: [
        ['Is my text sent anywhere?', 'No. Both engines run on your device. Only the language model itself is downloaded, once, and after that translation works offline.'],
        ['Which languages can I translate?', 'In Chrome 138 or newer on a computer, the built-in translator covers many languages, such as Spanish, French, German, Portuguese, Hindi, Bengali, Arabic, Chinese, Japanese, Korean, Russian and Turkish. In other browsers, the offline models cover English with Spanish, French, German, Hindi and Urdu, and pairs among them through English.'],
        ['Why is a language pair not available?', 'Your browser has no built-in translator for that pair and there is no offline model for it here. Try Chrome on a computer, or translate through English in two steps.'],
        ['How big are the downloads?', 'Each offline model is 15 to 26 MB, plus a 5 MB engine the first time. Chrome’s language packs are downloaded and managed by Chrome itself.'],
        ['How accurate is it?', 'Good for everyday text, emails and articles, but machine translation can make mistakes. Have important legal, medical or official text checked by a person.'],
        ['Is there a length limit?', 'Up to 50,000 characters at a time. Long text is translated paragraph by paragraph, and the paragraphs are kept.']
      ],
      icon: '<path d="M4 5h8M8 3v2M10 5c-.5 3-2.5 6-6 8M6 9c1 2 3 3.5 5 4"/><path d="M13 21l4-10 4 10M14.5 17.5h5"/>'
  },
  {
      slug: 'document-scanner', cat: 'PDF tools', name: 'Document Scanner',
      title: 'Document Scanner - Scan Paper to PDF with Your Phone',
      desc: 'Turn phone photos of paper into straight, clean scans. Automatic edge detection, black & white or colour, many pages, one PDF. Free, no upload.',
      card: 'Scan paper to a clean PDF with your camera.',
      intro: 'Take photos of letters, receipts, forms or notes and get straight, clean scans. The page edges are found for you, the perspective is corrected and the paper is made white, then all pages are saved as one PDF. Your photos never leave your device.',
      steps: ['Tap Take a photo, or upload photos of your pages.', 'Check the blue outline and drag the corners onto the page if needed.', 'Pick a look: Colour, Grey, Black & white or Original, and add more pages.', 'Choose the page size and press Download PDF or Download JPG.'],
      faq: [
        ['Are my documents uploaded?', 'No. The pages are found, straightened and cleaned in your browser. Nothing is sent to a server, so it is safe for private papers.'],
        ['What if the edges are not found?', 'Drag the four round handles onto the corners of the page. A magnifier helps you place them exactly. Photos taken on a dark, plain surface are detected most reliably.'],
        ['Which look should I choose?', 'Black & white gives crisp text and small files, like a photocopy. Colour keeps stamps, logos and blue ink while making the paper white. Grey is in between, and Original leaves the photo as it is.'],
        ['Can I scan several pages into one PDF?', 'Yes. Add as many pages as you need (up to 100), change their order with the arrows, and Download PDF saves them all in one file.'],
        ['What page size will the PDF have?', 'A4, Letter, or the same shape as the scan. Each page is turned to portrait or landscape to match the scan.'],
        ['Does it work on iPhone and Android?', 'Yes. Take a photo opens your phone camera. On a computer it can use your webcam, or you can upload photos.']
      ],
      icon: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7h8v10H8z"/><path d="M3 12h18"/>'
  },
  {
      slug: 'signature-cleaner', cat: 'Image tools', name: 'Signature Cleaner',
      title: 'Signature Cleaner - Transparent PNG Signature from Photo',
      desc: 'Turn a photo of your handwritten signature into a clean transparent PNG. Remove the paper, change the ink colour, crop and copy. Free, no upload.',
      card: 'Photo of your signature to a transparent PNG.',
      intro: 'Sign on paper, take a photo and get a clean signature with a see-through background, ready to put on PDFs, letters and invoices. Shadows and paper are removed on your device, and you can make the ink black, blue or any colour.',
      steps: ['Sign on white paper with a dark pen and take a clear photo.', 'Drop the photo on the box. The paper is removed automatically.', 'Adjust the ink sensitivity, smoothness, ink colour and size.', 'Press Download PNG or Copy image, then use it in Sign PDF.'],
      faq: [
        ['Is my signature uploaded?', 'No. The photo is cleaned in your browser and never sent anywhere.'],
        ['How do I use it to sign a PDF?', 'Download the PNG and add it as an image in our Sign PDF tool. The transparent background means it sits neatly on the signature line.'],
        ['Why are parts of my signature missing?', 'The pen may be too faint for the light. Move Ink sensitivity to the right, or sign again with a darker, thicker pen.'],
        ['Can I make the signature blue?', 'Yes. Choose Blue, keep the pen\'s own colour with Original, or pick any colour with Custom.'],
        ['Is a signature image legally valid?', 'It depends on your country and the document. Many everyday documents accept an image signature, but some contracts need a certified digital signature. Check with whoever asked for it.']
      ],
      icon: '<path d="M3 17c3-1 4-9 6-9s1 8 3 8 2-4 4-4 1 3 5 3"/><path d="M3 21h18"/>'
  },
  {
      slug: 'face-blur', cat: 'Image tools', name: 'Face Blur',
      title: 'Blur Faces in Photos - Automatic Face Blur, Free & Private',
      desc: 'Automatically find and blur faces in photos, or cover them with pixels or emoji. Toggle faces, add boxes, batch many photos. Runs on your device.',
      card: 'Find and hide faces in photos automatically.',
      intro: 'Hide the faces of people in your photos before you share them. A small AI face finder runs in your browser and covers every face with a blur, pixels, an emoji or a solid colour. Tap faces to keep them visible, draw extra boxes, and process many photos at once.',
      steps: ['Drop one or more photos on the box. Faces are found automatically.', 'Choose Blur, Pixels, Emoji or Solid colour, and the strength and size.', 'Tap a face to keep it visible, or draw a box over anything that was missed.', 'Download each photo, or all of them in a ZIP.'],
      faq: [
        ['Are my photos uploaded?', 'No. The face finder is downloaded to your browser once and runs on your device. Your photos are never sent anywhere.'],
        ['Does it find every face?', 'It finds most faces, from close-ups to small faces in crowds, but very small, blurred, side-on or partly hidden faces can be missed. Always check, and draw a box over any face it missed.'],
        ['Can the blur be removed later?', 'No. The blur and mosaic are made from a shrunken copy of the face, so the detail is not in the saved photo. For the strongest privacy choose Pixels or Solid colour.'],
        ['Can I keep some faces visible?', 'Yes. Tap a face to switch its cover off; it shows a red dashed outline and stays visible in the saved photo.'],
        ['Is the location data removed?', 'Yes. Saved photos are drawn again from scratch, so camera and GPS details (EXIF) are not included.'],
        ['How many photos can I do at once?', 'Up to 100. Use Download all (ZIP) to save them together.']
      ],
      icon: '<circle cx="12" cy="10" r="5"/><path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/><path d="M9 8h0M12 8h0M15 8h0M9 11h0M12 11h0M15 11h0" stroke-width="2.5" stroke-linecap="round"/>'
  },
  {
      slug: 'photo-colorizer', cat: 'Image tools', name: 'Photo Colorizer',
      title: 'Colorize Black and White Photos Free - AI Photo Colorizer',
      desc: 'Add colour to black and white photos with AI in your browser. Two colour styles, strength control, full-size download. Free, private, no upload.',
      card: 'Add colour to black and white photos with AI.',
      intro: 'Bring old black and white photos to life. An AI model guesses natural colours for skies, skin, plants and more and paints them onto your photo at full size. It runs on your device, so family photos stay private.',
      steps: ['Choose a colour style: Natural or Vivid.', 'Drop a black and white photo on the box and wait a few seconds.', 'Drag across the photo to compare, and adjust the colour strength.', 'Press Download JPG or Download PNG.'],
      faq: [
        ['Is my photo uploaded?', 'No. The AI model is downloaded to your browser and colours the photo on your device.'],
        ['Are the colours the real ones?', 'No. The AI makes an educated guess from millions of colour photos it learned from. Skies, plants and skin are usually convincing; clothes, cars and painted objects may differ from reality.'],
        ['How big is the download?', 'About 15 MB for the AI engine plus 32 to 34 MB for each colour style, only the first time. Your browser keeps them for next time.'],
        ['Does it keep the full resolution?', 'Yes. The colour is added to your original photo, so the saved file has the same size and detail as your scan.'],
        ['What is the difference between Natural and Vivid?', 'They are two different AI models. Natural gives softer, realistic colours; Vivid gives stronger, warmer colours. Try both on your photo.']
      ],
      icon: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.3A4.7 4.7 0 0 0 21 9.8C21 6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>'
  },
  {
      slug: 'color-blindness-simulator', cat: 'Image tools', name: 'Colour Blindness Simulator',
      title: 'Color Blindness Simulator - See Images as Colorblind People',
      desc: 'See how an image looks with protanopia, deuteranopia, tritanopia or achromatopsia. Side-by-side, slider and all-types views. Free, runs in your browser.',
      card: 'See images the way colour-blind people do.',
      intro: 'Check how your photos, charts, maps and designs look to people with colour blindness. Pick a type and strength and compare it with normal vision side by side, with a slider, or all types at once, using the accepted Machado (2009) model.',
      steps: ['Drop an image on the box or paste a screenshot.', 'Choose the type of colour blindness and the strength.', 'Switch between Side by side, Slider and All types.', 'Download the simulated image or a labelled comparison.'],
      faq: [
        ['How accurate is the simulation?', 'It uses the Machado, Oliveira and Fernandes (2009) model, which is widely used in research and accessibility tools. It is a good approximation, but each person\'s colour vision is a little different.'],
        ['What do the names mean?', 'Protan is red-blind, deutan is green-blind and tritan is blue-blind. At 100% (the -opia forms) one type of cone is missing; lower strengths show the milder, more common -anomaly forms. Achromatopsia means seeing no colour.'],
        ['Which type is the most common?', 'Deuteranomaly, a mild green weakness, affects about 5 in 100 men. In total around 1 in 12 men and 1 in 200 women have some colour vision deficiency.'],
        ['Is my image uploaded?', 'No. The simulation runs in your browser.'],
        ['How do I make my design colour-blind friendly?', 'Do not rely on colour alone: add labels, icons, patterns or different line styles, and avoid red against green. Then check again here.']
      ],
      icon: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/><path d="M12 9v6"/>'
  },
  {
      slug: 'before-after-slider', cat: 'Image tools', name: 'Before and After Slider',
      title: 'Before and After Image Slider Maker - Embed, GIF, Video',
      desc: 'Compare two images with a draggable slider. Get HTML embed code, a side-by-side image or an animated GIF or video wipe. Free, no upload, no sign-up.',
      card: 'Compare two images with a drag slider.',
      intro: 'Put a before and an after image on top of each other with a divider you can drag. Then copy a ready-to-paste embed code for your website, or download a side-by-side image or an animated GIF or video. Your images stay on your device.',
      steps: ['Add the before image and the after image.', 'Set the labels, the direction and how different sizes are matched.', 'Drag the divider in the preview to check it.', 'Create the embed code, a side-by-side image, or a GIF or video.'],
      faq: [
        ['How do I put the slider on my website?', 'Press Create embed code, copy it and paste it into an HTML or custom code block. The code contains both images and a tiny script, so it needs no other files.'],
        ['Are my images uploaded?', 'No. Everything is made in your browser. The images are only inside the code or files you download.'],
        ['What if the two images are different sizes?', 'The first image sets the shape. The second is cropped to match, or fitted inside with bars if you prefer.'],
        ['Can I share it on social media?', 'Yes. Make an animated GIF or a video in which the divider sweeps across by itself, or download a side-by-side image.'],
        ['Does the slider work on phones?', 'Yes. It works with a finger, a mouse and the keyboard arrow keys.']
      ],
      icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 2v20"/><path d="M9 10l-2 2 2 2M15 10l2 2-2 2"/>'
  },
  {
      slug: 'sticker-maker', cat: 'Image tools', name: 'Sticker Maker',
      title: 'Sticker Maker - Photo to WhatsApp & Telegram Stickers, Free',
      desc: 'Turn photos into 512 × 512 stickers: the subject is cut out, given a white outline, shadow and text. WebP under 100 KB for WhatsApp, PNG for Telegram. Private.',
      card: 'Turn photos into chat stickers with an outline.',
      intro: 'Make your own chat stickers from photos of friends, pets or anything else. An AI cut-out removes the background on your device, then adds a white sticker outline, a soft shadow and optional text. Stickers are saved at 512 × 512 pixels, as WebP files under 100 KB for WhatsApp or as PNG for Telegram, one at a time or all together in a ZIP.',
      steps: ['Drop one photo or up to 30. The subject of each one is cut out automatically.', 'Choose the outline width and colour, the shadow and the edge softness.', 'Tap a sticker to add text such as "LOL" or "Thank you!", in a font and colour you like.', 'Pick WhatsApp or Telegram and download the selected sticker or all of them as a ZIP.'],
      faq: [
        ['Are my photos uploaded?', 'No. The cut-out AI is downloaded to your browser once and runs on your device. Your photos never leave it.'],
        ['How do I add the stickers to WhatsApp?', 'WhatsApp only takes stickers through a sticker-pack app or its built-in sticker creator. Save the WebP files to your phone, then import them with a sticker-pack app of your choice (most need at least 3 stickers and a 96 × 96 tray icon, which this tool also makes).'],
        ['How do I add them to Telegram?', 'Send the PNG or WebP files to Telegram\'s official sticker bot (@Stickers) and follow its steps to create a new pack.'],
        ['Why is my sticker not under 100 KB?', 'The tool lowers the WebP quality until the file fits. Very detailed photos may still be larger; the message tells you, and a smaller outline or simpler photo helps.'],
        ['Why did I get a PNG instead of WebP?', 'Safari on iPhone and Mac cannot create WebP files. Open the page in Chrome, Edge or Firefox to make WebP stickers.'],
        ['Can I use a logo or drawing?', 'Yes. Choose "Whole picture" to skip the AI cut-out. See-through PNGs keep their shape and still get the outline.']
      ],
      icon: '<path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6z"/><path d="M12 20a8 8 0 0 0 8-8h-5a3 3 0 0 0-3 3z"/><circle cx="9" cy="10" r="1"/><path d="M8 14.5c1 .8 2 .8 3 .3"/>'
  },
  {
      slug: 'text-behind-image', cat: 'Image tools', name: 'Text Behind Image',
      title: 'Text Behind Image - Put Text Behind a Person or Object, Free',
      desc: 'Place big text behind the main subject of a photo, the popular poster look. AI cut-out on your device, fonts, colour, rotation, shadow. Save PNG or JPG.',
      card: 'Place text behind the person in a photo.',
      intro: 'Create the eye-catching "text behind the subject" effect used on posters, thumbnails and social posts. The tool finds the main subject of your photo with an on-device AI, puts your text on the background and lays the cut-out subject back on top, so the words look like they sit behind the person or object. Pick a font, size, colour, rotation and shadow, drag the text into place and save at full resolution.',
      steps: ['Drop a photo with a clear main subject, such as a person, pet, car or building.', 'Type your text and choose the font, size, colour, opacity and letter spacing.', 'Drag the text on the picture, or use the position and rotation sliders. Add a shadow or outline if you like.', 'Download a full-size PNG or JPG.'],
      faq: [
        ['Is my photo uploaded?', 'No. The AI model is downloaded to your browser once and the whole effect is made on your device.'],
        ['Why is part of the text hidden?', 'That is the effect: the subject covers the text where they overlap. Move the text up or make it bigger so enough of it shows above or around the subject.'],
        ['The subject was not found properly. What can I do?', 'Switch to Best quality, which handles busy backgrounds, hair and thin parts much better. Photos with one clear subject against a simple background work best.'],
        ['What size is the saved picture?', 'The same size as your photo, up to 16 megapixels. Bigger photos are scaled down to that size so they work on phones.'],
        ['Can I use my own fonts?', 'The tool includes seven fonts, from bold poster letters to elegant script, that work in every browser without installing anything.']
      ],
      icon: '<path d="M3 6V4h11v2M8.5 4v12"/><circle cx="16" cy="12" r="3"/><path d="M11 21c.6-3 2.6-5 5-5s4.4 2 5 5"/>'
  },
  {
      slug: 'device-mockup', cat: 'Image tools', name: 'Device Mockup Generator',
      title: 'Device Mockup Generator - Screenshot in Phone or Laptop Frame',
      desc: 'Put a screenshot inside a phone, tablet, laptop, monitor, watch or browser frame. Gradient background, shadow and angle. Download PNG. Free and private.',
      card: 'Show screenshots inside phone and laptop frames.',
      intro: 'Present your app, website or design inside a clean, generic device frame. Drop a screenshot and choose a phone, tablet, laptop, desktop monitor, smartwatch or browser window, then pick a device colour, background, shadow and angle. The frames are simple, brand-free drawings, so the mockups suit any portfolio, store listing, slide or social post.',
      steps: ['Drop, paste or pick a screenshot. A matching device is chosen for you.', 'Choose the device, orientation, colour and how the screenshot fits the screen.', 'Set the background colour or gradient, the angle, the shadow and the space around.', 'Pick the picture shape and width, then download PNG or JPG.'],
      faq: [
        ['Is my screenshot uploaded?', 'No. The mockup is drawn in your browser and your screenshot never leaves your device.'],
        ['Do the frames show any brand?', 'No. All devices are simple generic drawings made by this tool, without logos or trademarked designs, so you can use them freely.'],
        ['My screenshot is cut off. Why?', 'Phones, tablets and laptops have a fixed screen shape, so the screenshot fills it and the extra part is cut. Choose "Show the whole screenshot" to see all of it with bars, or use the Browser frame, which adapts to any shape.'],
        ['Can I get a see-through background?', 'Yes. Set Background to Transparent and download PNG.'],
        ['What size is the picture?', 'Choose 1080, 1600, 2400 or 3600 pixels wide, with a shape that fits the device or square, 4:5, 16:9 or 9:16 for social media.']
      ],
      icon: '<rect x="2" y="4" width="14" height="10" rx="1.5"/><path d="M1 17h16"/><rect x="17" y="8" width="5" height="11" rx="1.2"/>'
  },
  {
      slug: 'pixel-art-maker', cat: 'Image tools', name: 'Pixel Art Maker',
      title: 'Pixel Art Maker - Draw Pixel Art and Animated GIFs Online',
      desc: 'Draw pixel art on an 8 to 128 pixel grid with palettes, fill and mirror. Turn a photo into pixels, animate frames and export PNG or GIF. Free, no sign-up.',
      card: 'Draw pixel art and sprites, export PNG or GIF.',
      intro: 'Draw retro pixel art, game sprites, icons and emoji right in your browser. Pick a grid from 8 × 8 to 128 × 128, choose colours from ready-made palettes, and use the pencil, eraser, fill bucket, colour picker and mirror drawing. Turn any photo into pixel art, add animation frames, and export a crisp PNG at up to 32× size or an animated GIF. Your drawing is kept in your browser between visits.',
      steps: ['Choose the grid width and height and a colour palette.', 'Draw with the pencil, fill areas, and turn on mirror drawing for symmetric sprites. Undo and redo any step.', 'Optionally import a picture to pixelate it, or add frames for an animation.', 'Pick the export size and download a PNG, a sprite sheet or an animated GIF.'],
      faq: [
        ['Will I lose my drawing if I close the page?', 'No. It is saved in this browser automatically and comes back when you return. It is not uploaded anywhere, so it stays on this device only.'],
        ['How do I make an animated GIF?', 'Press New frame or Duplicate to add frames, draw each step, set the speed, then press Download GIF. Turn on "Show previous frame faintly" to line things up.'],
        ['Why does the PNG look blurry somewhere else?', 'Some apps smooth small images when they enlarge them. Export at 16× or 32× so the pixels stay sharp everywhere.'],
        ['Are see-through pixels supported?', 'Yes. Erased pixels are transparent in both PNG and GIF.'],
        ['Can I turn a photo into pixel art?', 'Yes. Press Import picture. The photo is shrunk to your grid; tick "use only the colours in the palette" for a retro look.']
      ],
      icon: '<path d="M4 4h4v4H4zM8 8h4v4H8zM12 4h4v4h-4zM16 8h4v4h-4zM4 16h4v4H4zM12 12h4v4h-4zM16 16h4v4h-4z"/>'
  },
  {
      slug: 'image-to-ascii', cat: 'Image tools', name: 'Image to ASCII Art',
      title: 'Image to ASCII Art Converter - Text Art from Photos, Free',
      desc: 'Turn any picture into ASCII text art. Choose the width, character set, invert and colour HTML output. Copy the text or download TXT, PNG or HTML. Private.',
      card: 'Turn pictures into ASCII text art.',
      intro: 'Convert photos, logos and drawings into ASCII art made of letters and symbols. Choose how many characters wide it should be, pick a character set from simple to detailed, adjust brightness and contrast, and invert it for dark backgrounds. Copy the result into a chat, code comment or README, or download it as plain text, a PNG picture or a coloured HTML page.',
      steps: ['Drop, paste or pick a picture, or try the sample.', 'Set the width in characters and choose a character set.', 'Adjust brightness and contrast, and tick Invert for light text on a dark background.', 'Copy the text, or download it as TXT, PNG or colour HTML.'],
      faq: [
        ['Why does my ASCII art look squashed when I paste it?', 'ASCII art needs a monospaced font, where every character is the same width. Paste it into a code block, a text editor or a chat that supports monospace.'],
        ['What width should I use?', 'About 60 to 80 characters fits chats and code comments. 120 to 200 shows much more detail for PNG or HTML.'],
        ['What does Invert do?', 'Normally dark parts of the picture use dense characters, which suits dark text on a light page. Invert swaps this for light text on a dark background, such as a terminal.'],
        ['Is my picture uploaded?', 'No. The conversion happens entirely in your browser.'],
        ['Can I get colours?', 'Yes. Choose Output: Colour (HTML). Each character keeps the colour of that part of the picture, and you can download it as an HTML page or a PNG.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h2M11 8h6M7 12h6M15 12h2M7 16h3M12 16h5"/>'
  },
  {
      slug: 'image-compare', cat: 'Image tools', name: 'Image Compare',
      title: 'Image Compare - Find Differences Between Two Images Online',
      desc: 'Compare two images and see every difference highlighted, with a slider, side by side view and percentage of changed pixels. Ignore small changes. Private.',
      card: 'Spot the differences between two images.',
      intro: 'Find exactly what changed between two versions of a picture, design or screenshot. The tool compares the images pixel by pixel, colours every changed pixel, and tells you what percentage of the picture is different. Switch between a highlight view, a wipe slider, side by side and a difference map, and use the threshold to ignore tiny changes such as compression noise.',
      steps: ['Drop the original picture on A and the changed one on B (or both at once).', 'Read the percentage and number of changed pixels.', 'Use the threshold to ignore small differences, and pick a highlight colour.', 'Switch views to inspect the changes, then download the view you need.'],
      faq: [
        ['Are my images uploaded?', 'No. Both images are compared in your browser and never leave your device.'],
        ['What does "Ignore small differences" mean?', 'A pixel only counts as changed if a colour channel differs by more than this percentage. 0% counts every tiny change; around 10% hides JPG compression noise; higher values show only big changes.'],
        ['Can I compare images of different sizes?', 'Yes. Image B can be stretched to the size of A, or lined up at the top-left corner. Areas that B does not cover count as different.'],
        ['Is this good for visual testing of websites?', 'Yes. Compare screenshots before and after a change to catch unexpected layout or colour changes.'],
        ['How big can the images be?', 'Up to about 16 megapixels each. Larger images are scaled down before comparing.']
      ],
      icon: '<rect x="2" y="5" width="9" height="14" rx="1.5"/><rect x="13" y="5" width="9" height="14" rx="1.5"/><path d="M16 10l3 3M19 10l-3 3"/>'
  },
  {
      slug: 'image-border', cat: 'Image tools', name: 'Add Border to Image',
      title: 'Add Border to Image - Frames, Polaroid & Instagram Square Fit',
      desc: 'Add a border, frame or padding to photos: colours, gradients, rounded corners, shadow, instant-photo style with caption, or fit square for Instagram. Batch.',
      card: 'Add borders, frames and padding to photos.',
      intro: 'Give your photos a clean border or a frame in seconds. Choose a quick style such as a simple white border, a thin black frame, an instant-photo (Polaroid-style) card with a handwritten caption, a gallery mat, or fit a photo into a square for Instagram without cropping. Fine-tune the border width, colour or gradient, rounded corners, shadow and canvas shape, and process many photos at once.',
      steps: ['Drop one photo or many. The same border is used for all of them.', 'Pick a quick style, or set the border width, fill, frame line, corners and shadow yourself.', 'Choose a canvas shape such as square 1:1 or 4:5 for Instagram, and add a caption if you like.', 'Download the photo, or all photos together in a ZIP.'],
      faq: [
        ['Is anything uploaded?', 'No. The borders are added in your browser, so your photos stay on your device.'],
        ['How do I post a whole photo on Instagram without cropping?', 'Choose the "Fit square for Instagram" style (or Canvas shape: Square or Portrait 4:5). Padding is added around the photo so nothing is cut off, and it is saved 1080 pixels wide.'],
        ['Why are my rounded corners white?', 'JPG cannot store see-through areas. Choose PNG to keep the corners transparent.'],
        ['How is the border width measured?', 'As a percentage of the shorter side of the photo, so the border looks the same on big and small photos.'],
        ['Can I add a border to many photos at once?', 'Yes. Drop up to 100 photos and use Download all (ZIP).']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><rect x="7" y="7" width="10" height="10"/>'
  },
  {
      slug: 'photo-filters', cat: 'Image tools', name: 'Photo Filters',
      title: 'Photo Filters Online - Vintage, Sepia, B&W, Duotone & More',
      desc: 'Apply photo filters online: black and white, sepia, vintage, warm, cool, invert, duotone and more, with intensity, brightness and contrast. Batch, private.',
      card: 'Apply vintage, B&W, sepia and other filters.',
      intro: 'Give your photos a new mood with one tap. Choose from 13 filters, including black and white, sepia, vintage, warm, cool, faded, vivid, noir, dramatic, invert and duotone in your own colours, and set how strong each one is. Fine-tune brightness, contrast and saturation, press and hold to compare with the original, and apply the same look to many photos at once.',
      steps: ['Drop one or more photos, or try the sample.', 'Tap a filter. Each button shows a small preview of your photo.', 'Set the intensity and adjust brightness, contrast and saturation. Press and hold the picture to see the original.', 'Choose JPG, PNG or WebP and download the photo, or all photos as a ZIP.'],
      faq: [
        ['Are my photos uploaded?', 'No. Filters are applied in your browser and your photos stay on your device.'],
        ['What does intensity do?', 'It blends the filter with your original photo. 100% is the full effect, 50% is half way, 0% is the original.'],
        ['How do I make a duotone?', 'Choose Duotone, then pick a colour for the shadows and one for the highlights. Dark parts take the first colour and light parts the second.'],
        ['Does it keep the full resolution?', 'Yes, up to 24 megapixels. Bigger photos are scaled down so they work on phones.'],
        ['Can I apply one filter to many photos?', 'Yes. Drop up to 100 photos; the chosen filter and settings are used for all of them in Download all (ZIP).']
      ],
      icon: '<circle cx="9" cy="9" r="6"/><circle cx="15" cy="9" r="6"/><circle cx="12" cy="15" r="6"/>'
  },
  {
      slug: 'color-contrast-checker', cat: 'Developer tools', name: 'Colour Contrast Checker',
      title: 'Color Contrast Checker - WCAG 2.2 AA & AAA Contrast Ratio',
      desc: 'Check the contrast ratio of text and background colours against WCAG 2.2 AA and AAA, with a live preview, nearest passing colour and colour-blind view.',
      card: 'Check text colour contrast for WCAG AA/AAA.',
      intro: 'Make sure your text is easy to read for everyone. Enter a text colour and a background colour as hex, rgb(), hsl() or a colour name, and see the WCAG 2.2 contrast ratio with pass or fail for AA and AAA, for normal text, large text and icons. A live preview shows real text sizes, the tool suggests the nearest lighter or darker colour that passes, and a colour-blindness preview shows how the pair looks to people with red, green or blue colour blindness.',
      steps: ['Pick or type the text colour and the background colour.', 'Read the contrast ratio and the pass or fail results for AA and AAA.', 'Choose a target level and press Use on a suggested colour to fix a failing pair.', 'Check the colour-blind previews, then copy the CSS.'],
      faq: [
        ['What contrast ratio do I need?', 'WCAG AA needs at least 4.5:1 for normal text and 3:1 for large text and for icons, borders and form controls. AAA needs 7:1 for normal text and 4.5:1 for large text.'],
        ['What counts as large text?', 'At least 24 px (18 pt) regular, or at least 18.67 px (14 pt) bold.'],
        ['How is the ratio calculated?', 'With the WCAG formula (L1 + 0.05) / (L2 + 0.05), where L1 and L2 are the relative luminance of the lighter and darker colour. For example #777777 on white is 4.48:1, just below AA.'],
        ['Why does 4.499 not round up to pass?', 'WCAG does not allow rounding up. The tool shows two decimals but never shows a value that crosses a pass mark when the real ratio is below it.'],
        ['Does it handle see-through colours?', 'Yes. A text colour with transparency (for example #ff000080) is blended with the background first, which is what people actually see.'],
        ['How do the suggestions work?', 'The tool keeps the hue and saturation and finds the closest lighter or darker shade of the text or background colour that reaches your chosen level.']
      ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>'
  },
  {
      slug: 'retirement-calculator',
      cat: 'Finance calculators',
      name: 'Retirement Calculator',
      title: 'Retirement Calculator - How Much Do I Need to Retire?',
      desc: 'Work out how much you need to retire, what your savings will grow to, the gap, the extra to save each month and how long your money lasts. Any currency.',
      card: 'Savings target, gap and how long money lasts.',
      intro: 'Enter your age, savings, monthly saving, expected returns, inflation and the income you want in retirement. See the savings you need, what you are on track for in today\'s money, the extra to save each month and the age your money runs out.',
      steps: [
    'Enter your current age, retirement age and the age to plan until.',
    'Add your savings so far, what you save each month and how fast that grows.',
    'Set expected returns, inflation, the yearly income you want and any pension.',
    'Read the target, shortfall or surplus and the extra to save, then check the chart and table.'
  ],
      faq: [
    [
      'How is the savings target worked out?',
      'Target = (income you want − pension or other income) ÷ withdrawal rate. With 40,000 a year and a 4% rate you need 1,000,000 in today\'s money.'
    ],
    [
      'What is the 4% rule?',
      'A rule of thumb from US studies: withdrawing about 4% of savings in the first year, then raising it with inflation, has historically lasted around 30 years. Many planners now use 3–4%.'
    ],
    [
      'Why show "today\'s money"?',
      'Prices rise, so 1,000,000 in 30 years buys much less than today. Dividing by inflation shows amounts in what they would buy now, which is easier to judge.'
    ],
    [
      'Does it include tax or state pensions?',
      'Tax is not included. Add any state, workplace or other pension in "Pension or other income" in today\'s money.'
    ],
    [
      'Is this financial advice?',
      'No. It is a simple projection with steady returns. Real markets go up and down, so treat the results as a guide and review them every year.'
    ]
  ],
      icon: '<path d="M3 20h18"/><path d="M5 20v-6M10 20v-9M15 20v-6M20 20V8"/><path d="M4 9l5-4 5 3 6-5"/>'
  },
  {
      slug: 'net-worth-calculator',
      cat: 'Finance calculators',
      name: 'Net Worth Calculator',
      title: 'Net Worth Calculator - Assets, Debts and Progress Tracker',
      desc: 'List what you own and what you owe to see your net worth and debt ratio. Save snapshots on your device to track progress over time. Any currency.',
      card: 'Assets minus debts, with a saved history.',
      intro: 'Add what you own (cash, investments, property) and what you owe (mortgage, loans, cards) to see your net worth. Your list and monthly snapshots are saved on this device only, so you can track progress over time.',
      steps: [
    'Pick your currency.',
    'Type the value of each asset and each debt; add or remove rows as needed.',
    'Read your net worth, totals and debt-to-asset ratio.',
    'Save a snapshot now and again to see your progress on the chart.'
  ],
      faq: [
    [
      'What is net worth?',
      'Net worth = everything you own minus everything you owe. A positive number means your assets are worth more than your debts.'
    ],
    [
      'Where is my data stored?',
      'Only in your browser on this device. Nothing is uploaded. "Clear everything" removes it.'
    ],
    [
      'What value should I use for my home or car?',
      'Use what it would sell for today, not what you paid. Online valuation tools and similar listings can help.'
    ],
    [
      'What is the debt-to-asset ratio?',
      'Total debts ÷ total assets × 100. Lower is stronger; above 100% means you owe more than you own.'
    ],
    [
      'Should I include my pension?',
      'Many people do, using the current value on the latest statement. Be consistent from snapshot to snapshot.'
    ]
  ],
      icon: '<path d="M12 3v18"/><path d="M5 7h14"/><path d="M5 7l-3 7a3 3 0 0 0 6 0z"/><path d="M19 7l-3 7a3 3 0 0 0 6 0z"/><path d="M8 21h8"/>'
  },
  {
      slug: 'debt-payoff-calculator',
      cat: 'Finance calculators',
      name: 'Debt Payoff Calculator',
      title: 'Debt Payoff Calculator - Snowball vs Avalanche Planner',
      desc: 'Compare debt snowball and avalanche plans for all your debts. See your debt-free date, total interest, interest saved and a month-by-month schedule.',
      card: 'Snowball vs avalanche, payoff date and schedule.',
      intro: 'List your debts with balance, interest rate and minimum payment, and add any extra you can pay each month. Compare the avalanche (highest rate first) and snowball (smallest balance first) plans side by side.',
      steps: [
    'Enter each debt\'s name, balance, yearly interest rate and minimum payment.',
    'Type the extra amount you can pay each month.',
    'Compare avalanche, snowball and minimum-only plans.',
    'Check the chart and month-by-month schedule, then download it as CSV.'
  ],
      faq: [
    [
      'What is the avalanche method?',
      'Pay the minimum on every debt and put all extra money on the debt with the highest interest rate. It usually saves the most interest.'
    ],
    [
      'What is the snowball method?',
      'Pay the minimum on every debt and put extra money on the smallest balance first. Quick wins can help you stay motivated.'
    ],
    [
      'What happens when a debt is paid off?',
      'Its minimum payment rolls over to the next debt in the plan, so your total monthly payment stays the same and debts fall faster.'
    ],
    [
      'Why does it say "never"?',
      'If payments do not cover the monthly interest, the balance never goes down. Raise the minimum or the extra amount.'
    ],
    [
      'Are minimum payments fixed?',
      'Yes, this tool keeps each minimum the same. Some cards lower the minimum as the balance falls, which makes minimum-only plans take even longer.'
    ]
  ],
      icon: '<path d="M4 4v16h16"/><path d="M7 7l4 5 3-2 5 6"/><circle cx="19" cy="16" r="1.5"/>'
  },
  {
      slug: 'rent-vs-buy-calculator',
      cat: 'Finance calculators',
      name: 'Rent vs Buy Calculator',
      title: 'Rent vs Buy Calculator - Is Buying a Home Worth It?',
      desc: 'Compare renting and buying a home over the years you plan to stay. Includes mortgage, taxes, upkeep, home growth, rent rises and investing the difference.',
      card: 'Compare wealth from renting vs buying.',
      intro: 'Enter the home price, mortgage, costs of owning and your rent. The calculator compares what you would have after the years you plan to stay if you buy or if you rent and invest the money you save.',
      steps: [
    'Enter how many years you plan to stay.',
    'Fill in the home price, down payment, mortgage and owning costs.',
    'Fill in your rent, rent increases and the return you could earn on savings.',
    'Read the verdict, break-even year, chart and year-by-year table.'
  ],
      faq: [
    [
      'How does the comparison work?',
      'Both people start with the same cash (down payment plus buying costs). Each month, whoever spends less invests the difference. At the end we compare the buyer\'s home equity plus savings with the renter\'s savings.'
    ],
    [
      'What counts as the buyer\'s wealth?',
      'The home\'s value after selling costs, minus the mortgage left, plus any money the buyer invested.'
    ],
    [
      'What is the break-even year?',
      'The first year in which buying leaves you at least as well off as renting.'
    ],
    [
      'Are taxes and tax breaks included?',
      'No. Rules differ widely by country. Property tax is included as a yearly percentage you can set.'
    ],
    [
      'Which numbers matter most?',
      'Usually how long you stay, home price growth, the rent level and the investment return. Try a few scenarios.'
    ]
  ],
      icon: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>'
  },
  {
      slug: 'overtime-calculator',
      cat: 'Finance calculators',
      name: 'Overtime Calculator',
      title: 'Overtime Calculator - Time and a Half and Double Time Pay',
      desc: 'Work out overtime pay at 1.5×, 2× or any rate. Enter weekly totals or hours day by day with daily and weekly limits, and see weekly, monthly and yearly pay.',
      card: 'Overtime and double-time pay for the week.',
      intro: 'Enter your hourly pay and the hours you worked. Use weekly totals, or enter each day and let the tool split hours into regular, overtime and double time using your limits. See your pay for the week, month and year.',
      steps: [
    'Pick your currency and type your normal hourly pay.',
    'Choose "Weekly totals" or "Day by day".',
    'Enter your hours and overtime rates (for example 1.5 and 2).',
    'Read regular, overtime and double-time pay and the weekly total.'
  ],
      faq: [
    [
      'What is time and a half?',
      'Overtime paid at 1.5 times your normal hourly rate. At 20 an hour, each overtime hour pays 30.'
    ],
    [
      'How does the day-by-day mode split hours?',
      'Hours above the daily limits become overtime or double time first. Then any regular hours above the weekly limit also become overtime.'
    ],
    [
      'Which limits should I use?',
      'It depends on your country, state and contract. Many places use 40 hours a week or 8 hours a day; leave a limit blank if it does not apply to you.'
    ],
    [
      'Is this before or after tax?',
      'All amounts are before tax and other deductions.'
    ],
    [
      'How is the yearly amount worked out?',
      'Weekly pay × 52, and the monthly amount is weekly pay × 52 ÷ 12.'
    ]
  ],
      icon: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><path d="M9 2h6"/><path d="M19 5l1.5-1.5"/>'
  },
  {
      slug: 'hourly-salary-converter',
      cat: 'Finance calculators',
      name: 'Hourly to Salary Converter',
      title: 'Hourly to Salary Converter - Hourly, Monthly, Yearly Pay',
      desc: 'Convert pay between hourly, daily, weekly, every two weeks, twice a month, monthly and yearly, using your own hours per day, days per week and paid weeks.',
      card: 'Convert hourly, weekly, monthly and yearly pay.',
      intro: 'Type a pay amount and choose how often it is paid. Set your hours per day, days per week and paid weeks per year, and see the same pay as hourly, daily, weekly, every two weeks, twice a month, monthly and yearly.',
      steps: [
    'Pick your currency, type the amount and choose what it is paid per.',
    'Set hours per day, days per week and paid weeks per year.',
    'Read the same pay in every other period.',
    'Copy all the results if you need them.'
  ],
      faq: [
    [
      'How is hourly pay turned into a salary?',
      'Yearly = hourly × hours per day × days per week × paid weeks per year. At 25 an hour, 8 hours, 5 days and 52 weeks that is 52,000.'
    ],
    [
      'Why is monthly not weekly × 4?',
      'A month has about 4.33 weeks, so monthly = yearly ÷ 12. Weekly × 4 would leave out about four weeks a year.'
    ],
    [
      'What is the difference between every two weeks and twice a month?',
      'Every two weeks is 26 payments a year; twice a month is 24. So each twice-a-month payment is slightly larger.'
    ],
    [
      'What should I use for paid weeks?',
      'Use 52 if your holidays are paid. If you take unpaid time off, lower it, for example 48.'
    ],
    [
      'Is this before tax?',
      'Yes, all amounts are gross pay before tax and deductions.'
    ]
  ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M17 17l3 3M20 17v3h-3"/>'
  },
  {
      slug: 'macro-calculator',
      cat: 'Calculators',
      name: 'Macro Calculator',
      title: 'Macro Calculator - Protein, Carbs and Fat for Your Goal',
      desc: 'Find your daily calories and grams of protein, carbs and fat for losing, keeping or gaining weight. Uses Mifflin-St Jeor. Metric or imperial units.',
      card: 'Daily calories and protein, carbs and fat.',
      intro: 'Enter your sex, age, weight, height, activity level and goal. The calculator estimates your daily calories with the Mifflin-St Jeor formula and splits them into grams of protein, carbs and fat per day and per meal.',
      steps: [
    'Choose units and enter your sex, age, weight and height.',
    'Pick your activity level and goal.',
    'Choose an eating style or set your own percentages.',
    'Read your daily calories and grams of protein, carbs and fat.'
  ],
      faq: [
    [
      'Which formula is used?',
      'Mifflin-St Jeor: 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5 for men or − 161 for women. That is multiplied by your activity level to get daily calories.'
    ],
    [
      'How are grams worked out?',
      'Protein and carbs have about 4 kcal per gram and fat about 9. Grams = calories × share ÷ calories per gram.'
    ],
    [
      'Which eating style is best?',
      'There is no single best split. Balanced suits most people; higher protein can help keep muscle when losing weight. Choose one you can stick to.'
    ],
    [
      'Why is there a warning about low calories?',
      'Below about 1,200 kcal (women) or 1,500 kcal (men) a day is generally too low without medical supervision.'
    ],
    [
      'Is this medical advice?',
      'No. It is an estimate for healthy adults. Ask a doctor or dietitian if you are pregnant, under 18 or have a health condition.'
    ]
  ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v9l7.5 5"/><path d="M12 12L4.5 17"/>'
  },
  {
      slug: 'running-pace-calculator',
      cat: 'Calculators',
      name: 'Running Pace Calculator',
      title: 'Running Pace Calculator - Pace, Time, Distance & Race Times',
      desc: 'Find your running pace, finish time or distance in km or miles. Get even splits and race time predictions for 5K to marathon with Riegel\'s formula.',
      card: 'Pace, finish time, splits and race predictions.',
      intro: 'Choose what to find: pace, time or distance. Enter the other two in kilometers or miles to see pace per km and per mile, speed, even splits and predicted times for the mile, 5K, 10K, 15K, half marathon and marathon.',
      steps: [
    'Choose "Find pace", "Find time" or "Find distance".',
    'Enter the distance (or pick a race), the time and/or the pace.',
    'Read pace per km and mile, speed and finish time.',
    'Check the even splits and race predictions.'
  ],
      faq: [
    [
      'How is pace calculated?',
      'Pace = time ÷ distance. 50 minutes for 10 km is 5:00 per km, or about 8:03 per mile.'
    ],
    [
      'How do race predictions work?',
      'They use Riegel\'s formula: time₂ = time₁ × (distance₂ ÷ distance₁)^1.06. It assumes you train properly for the new distance.'
    ],
    [
      'How accurate are predictions?',
      'They are best for nearby distances. Predicting a marathon from a 5K is usually optimistic unless you have done the long-run training.'
    ],
    [
      'How long is a half marathon and marathon?',
      'A half marathon is 21.0975 km (13.1 mi) and a marathon is 42.195 km (26.2 mi).'
    ],
    [
      'Can I use it for walking or cycling?',
      'Yes. Pace, time and distance work for any activity; race predictions are meant for running.'
    ]
  ],
      icon: '<circle cx="14" cy="4.5" r="2"/><path d="M9 21l3-6-3-3 2-5 4 3h4"/><path d="M12 15l3 2v4"/><path d="M7 11l2-4"/>'
  },
  {
      slug: 'one-rep-max-calculator',
      cat: 'Calculators',
      name: 'One Rep Max Calculator',
      title: 'One Rep Max Calculator - 1RM with Epley, Brzycki & More',
      desc: 'Estimate your one-rep max from a weight and reps with Epley, Brzycki, Lombardi and four more formulas. Get a training percentage table in kg or lb.',
      card: 'Estimate 1RM and training weights.',
      intro: 'Enter the weight you lifted and how many reps you did. The calculator estimates your one-rep max with seven published formulas, shows their average and range, and lists training weights from 50% to 100%.',
      steps: [
    'Choose kg or lb and type the weight you lifted.',
    'Type the number of reps (1–20).',
    'Read the average 1RM and each formula.',
    'Use the percentage table to plan training weights.'
  ],
      faq: [
    [
      'What is a one-rep max?',
      'The heaviest weight you can lift once with good form for a given exercise.'
    ],
    [
      'Which formula is most accurate?',
      'Studies find they are all close for 10 reps or fewer. Epley and Brzycki are most common; the average of several is a good estimate.'
    ],
    [
      'Why limit reps to 20?',
      'Above about 10 reps the formulas disagree more, and above 20 they are unreliable.'
    ],
    [
      'Is it safe to test a true 1RM?',
      'Only with good technique, a proper warm-up and a spotter. An estimate avoids the risk of a max attempt.'
    ],
    [
      'What does rounding do?',
      'It rounds the training weights to the nearest 1, 2.5 or 5 so they match the plates you have.'
    ]
  ],
      icon: '<path d="M3 9v6M6 7v10M18 7v10M21 9v6"/><path d="M6 12h12"/>'
  },
  {
      slug: 'heart-rate-zones-calculator',
      cat: 'Calculators',
      name: 'Heart Rate Zones Calculator',
      title: 'Heart Rate Zones Calculator - Max HR and Karvonen Zones',
      desc: 'Find your 5 heart rate training zones from your age and resting heart rate. Choose a max heart rate formula and use % of max or the Karvonen method.',
      card: 'Max heart rate and 5 training zones.',
      intro: 'Enter your age and, if you know it, your resting heart rate. Choose a max heart rate formula or enter a measured max. See five training zones in beats per minute using % of max or the Karvonen heart rate reserve method.',
      steps: [
    'Type your age and, optionally, your resting heart rate.',
    'Choose a max heart rate formula or enter your own max.',
    'Choose the zone method or leave it on automatic.',
    'Read your five zones in beats per minute.'
  ],
      faq: [
    [
      'Which max heart rate formula should I use?',
      'Tanaka (208 − 0.7 × age) is more accurate for adults than the classic 220 − age. Gulati is designed for women. A measured max is best.'
    ],
    [
      'What is the Karvonen method?',
      'Target = (max − resting) × intensity + resting. It uses your resting heart rate, so zones fit your fitness better.'
    ],
    [
      'How do I measure resting heart rate?',
      'Count your pulse for 60 seconds after waking up, before getting out of bed, on a few days and take the average.'
    ],
    [
      'How wrong can formulas be?',
      'Real max heart rate can differ from any formula by 10–20 bpm.'
    ],
    [
      'Should I check with a doctor?',
      'Yes if you have a heart condition, take medicine that affects heart rate, or are starting exercise after a long break.'
    ]
  ],
      icon: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-7.6a5.5 5.5 0 0 0 0-7.8z"/><path d="M3 12h4l2-3 3 6 2-3h7"/>'
  },
  {
      slug: 'period-ovulation-calculator',
      cat: 'Calculators',
      name: 'Period and Ovulation Calculator',
      title: 'Period and Ovulation Calculator - Next Period & Fertile Days',
      desc: 'Estimate your next periods, ovulation day and fertile window from your last period and cycle length. Calendar view and .ics export. Not contraception.',
      card: 'Next period, ovulation and fertile window.',
      intro: 'Enter the first day of your last period and your usual cycle length. See estimates for your next periods, ovulation and fertile window on a calendar. This is an estimate only: it is not a method of contraception and not medical advice.',
      steps: [
    'Pick the first day of your last period.',
    'Enter your usual cycle length and period length.',
    'Read your next period, estimated ovulation and fertile window.',
    'Check the calendar or add the dates to your calendar app.'
  ],
      faq: [
    [
      'Can I use this to avoid pregnancy?',
      'No. It is an estimate based on average cycles and is not a method of contraception. Ovulation can come early or late. Talk to a doctor or nurse about birth control.'
    ],
    [
      'How is ovulation estimated?',
      'Ovulation is estimated as the next period start date minus the luteal phase, which is usually about 14 days.'
    ],
    [
      'What is the fertile window?',
      'The 5 days before ovulation, ovulation day and the day after, because sperm can live for several days.'
    ],
    [
      'My cycles are irregular. Will it work?',
      'Predictions are much less reliable for irregular cycles. Use your average cycle length and talk to a doctor if cycles vary a lot.'
    ],
    [
      'Is my date saved?',
      'Only if you tick "Remember my period date on this device only". It is stored in this browser and never uploaded.'
    ]
  ],
      icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><circle cx="12" cy="15.5" r="2.5"/>'
  },
  {
      slug: 'paint-calculator',
      cat: 'Calculators',
      name: 'Paint Calculator',
      title: 'Paint Calculator - How Much Paint for Walls and Ceiling',
      desc: 'Work out how much paint you need for a room or wall, minus doors and windows, for any number of coats. Liters or gallons, with suggested cans to buy.',
      card: 'Paint needed for walls, ceiling and cans to buy.',
      intro: 'Enter your room size, doors and windows, number of coats and the coverage on the paint can. See the area to paint, liters or gallons needed for walls and ceiling, and a mix of can sizes to buy.',
      steps: [
    'Choose metric or imperial and a whole room or one wall.',
    'Enter the measurements and tick the ceiling if needed.',
    'Enter doors, windows, coats and the coverage from the can.',
    'Read the paint needed and the suggested cans.'
  ],
      faq: [
    [
      'How is the paint amount worked out?',
      'Paint = area to paint × coats ÷ coverage, plus the extra % you choose. Wall area = room perimeter × height minus doors and windows.'
    ],
    [
      'How much does a liter or gallon cover?',
      'Most wall paints cover about 10–12 m² per liter or 350–400 ft² per US gallon per coat. Check your can.'
    ],
    [
      'How many coats do I need?',
      'Usually two. A big color change, fresh plaster or bare wood may need a primer or a third coat.'
    ],
    [
      'Why is the ceiling separate?',
      'Ceilings often use a different paint, so walls and ceiling are worked out and bought separately.'
    ],
    [
      'How are cans suggested?',
      'It picks the mix of standard can sizes that covers what you need with the least left over, then the fewest cans.'
    ]
  ],
      icon: '<rect x="3" y="3" width="15" height="6" rx="1.5"/><path d="M18 6h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3"/><rect x="10" y="14" width="4" height="7" rx="1"/>'
  },
  {
      slug: 'tile-calculator',
      cat: 'Calculators',
      name: 'Tile Calculator',
      title: 'Tile Calculator - How Many Tiles and Boxes Do I Need?',
      desc: 'Work out how many floor or wall tiles you need from the area, tile size and grout gap, with extra for cuts. See boxes to buy and the cost.',
      card: 'Tiles and boxes for a floor or wall.',
      intro: 'Enter the area to tile, the tile size and grout gap, and an allowance for cuts and breakage. See the tiles needed, the tiles to buy, the number of boxes and the estimated cost.',
      steps: [
    'Choose units and floor or wall.',
    'Enter the area measurements and any area to leave out.',
    'Enter the tile size, grout gap and extra % for cuts.',
    'Add tiles per box and price to see boxes and cost.'
  ],
      faq: [
    [
      'How is the number of tiles worked out?',
      'Tiles = area ÷ ((tile length + gap) × (tile width + gap)), rounded up, then increased by the extra % for cuts and breakage.'
    ],
    [
      'How much extra should I add?',
      'About 10% for most rooms, 15% for diagonal or herringbone layouts and 20% for rooms with many corners.'
    ],
    [
      'Should I include the grout gap?',
      'Yes. Each tile takes up its own size plus one gap, so including it gives a slightly more accurate count.'
    ],
    [
      'Why buy all boxes at once?',
      'Tiles from different batches can differ slightly in color and size.'
    ],
    [
      'Does it work for walls?',
      'Yes. Choose "Wall", enter width and height, and leave out doors and windows.'
    ]
  ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6"/>'
  },
  {
      slug: 'pet-age-calculator',
      cat: 'Calculators',
      name: 'Pet Age Calculator',
      title: 'Pet Age Calculator - Dog and Cat Age in Human Years',
      desc: 'Convert your dog\'s or cat\'s age to human years with the vet chart by dog size, the epigenetic 16·ln(age)+31 formula and the old ×7 rule, explained.',
      card: 'Dog and cat age in human years.',
      intro: 'Choose dog or cat, enter the age and, for dogs, the adult size. See your pet\'s age in human years using the veterinary chart, the newer epigenetic formula for dogs and the old × 7 rule, with an explanation of why they differ.',
      steps: [
    'Choose dog or cat.',
    'Enter the age in years and months.',
    'For dogs, choose the adult size.',
    'Compare the results and read the life stage.'
  ],
      faq: [
    [
      'Is one dog year really seven human years?',
      'No. Dogs mature very fast in the first two years and then age more slowly. The × 7 rule is too low for young dogs and ignores size.'
    ],
    [
      'Why does dog size matter?',
      'Large and giant breeds have shorter lives, so after middle age they age faster than small dogs.'
    ],
    [
      'What is the 16 × ln(age) + 31 formula?',
      'It comes from a 2020 study that compared age-related DNA changes in Labrador retrievers with humans. It is only meaningful for dogs aged 1 year or more.'
    ],
    [
      'How are cat years worked out?',
      'A cat is about 15 human years at age 1 and 24 at age 2, then about 4 human years for each cat year.'
    ],
    [
      'What are life stages?',
      'Vet guidelines group pets into stages such as puppy or kitten, young adult, mature adult and senior, which guide check-ups and care.'
    ]
  ],
      icon: '<circle cx="5" cy="10" r="1.8"/><circle cx="9" cy="5.5" r="1.8"/><circle cx="15" cy="5.5" r="1.8"/><circle cx="19" cy="10" r="1.8"/><path d="M12 11c-3 0-6 4.5-6 7a2.5 2.5 0 0 0 3 2.4c1-.3 2-.7 3-.7s2 .4 3 .7A2.5 2.5 0 0 0 18 18c0-2.5-3-7-6-7z"/>'
  },
  {
      slug: 'zodiac-sign-calculator',
      cat: 'Calculators',
      name: 'Zodiac Sign Calculator',
      title: 'Zodiac Sign Calculator - Western and Chinese Zodiac by Date',
      desc: 'Find your Western star sign and Chinese zodiac animal and element from your date of birth, with Lunar New Year handled correctly and fun descriptions.',
      card: 'Star sign and Chinese zodiac from your birthday.',
      intro: 'Pick your date of birth to see your Western zodiac sign with its element and dates, and your Chinese zodiac animal, element and yin or yang, based on the Lunar New Year date for your birth year. Just for fun.',
      steps: [
    'Pick your date of birth.',
    'Read your Western sign, element and quality.',
    'Read your Chinese zodiac animal, element and the dates of that lunar year.',
    'Copy your signs to share.'
  ],
      faq: [
    [
      'Why is my Chinese sign from the year before?',
      'The Chinese zodiac year starts at Lunar New Year, between late January and mid-February. If you were born before it, your sign comes from the previous year.'
    ],
    [
      'How is the Lunar New Year date found?',
      'The tool uses the Chinese calendar built into your browser to find the exact first day of each lunar year.'
    ],
    [
      'What does "on the cusp" mean?',
      'Born on the first or last day of a sign. Sign dates can shift by a day from year to year.'
    ],
    [
      'How is the Chinese element chosen?',
      'By the last digit of the lunar year: 0–1 Metal, 2–3 Water, 4–5 Wood, 6–7 Fire, 8–9 Earth. Even years are yang and odd years are yin.'
    ],
    [
      'Is my birth date saved?',
      'No. It is not stored or sent anywhere.'
    ]
  ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/><path d="M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2z"/>'
  },
  {
      slug: 'cooking-converter',
      cat: 'Calculators',
      name: 'Cooking Converter',
      title: 'Cooking Converter - Cups to Grams, Oven Temps, Recipe Scaler',
      desc: 'Convert cups, spoons, ml and grams for flour, sugar, butter and more, change oven °C, °F and gas marks, and scale a whole ingredient list to new servings.',
      card: 'Cups to grams, oven temps and recipe scaling.',
      intro: 'Convert cooking measures by ingredient (cups, spoons, ml, grams, ounces) with US, metric, Australian or old UK cups. Convert oven temperatures between °C, °F, fan and gas mark, and paste a recipe to scale every ingredient at once.',
      steps: [
    'Type an amount, choose its unit and the ingredient.',
    'Pick the cup and spoon standard your recipe uses.',
    'Convert an oven temperature between °C, °F, fan and gas mark.',
    'Paste an ingredient list and set servings to scale it.'
  ],
      faq: [
    [
      'Why does a cup of flour weigh less than a cup of sugar?',
      'Different ingredients have different densities. A US cup of flour is about 125 g, sugar about 200 g and butter about 227 g.'
    ],
    [
      'How big is a cup?',
      'A US cup is 236.6 ml, a metric cup (Australia, Canada, New Zealand and others) is 250 ml, and old UK recipes used 284 ml.'
    ],
    [
      'How much should I lower the oven for fan?',
      'About 20 °C (25 °F) lower than the conventional temperature.'
    ],
    [
      'How does the recipe scaler work?',
      'It multiplies the number at the start of each line by new servings ÷ original servings, including fractions like 1 1/2 and ½.'
    ],
    [
      'Are the weights exact?',
      'They are averages. How you fill a cup changes dry ingredients by 10–15%, so a scale is most accurate.'
    ]
  ],
      icon: '<path d="M4 11h16l-1.5 8a2 2 0 0 1-2 1.7h-9A2 2 0 0 1 5.5 19z"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/><path d="M12 4V2"/>'
  },
  {
      slug: 'redact-pdf', cat: 'PDF tools', name: 'Redact PDF',
      title: 'Redact PDF - Black Out Text & Remove It for Good, Free',
      desc: 'Black out names, numbers, emails and any area of a PDF. The hidden text is truly removed, not just covered. Free, private, works in your browser.',
      card: 'Black out private text so it is really gone.',
      intro: 'Hide private details in a PDF for good. Search for words or draw boxes, and the text and pictures under them are permanently removed, not just covered with a black shape.',
      steps: ['Open your PDF.', 'Type the words to hide and press Find and mark, or drag boxes over any area on the page.', 'Check every page, then press Redact PDF.', 'Download the redacted copy and share that one.'],
      faq: [
        ['Is the hidden text really gone?', 'Yes. Every page with a mark is rebuilt as a picture with the boxes burned in, so the words under a box no longer exist in the file. The tool then searches the new file to check that none of the words you searched for are left.'],
        ['Can people still search and copy the rest of the page?', 'Yes, if "Keep the rest of the text searchable" is ticked. An invisible copy of the text that is not under a box is added, so search and copy still work for everything except the redacted words.'],
        ['Does it work on scanned PDFs?', 'Drawing boxes works on any page. Word search needs real text, so for scans drag boxes over the details instead.'],
        ['Are my files uploaded?', 'No. The PDF is opened and redacted inside your browser, and it never leaves your device.'],
        ['Does it remove hidden details too?', 'By default the title, author and other document details are removed as well. Pages without marks are copied unchanged.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect x="8" y="11" width="8" height="3" fill="currentColor"/><path d="M8 17h5"/>'
  },
  {
      slug: 'fill-pdf-form', cat: 'PDF tools', name: 'Fill PDF Form',
      title: 'Fill PDF Form Online - Type in Any PDF, Free & Private',
      desc: 'Fill in PDF forms in your browser: text boxes, tick boxes, choices and lists. No form fields? Type, tick or date anywhere on the page. Optional flatten.',
      card: 'Fill in PDF forms or type anywhere on a PDF.',
      intro: 'Fill in a PDF form without printing it. The tool finds every fillable field, or lets you type, tick and add the date anywhere on PDFs that have no fields.',
      steps: ['Open the PDF form.', 'Fill in the fields in the list, or tap a blue box on the page to jump to it.', 'Use + Text, + ✓ or + Date to write anywhere else on the page.', 'Tick Flatten if the answers should not be changed, then save and download.'],
      faq: [
        ['What kinds of fields can I fill?', 'Text boxes (one line or many), tick boxes, radio buttons, drop-down lists and option lists. Signature fields are left as they are; use Sign PDF for those.'],
        ['The PDF has no fillable fields. Can I still fill it?', 'Yes. Press + Text and tap the page where your answer goes, then type. You can also add ticks, crosses and the date, move them with the ⠿ handle and delete them with ✕.'],
        ['What does Flatten do?', 'It makes your answers part of the page, so they show the same in every PDF reader and can no longer be edited as form fields.'],
        ['Can I type in Arabic, Hindi or Chinese?', 'Yes. Answers in any language are kept. If the form’s own font cannot show your script, tick Flatten to have the text drawn with a font that can, so it looks right everywhere.'],
        ['Is my form uploaded?', 'No. The form is filled inside your browser and never leaves your device.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect x="8" y="11" width="8" height="3" rx=".5"/><path d="M8 17l1.5 1.5L12 16"/>'
  },
  {
      slug: 'compare-pdf', cat: 'PDF tools', name: 'Compare PDF',
      title: 'Compare PDF Files - Find Differences in Text & Layout',
      desc: 'Compare two PDFs page by page: see added and removed words, and an overlay or side-by-side view that highlights what changed. Free and private.',
      card: 'Spot every change between two PDF versions.',
      intro: 'Compare two versions of a PDF and see exactly what changed. Words that were removed or added are highlighted on each page, and a visual view shows changes in pictures and layout.',
      steps: ['Choose the first (older) PDF and the second (newer) PDF.', 'Press Compare PDFs.', 'Click a red page number to see its changes.', 'Switch between Text changes, Overlay and Side by side.'],
      faq: [
        ['What counts as a change?', 'Every word that is in one PDF but not in the other, page by page. The Overlay and Side by side views also show changes in pictures, lines and layout that text cannot show.'],
        ['Can it compare scanned PDFs?', 'Scans have no text, so the word list stays empty, but Overlay and Side by side still compare them as pictures.'],
        ['What if one PDF has more pages?', 'Extra pages are shown with a dashed border and listed as only in the first or only in the second PDF. Because the whole text is compared, words that simply moved onto another page are not shown as changes.'],
        ['Can I ignore small differences?', 'Yes. Tick Ignore capital letters or Ignore punctuation to hide changes that only affect those.'],
        ['Are my files uploaded?', 'No. Both PDFs are read and compared inside your browser.']
      ],
      icon: '<rect x="3" y="4" width="8" height="16" rx="1.5"/><rect x="13" y="4" width="8" height="16" rx="1.5"/><path d="M6 9h2M6 13h2M16 9h2M16 13h2"/>'
  },
  {
      slug: 'pdf-booklet', cat: 'PDF tools', name: 'PDF Booklet & N-up',
      title: 'PDF Booklet Maker & N-up - 2, 4, 6, 9 Pages per Sheet',
      desc: 'Print a PDF as a folded booklet, or put 2, 4, 6, 9 or 16 pages on one sheet. Pick A4 or Letter, right-to-left order, margins and borders. Free.',
      card: 'Make a folded booklet or print many pages per sheet.',
      intro: 'Turn any PDF into a booklet you can print double-sided and fold in the middle, or save paper by putting several pages on each sheet.',
      steps: ['Open your PDF.', 'Choose Booklet, or how many pages go on each sheet side.', 'Pick the sheet size, reading direction and margins.', 'Make the PDF, download it and print it at actual size.'],
      faq: [
        ['How do I print the booklet?', 'Print double-sided and choose "flip on short edge", at actual size (100%). Fold the stack in half and staple along the fold.'],
        ['Why are there blank pages?', 'A booklet needs a multiple of 4 pages, so blank pages are added at the end when needed.'],
        ['What are sections?', 'Thick booklets fold badly. Splitting into sections of a few sheets lets you fold each one separately and stack them, like a real book.'],
        ['Does it work for right-to-left books?', 'Yes. Choose Right to left for Arabic, Hebrew, Urdu or Japanese books, and the pages are ordered for binding on the right.'],
        ['Is my PDF uploaded?', 'No. The new PDF is made in your browser.']
      ],
      icon: '<path d="M12 6v14M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5M12 6c2-1.5 5-2 8-1.5V19c-3-.5-6 0-8 1.5"/>'
  },
  {
      slug: 'pdf-page-resize', cat: 'PDF tools', name: 'Resize PDF Pages',
      title: 'Resize PDF Pages - Change to A4, Letter, A3 or Custom Size',
      desc: 'Change the page size of a PDF to A4, Letter, Legal, A3, A5 or any custom size. Fit, fill or keep the content, add margins. Free, no upload.',
      card: 'Change PDF pages to A4, Letter or any size.',
      intro: 'Change the paper size of a PDF, for example from Letter to A4 for printing. Content is scaled to fit, or to fill the page, and stays sharp.',
      steps: ['Open your PDF.', 'Pick the new paper size and orientation.', 'Choose Fit, Fill or Keep size, and add a margin if you like.', 'Press Resize pages and download the new PDF.'],
      faq: [
        ['Does resizing make the PDF blurry?', 'No. The page content is scaled as vector graphics, so text and lines stay sharp at any size.'],
        ['What is the difference between Fit and Fill?', 'Fit shows the whole page and may leave white edges. Fill covers the whole paper and cuts off what sticks out.'],
        ['Can I resize only some pages?', 'Yes. Type the pages in "Pages to change", for example 1-3, 7. Other pages stay as they are.'],
        ['Do links and form fields still work?', 'Yes. Links, comments and form fields are moved and scaled with the page content.'],
        ['Is my file uploaded?', 'No. The PDF is changed inside your browser.']
      ],
      icon: '<rect x="3" y="3" width="13" height="17" rx="1.5"/><path d="M19 8v13H8M14 14l7 7M21 16v5h-5"/>'
  },
  {
      slug: 'text-to-pdf', cat: 'PDF tools', name: 'Text to PDF',
      title: 'Text to PDF Converter - TXT to PDF in Any Language, Free',
      desc: 'Turn plain text or a .txt file into a clean PDF. Choose paper, font, size, margins and page numbers. Works with every language, including Arabic and Hindi.',
      card: 'Turn plain text or .txt files into a neat PDF.',
      intro: 'Paste text or open a .txt file and get a tidy PDF with the font, size, margins and page numbers you choose. Every language works, including right-to-left scripts.',
      steps: ['Paste your text, or open a .txt file.', 'Choose the paper, font, size and margins.', 'Pick page numbers and add a title if you like.', 'Press Create PDF and download it.'],
      faq: [
        ['Which languages are supported?', 'All of them. Latin, Greek and Cyrillic use the main font; Arabic, Urdu, Persian, Hebrew, Hindi, Bengali, Tamil and Thai get their own fonts; Chinese, Japanese, Korean and emoji are drawn as sharp pictures.'],
        ['Are long lines wrapped?', 'Yes. Lines are wrapped at word boundaries to fit the page, and very long words are split.'],
        ['Can I keep columns and code lined up?', 'Choose the Monospace font. Spaces and tabs are kept, so columns stay aligned.'],
        ['Can I start a new page on purpose?', 'Yes. A form feed character (common in old .txt reports) starts a new page.'],
        ['Is my text uploaded?', 'No. The PDF is made in your browser.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 12h6M9 15h6M9 18h4"/>'
  },
  {
      slug: 'flatten-pdf', cat: 'PDF tools', name: 'Flatten PDF',
      title: 'Flatten PDF Online - Lock Form Fields & Comments, Free',
      desc: 'Flatten a PDF so form answers, comments, highlights and stamps become part of the page and can no longer be edited. Or turn pages into images.',
      card: 'Lock form answers and comments into the page.',
      intro: 'Flatten a PDF so filled-in form fields, comments, highlights and stamps become a fixed part of the page. They look the same in every PDF reader and can no longer be changed.',
      steps: ['Open your PDF.', 'Choose what to flatten: form fields, comments and marks, or both.', 'Or choose to turn every page into an image.', 'Press Flatten PDF and download it.'],
      faq: [
        ['What does flattening do?', 'It draws form answers and annotations into the page content and removes the editable fields and comments, so the document looks the same everywhere and cannot be edited as a form.'],
        ['Will my text stay selectable?', 'Yes, in the recommended mode. Only the "turn every page into an image" mode removes selectable text.'],
        ['Are links kept?', 'Yes, by default links stay clickable. Untick "Keep links clickable" to remove them too.'],
        ['Can it flatten locked PDFs?', 'PDFs that open without a password but block editing are unlocked automatically. Files that need a password must be unlocked first.'],
        ['Is my file uploaded?', 'No. Everything happens in your browser.']
      ],
      icon: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/>'
  },
  {
      slug: 'pdf-metadata-editor', cat: 'PDF tools', name: 'PDF Metadata Editor',
      title: 'PDF Metadata Editor - Edit or Remove Title, Author & Dates',
      desc: 'See and change the hidden details of a PDF: title, author, subject, keywords, app names and dates. Or remove all metadata at once. Free, no upload.',
      card: 'Edit or remove the hidden details of a PDF.',
      intro: 'Every PDF stores hidden details such as the title, the author’s name, the app that made it and when it was created. See them, change them, or remove them all before you share the file.',
      steps: ['Open your PDF.', 'Change the title, author, keywords, dates or other details.', 'Press Save changes, or Remove all metadata to wipe them.', 'Download the PDF.'],
      faq: [
        ['What is PDF metadata?', 'Information stored inside the file, separate from the pages: title, author, subject, keywords, the app that created it, and creation and change dates. Readers show it in Document Properties, and search engines use the title.'],
        ['Why remove metadata?', 'It can reveal your name, your company, the software you use and when you worked on the file. Removing it protects your privacy when sharing.'],
        ['Does it also change XMP metadata?', 'Yes. If the PDF has an XMP block, it is updated to match your changes, and Remove all metadata deletes it.'],
        ['Will the pages change?', 'No. Only the hidden details change; the content of the pages stays exactly the same.'],
        ['Is my file uploaded?', 'No. The PDF is read and saved in your browser.']
      ],
      icon: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><circle cx="12" cy="11" r=".6" fill="currentColor"/><path d="M12 14v4"/>'
  },
  {
      slug: 'meeting-planner', cat: 'Time tools', name: 'Meeting Planner',
      title: 'Meeting Planner - Find the Best Time Across Time Zones',
      desc: 'Plan meetings across time zones: see working hours for every city side by side, find hours that suit everyone, and copy the invite or save a calendar file.',
      card: 'Find a meeting time that works in every time zone.',
      intro: 'Pick the cities of everyone in the meeting and see their hours side by side. Green hours are working hours, so the best time for everyone stands out. Then copy the invite.',
      steps: ['Add the cities or time zones of everyone in the meeting.', 'Pick the date and adjust working hours or weekends if needed.', 'Click an hour in the grid, ideally one marked ✓.', 'Copy the invite text or download a calendar file.'],
      faq: [
        ['How does it find the best time?', 'For each hour of the day it checks every city’s working hours and weekend. Hours where everyone is working get a ✓, and the best hours are listed above the details.'],
        ['Does it handle daylight saving time?', 'Yes. Times come from your browser’s time zone database, so clock changes on the chosen date are included.'],
        ['What about countries with a Friday weekend?', 'Weekends are set by country, for example Friday and Saturday in Saudi Arabia, and you can change any city’s weekend and working hours.'],
        ['Can I add it to my calendar?', 'Yes. Download the .ics file and open it with Google Calendar, Outlook or Apple Calendar.'],
        ['Is my list saved?', 'Yes, your cities and hours are saved in this browser on this device.']
      ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/><path d="M16 16l2 2 3-3"/>'
  },
  {
      slug: 'world-clock', cat: 'Time tools', name: 'World Clock',
      title: 'World Clock - Live Time in Cities Around the World',
      desc: 'See the live time in many cities at once, with day or night, sunrise and sunset, and the difference from your time. Add or remove cities; saved on your device.',
      card: 'Live clocks for cities around the world.',
      intro: 'Keep an eye on the time in all the places that matter to you. Each clock shows the local time, date, day or night with sunrise and sunset, and how far ahead or behind you it is.',
      steps: ['Look at your own time at the top and the starting clocks below.', 'Search for a city or time zone and click it to add a clock.', 'Remove or reorder clocks, or sort them from west to east.', 'Your list is saved and comes back next time.'],
      faq: [
        ['Is the time accurate?', 'The clocks use your device’s clock and your browser’s time zone data, which includes daylight saving rules. If your device clock is right, the world times are right.'],
        ['How is day or night worked out?', 'For cities in the list, sunrise and sunset are calculated from the city’s position for today. For time zones added by name, 6:00 to 18:00 counts as day.'],
        ['Are my cities saved?', 'Yes, in this browser on this device. Nothing is sent anywhere.'],
        ['Can I use a 12-hour clock?', 'Yes. Choose 12-hour or 24-hour, and turn seconds and clock faces on or off.'],
        ['Does it work offline?', 'Yes. Once the page has loaded, the clocks keep running without a connection.']
      ],
      icon: '<circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.6 3.5 5.6 3.5 9s-1 6.4-3.5 9c-2.5-2.6-3.5-5.6-3.5-9s1-6.4 3.5-9z"/>'
  },
  {
      slug: 'week-number', cat: 'Time tools', name: 'Week Number',
      title: 'Week Number Today - ISO Week of Any Date & Year Table',
      desc: 'Find the week number of any date in the ISO system and in Sunday-start and Saturday-start systems. See week dates, weeks in a year and a full year table.',
      card: 'Week number of any date, in every system.',
      intro: 'Find out which week of the year a date falls in. The ISO week used in most of the world is shown, along with Sunday-start and Saturday-start weeks, the dates of the week, and a table for the whole year.',
      steps: ['Pick a date, or press Today.', 'Read the week number and the dates of that week.', 'Compare with the other week systems in the table.', 'Use the year table, or find the dates of any week number.'],
      faq: [
        ['What is an ISO week number?', 'The ISO 8601 standard: weeks start on Monday and week 1 is the week with the year’s first Thursday. It is used across Europe, much of Asia and in business software.'],
        ['Why does 1 January sometimes belong to week 52 or 53?', 'In the ISO system the first days of January can belong to the last week of the previous year, and late December can belong to week 1 of the next year.'],
        ['How do US week numbers differ?', 'In the US and some other countries weeks start on Sunday and week 1 is the week that contains 1 January, so the numbers can differ from ISO by one.'],
        ['How many weeks does a year have?', 'An ISO year has 52 or 53 weeks. A year has 53 when it starts on a Thursday, or on a Wednesday in a leap year.'],
        ['Can I download the weeks of a year?', 'Yes. Copy the year table or download it as a CSV file for a spreadsheet.']
      ],
      icon: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/><path d="M10 14h4v4"/>'
  },
  {
    slug: 'css-gradient-generator', cat: 'Developer tools', name: 'CSS Gradient Generator',
    title: 'CSS Gradient Generator - Linear, Radial & Conic',
    desc: 'Create linear, radial and conic CSS gradients with draggable color stops, opacity and a live preview, then copy the CSS code.',
    card: 'Design CSS gradients and copy the code.',
    intro: 'Pick colors, drag color stops and set the angle to design a gradient. The preview updates live and the CSS is ready to copy.',
    steps: ['Choose linear, radial or conic.', 'Edit the colors and drag the stops on the bar.', 'Adjust the angle or center.', 'Click Copy CSS and paste it into your stylesheet.'],
    faq: [
      ['Which browsers support these gradients?', 'Linear and radial gradients work in every current browser. Conic gradients need a browser from 2020 or later; the CSS includes a solid fallback color.'],
      ['How do I make a transparent gradient?', 'Lower the Opacity slider on a color stop. That stop is written as an rgba() color, so whatever is behind the element shows through.'],
      ['How many colors can I use?', 'Up to 16 color stops. Click the stop bar or press Add color to add one.'],
      ['Can I make stripes?', 'Yes. Turn on Repeating, or put two stops at the same position to create a sharp edge.'],
      ['Is the code free to use?', 'Yes. The CSS you create is yours to use in any project.']
    ],
    icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 15L15 3M3 21L21 3M9 21l12-12"/>'
  },
  {
    slug: 'css-box-shadow-generator', cat: 'Developer tools', name: 'CSS Box Shadow Generator',
    title: 'CSS Box Shadow Generator - Layers, Inset & Preview',
    desc: 'Design CSS box shadows with sliders: offset, blur, spread, color, inset and multiple layers, with a live preview and copy-ready code.',
    card: 'Design layered CSS box shadows visually.',
    intro: 'Use sliders to set the offset, blur, spread and color of a shadow, stack several layers, and copy the box-shadow CSS.',
    steps: ['Start from a preset or the default soft shadow.', 'Adjust offset, blur, spread, color and opacity.', 'Add layers or switch on Inset if you need them.', 'Click Copy CSS.'],
    faq: [
      ['What does spread do?', 'Spread makes the shadow bigger (positive) or smaller (negative) than the box before it is blurred.'],
      ['Why use more than one layer?', 'Real shadows have a sharp dark part close to the object and a soft wide part further away. Two or more layers imitate that.'],
      ['What is an inset shadow?', 'An inset shadow is drawn inside the box, which makes it look pressed in.'],
      ['Does box-shadow work on images?', 'Yes, on any element. For the outline of a transparent PNG, use filter: drop-shadow() instead.']
    ],
    icon: '<rect x="3" y="3" width="14" height="14" rx="2"/><path d="M21 7v12a2 2 0 0 1-2 2H7"/>'
  },
  {
    slug: 'css-border-radius-generator', cat: 'Developer tools', name: 'CSS Border Radius Generator',
    title: 'CSS Border Radius Generator - Rounded & Elliptical',
    desc: 'Round each corner separately, make elliptical blob shapes, preview live and copy the shortest border-radius CSS. Pixels or percent.',
    card: 'Round corners and make blob shapes in CSS.',
    intro: 'Set the curve of each corner with sliders, switch on elliptical corners for organic shapes, and copy the border-radius code.',
    steps: ['Choose pixels or percent.', 'Move the sliders, for all corners or each one separately.', 'Tick Elliptical corners for blob shapes.', 'Click Copy CSS.'],
    faq: [
      ['What does the slash in border-radius mean?', 'Values before the slash are the horizontal radii and values after it are the vertical radii, in the order top left, top right, bottom right, bottom left.'],
      ['How do I make a circle?', 'Use 50% on all corners on a square element. On a rectangle, 50% gives an oval.'],
      ['Why is my 500px radius the same as 100px?', 'When the curves would overlap, browsers scale all radii down so they fit, so very large values all look the same.'],
      ['Does border-radius work on images?', 'Yes. Put it on the img element, or on a parent with overflow: hidden.']
    ],
    icon: '<path d="M4 20V10a6 6 0 0 1 6-6h10"/><path d="M4 4h2M18 20h2v-2"/>'
  },
  {
    slug: 'css-clip-path-generator', cat: 'Developer tools', name: 'CSS Clip Path Generator',
    title: 'CSS Clip Path Generator - Polygon Shapes & Circles',
    desc: 'Make CSS clip-path shapes: drag polygon points, pick stars, arrows, hexagons, circles and insets, preview on your image and copy the code.',
    card: 'Cut elements into shapes with clip-path.',
    intro: 'Choose a shape and drag its points on the preview to create a clip-path. Preview it on your own image and copy the CSS.',
    steps: ['Pick a starting shape.', 'Drag the points, or use the sliders for circles and insets.', 'Optionally preview your own image.', 'Click Copy CSS.'],
    faq: [
      ['Which browsers support clip-path?', 'All current browsers support polygon(), circle(), ellipse() and inset(). The code also includes -webkit-clip-path for older Safari.'],
      ['Can I animate a clip-path?', 'Yes, with a CSS transition or animation, as long as both shapes are the same type and polygons have the same number of points.'],
      ['Why is my shadow gone?', 'clip-path also cuts off box-shadow. Put filter: drop-shadow() on a wrapping element instead.'],
      ['Is my image uploaded?', 'No. The preview image is opened only in your browser.']
    ],
    icon: '<path d="M12 3l9 7-3.5 11h-11L3 10z"/><circle cx="12" cy="3" r="1.4"/><circle cx="21" cy="10" r="1.4"/>'
  },
  {
    slug: 'flexbox-grid-playground', cat: 'Developer tools', name: 'Flexbox and Grid Playground',
    title: 'Flexbox & CSS Grid Playground - Visual Layout Tool',
    desc: 'Try CSS flexbox and grid properties on live boxes: justify, align, wrap, grow, columns, spans. See the layout change and copy the CSS.',
    card: 'Try flexbox and grid properties on live boxes.',
    intro: 'Change flexbox or grid settings and watch real boxes move. Select a box to set its own properties, then copy the CSS and HTML.',
    steps: ['Choose Flexbox or Grid.', 'Change the container settings.', 'Click a box to edit its own settings.', 'Copy the CSS and HTML.'],
    faq: [
      ['What is the difference between flexbox and grid?', 'Flexbox lays items out in one direction, a row or a column. Grid places items in rows and columns at the same time.'],
      ['Why does align-content not change anything?', 'It only affects multiple lines, so set flex-wrap to wrap and add enough boxes to fill more than one row.'],
      ['Can I type my own values?', 'Yes. Text fields such as gap, flex-basis and grid-template-columns accept any valid CSS value.'],
      ['Is the preview the same as a real browser?', 'Yes. The boxes are real HTML elements laid out by your browser using the CSS shown.']
    ],
    icon: '<rect x="3" y="3" width="7" height="18" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'
  },
  {
    slug: 'code-playground', cat: 'Developer tools', name: 'Code Playground',
    title: 'HTML, CSS & JS Code Playground - Live Online Editor',
    desc: 'Write HTML, CSS and JavaScript and see the result live with a console. Safe sandbox, share links, templates and download as one HTML file.',
    card: 'Live HTML, CSS and JS editor with console.',
    intro: 'Type HTML, CSS and JavaScript and see the result instantly in a sandboxed preview, with console output, errors, share links and download.',
    steps: ['Write your code in the HTML, CSS and JS tabs.', 'Watch the preview update, or press Run.', 'Check the console for logs and errors.', 'Share a link or download the HTML file.'],
    faq: [
      ['Is my code uploaded?', 'No. It runs in your browser and is saved only in this browser. A share link contains the code itself after the # sign, which browsers do not send to servers.'],
      ['Is it safe to run code from others?', 'The preview runs in a sandbox that cannot read this site, your cookies or saved data, and cannot redirect the page. Still, only run code you are willing to have running in a tab.'],
      ['Can I use libraries like jQuery or React?', 'Yes, when you are online, by adding a script tag with the library address in the HTML tab.'],
      ['Why did my loop stop?', 'Loops that run longer than 2.5 seconds are stopped to keep the page responsive.'],
      ['Does it work offline?', 'Yes, once the page has loaded, as long as your code does not load anything from the internet.']
    ],
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 13l-2 2 2 2M15 13l2 2-2 2"/>'
  },
  {
    slug: 'ip-subnet-calculator', cat: 'Developer tools', name: 'IP Subnet Calculator',
    title: 'IP Subnet Calculator - IPv4 CIDR, Mask & IPv6',
    desc: 'Calculate network, broadcast, host range, subnet and wildcard masks for any IPv4 CIDR, split subnets, size by hosts, plus IPv6 basics.',
    card: 'Network, broadcast, hosts and masks from CIDR.',
    intro: 'Enter an IP address with a prefix to get its network, broadcast address, usable hosts, masks and binary form, split it into subnets, or work with IPv6.',
    steps: ['Type an address such as 192.168.1.10/24.', 'Read the network, hosts, mask and broadcast.', 'Optionally split it into smaller subnets.', 'Copy the details or the subnet list.'],
    faq: [
      ['How many hosts does a /24 have?', '256 addresses, of which 254 can be used by devices. The first is the network address and the last is the broadcast address.'],
      ['What is CIDR notation?', 'The /number after an address is the prefix length: how many bits, from the left, belong to the network. /24 equals the mask 255.255.255.0.'],
      ['Why does /31 show 2 usable hosts?', 'RFC 3021 allows both addresses of a /31 to be used on point-to-point links, where no broadcast is needed.'],
      ['Does it support IPv6?', 'Yes, for the basics: expand and compress addresses, network range, first and last address, address type and counts.']
    ],
    icon: '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M5 16v-2h14v2"/>'
  },
  {
    slug: 'chmod-calculator', cat: 'Developer tools', name: 'Chmod Calculator',
    title: 'Chmod Calculator - Octal ↔ Symbolic Permissions',
    desc: 'Convert Linux file permissions between checkboxes, octal (755) and symbolic (rwxr-xr-x), with setuid, setgid, sticky bits and chmod commands.',
    card: 'Convert file permissions: 755 ↔ rwxr-xr-x.',
    intro: 'Tick read, write and execute for owner, group and others, or type 755 or rwxr-xr-x, and get the matching permissions, a plain explanation and the chmod command.',
    steps: ['Tick the boxes, or type an octal or symbolic value.', 'Add special bits if needed.', 'Read the explanation.', 'Copy the chmod command.'],
    faq: [
      ['What does 755 mean?', 'The owner can read, write and execute (7 = 4+2+1); the group and others can read and execute (5 = 4+1).'],
      ['What is the difference between 644 and 755?', '755 adds execute for everyone. Use 644 for normal files and 755 for folders and programs.'],
      ['What are setuid, setgid and sticky?', 'setuid and setgid make a program run with the file owner\'s or group\'s rights; setgid on a folder makes new files inherit its group; sticky on a folder lets only owners delete their own files.'],
      ['Does this change my files?', 'No. It only calculates. Run the copied command in your terminal to change a file.']
    ],
    icon: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M9 15h.01M12 15h.01M15 15h.01"/>'
  },
  {
    slug: 'chemical-equation-balancer', cat: 'Study tools', name: 'Chemical Equation Balancer',
    title: 'Chemical Equation Balancer - With Atom Check',
    desc: 'Balance chemical equations instantly, including ions, electrons, brackets and hydrates. Shows coefficients and an atom-by-atom check table.',
    card: 'Balance chemical equations with an atom check.',
    intro: 'Type a chemical equation and get the balanced version with the smallest whole-number coefficients, plus a table that checks every atom and the charge.',
    steps: ['Type the reactants, an = sign and the products.', 'Read the balanced equation.', 'Check the atom table.', 'Copy the result.'],
    faq: [
      ['How does it balance equations?', 'It writes one equation per element (and one for charge) and solves them exactly with linear algebra, then scales the answer to the smallest whole numbers.'],
      ['Can it balance redox equations?', 'Yes, if you include the ions, H+ or OH-, water and, for half equations, electrons (e-).'],
      ['How do I type charges?', 'Use ^ or braces: Fe^3+, SO4^2-, Cr2O7{2-}. A single + or - at the end also works, as in NH4+ or Cl-.'],
      ['Why do I get "cannot be balanced"?', 'No set of positive whole numbers makes the atoms match, usually because a formula is wrong or a substance is missing.']
    ],
    icon: '<path d="M12 3v18M5 21h14"/><path d="M5 7h14M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>'
  },
  {
    slug: 'molar-mass-calculator', cat: 'Study tools', name: 'Molar Mass Calculator',
    title: 'Molar Mass Calculator - g/mol, % Composition',
    desc: 'Find the molar mass of any chemical formula with element breakdown and percent composition. Brackets, hydrates, ions, and grams to moles.',
    card: 'Molar mass, % composition and grams to moles.',
    intro: 'Type a chemical formula to get its molar mass in g/mol, the mass and percentage of each element, and convert between grams, moles and particles.',
    steps: ['Type a chemical formula such as H2SO4.', 'Read the molar mass and element breakdown.', 'Enter grams or moles to convert.', 'Copy the result.'],
    faq: [
      ['What is molar mass?', 'The mass of one mole of a substance, in grams per mole. Numerically it is the sum of the atomic masses of all atoms in the formula.'],
      ['What is the molar mass of water?', '18.015 g/mol: 2 × 1.008 for hydrogen plus 15.999 for oxygen.'],
      ['How do I enter a hydrate?', 'Use a dot or a star, for example CuSO4·5H2O or CuSO4*5H2O.'],
      ['Which atomic weights are used?', 'IUPAC standard atomic weights (abridged), the same values most current textbooks use.']
    ],
    icon: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7 15h10"/>'
  },
  {
    slug: 'derivative-calculator', cat: 'Study tools', name: 'Derivative Calculator',
    title: 'Derivative Calculator with Steps - Free & Online',
    desc: 'Differentiate any function with step-by-step rules: product, quotient, chain. Higher and partial derivatives, tangent lines and a graph.',
    card: 'Derivatives with steps, tangent lines and graph.',
    intro: 'Type a function to get its derivative with each rule explained, plus higher derivatives, the tangent line at a point and a graph.',
    steps: ['Type a function such as x^2 sin(x).', 'Choose the variable and which derivative.', 'Read the answer and the steps.', 'Optionally enter a point for the slope and tangent line.'],
    faq: [
      ['Does it show the steps?', 'Yes. Each step names the rule used (power, product, quotient, chain and so on) and shows the derivative of that part.'],
      ['How do I know the answer is right?', 'Each first derivative is compared with a numerical derivative at several points, and a check mark confirms they match.'],
      ['Is log base 10 or natural?', 'log(x) is base 10 and ln(x) is the natural logarithm. Use log(x, b) for base b.'],
      ['Can it do implicit differentiation?', 'Not directly. It does partial derivatives: other letters are treated as constants.'],
      ['Does it work offline?', 'Yes, once the page has loaded. Everything runs in your browser.']
    ],
    icon: '<path d="M3 20c4 0 5-14 9-14s5 8 9 8"/><path d="M7 4l10 10"/>'
  },
  {
    slug: 'integral-calculator', cat: 'Study tools', name: 'Integral Calculator',
    title: 'Integral Calculator - Definite & Indefinite, Steps',
    desc: 'Find antiderivatives with steps, definite integrals with exact and numerical values, infinite limits and a shaded graph. Answers are verified.',
    card: 'Antiderivatives and definite integrals with steps.',
    intro: 'Type a function to find its antiderivative, with steps for common integrals, or switch to definite to get the area between two limits, including infinity.',
    steps: ['Type the function to integrate.', 'Choose indefinite or definite and enter the limits.', 'Read the answer and steps.', 'Check the shaded graph.'],
    faq: [
      ['Does it show steps?', 'Yes, for integrals solved by basic rules and substitution. For harder ones it names the usual technique and shows the answer is verified by differentiation.'],
      ['Can it do improper integrals?', 'Yes. Use inf or -inf as a limit. The value is computed numerically with an error estimate.'],
      ['Why is there no answer for e^(x^2)?', 'Some integrals have no antiderivative in elementary functions. Use a definite integral for a numerical value.'],
      ['How accurate are the decimal values?', 'Usually to 10 or more significant digits. The tool reports the estimated error.'],
      ['Is my work sent anywhere?', 'No. All calculations run in your browser.']
    ],
    icon: '<path d="M14 4c-2-1-4 0-4 3v10c0 3-2 4-4 3"/><path d="M15 10h5M15 14h5"/>'
  },
  {
    slug: 'probability-calculator', cat: 'Study tools', name: 'Probability Calculator',
    title: 'Probability Calculator - nCr, nPr, Binomial, Events',
    desc: 'Calculate combinations, permutations, factorials, two-event probabilities (independent or dependent), binomial probabilities and at-least-once chances.',
    card: 'nCr, nPr, binomial and two-event probability.',
    intro: 'Count combinations and permutations, combine the probabilities of two events, find binomial probabilities, or the chance of something happening at least once.',
    steps: ['Choose the kind of calculation.', 'Enter the numbers or probabilities.', 'Read the results and the formula used.'],
    faq: [
      ['What is the difference between nCr and nPr?', 'nCr counts selections where order does not matter; nPr counts arrangements where order matters. nPr = nCr × r!.'],
      ['How do I find P(A or B)?', 'P(A or B) = P(A) + P(B) − P(A and B). The tool works out P(A and B) from the relationship you choose.'],
      ['What is a binomial probability?', 'The chance of exactly k successes in n independent trials that each succeed with probability p.'],
      ['How big can n be?', 'Up to 5,000 for exact counting and 100,000 for the binomial distribution.']
    ],
    icon: '<rect x="3" y="3" width="13" height="13" rx="2"/><path d="M8 21h11a2 2 0 0 0 2-2V8"/><path d="M7 7h.01M12 12h.01M9.5 9.5h.01"/>'
  },
  {
    slug: 'z-score-calculator', cat: 'Study tools', name: 'Z-Score Calculator',
    title: 'Z-Score Calculator - Percentile, p-Value & Curve',
    desc: 'Convert values to z-scores and percentiles, z-scores to p-values, probabilities to z (critical values), with a shaded normal distribution curve.',
    card: 'Z-scores, percentiles and p-values with a curve.',
    intro: 'Find a z-score from a value, mean and standard deviation, turn z-scores into probabilities and p-values, or find the z for any probability, with a shaded normal curve.',
    steps: ['Choose what you want to find.', 'Enter the value and mean and standard deviation, a z-score or a probability.', 'Read the z-score, percentile and p-values.', 'Check the shaded curve.'],
    faq: [
      ['What is a z-score?', 'The number of standard deviations a value lies above (positive) or below (negative) the mean: z = (x − μ) / σ.'],
      ['What z-score is 95% confidence?', '±1.96 for a two-sided 95% interval. For a one-sided 95% bound it is 1.645.'],
      ['How do I get a p-value from a z-score?', 'Choose Probability from a z-score. The one-tailed p-value is the smaller tail area and the two-tailed p-value is double that.'],
      ['Does it replace a z-table?', 'Yes, with more decimals and both tails at once.']
    ],
    icon: '<path d="M2 20h20"/><path d="M3 19c3 0 4-13 9-13s6 13 9 13"/><path d="M15 9v11"/>'
  },
  {
    slug: 'truth-table-generator', cat: 'Study tools', name: 'Truth Table Generator',
    title: 'Truth Table Generator - Logic & Boolean Expressions',
    desc: 'Make truth tables for logic expressions with AND, OR, NOT, XOR, implies and iff. Step columns, tautology check, minterms and simplified form.',
    card: 'Truth tables for any logic expression.',
    intro: 'Type a logic or Boolean expression to get its full truth table with step columns, a tautology check, minterms and a simplified formula.',
    steps: ['Type an expression such as (A and B) or not C.', 'Read the truth table and summary.', 'Compare expressions by separating them with commas.', 'Copy the table or the simplified formula.'],
    faq: [
      ['Which operators can I use?', 'AND, OR, NOT, XOR, NAND, NOR, implies (→) and iff (↔), as words, symbols like ∧ ∨ ¬, programming symbols like && || !, or digital notation like AB + C\'.'],
      ['What is a tautology?', 'An expression that is true in every row of its truth table, such as p or not p.'],
      ['How is the formula simplified?', 'With the Quine–McCluskey method, which finds a minimal sum of products for up to 10 variables.'],
      ['How many variables can I use?', 'Up to 12, which gives 4,096 rows.']
    ],
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18M13 13l2 2 3-4"/>'
  },
  {
      slug: 'word-search-maker', cat: 'Study tools', name: 'Word Search Maker',
      title: 'Word Search Maker - Printable Puzzles with Answer Key',
      desc: 'Make printable word search puzzles from your own word list, in any language. Choose difficulty and grid size, and get a PDF with the answer key.',
      card: 'Make printable word searches with answers.',
      intro: 'Type your words and get a word search puzzle in seconds. Choose easy, medium or hard, pick a grid size or let it size itself, and download a PDF with the puzzle and a separate answer key. Words in any language work, including Arabic, Hindi, Russian and Chinese.',
      steps: ['Type a title and your words, one per line or separated by commas.', 'Choose the difficulty, grid size and letter style.', 'Press Make puzzle, then New layout until you like it.', 'Download the PDF with the puzzle and the answer key, or save a PNG.'],
      faq: [
        ['Can I use words in other languages?', 'Yes. The empty squares are filled with letters from the same alphabet as your words, so the puzzle looks natural in Spanish, Russian, Greek, Arabic, Hindi and more. Arabic and Hebrew words read right to left.'],
        ['What do the difficulty levels mean?', 'Easy hides words across and down only. Medium adds diagonals. Hard also hides words backwards, in all eight directions.'],
        ['Can I make different versions for a class?', 'Yes. Choose how many versions you want. Each one has the same words in a different layout, and each gets its own answer page.'],
        ['How many words can I use?', 'Up to 80 words, each with 2 to 30 letters. Spaces and hyphens inside a word are removed in the grid but stay in the word list.'],
        ['Is the answer key included?', 'Yes. The PDF has the puzzle pages first and the answer pages after them, with every word circled.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h2M11 8h2M15 8h2M7 12h2M15 12h2M7 16h2M11 16h2"/><rect x="9.5" y="10.5" width="9" height="3" rx="1.5" transform="rotate(45 14 12)"/>'
  },
  {
      slug: 'crossword-maker', cat: 'Study tools', name: 'Crossword Maker',
      title: 'Crossword Puzzle Maker - Free Printable with Answer Key',
      desc: 'Make a crossword from your own words and clues. The grid is laid out and numbered for you. Download a printable PDF with Across, Down and the answers.',
      card: 'Turn words and clues into a printable crossword.',
      intro: 'Type each answer with its clue and the Crossword Maker builds the grid for you: it finds where the words cross, numbers the squares and writes the Across and Down clues. Download a PDF with the puzzle and a separate answer key. Answers can be in any language.',
      steps: ['Type one answer and clue per line, like: planet - Earth is one of these.', 'Press Make crossword. Press Try another layout to get a different grid.', 'Press Show answers to check it.', 'Download the PDF with the puzzle and the answer key.'],
      faq: [
        ['How do I write the clues?', 'One per line: the answer, then a dash, colon or tab, then the clue. For example "oxygen - Gas we breathe in" or "atom: Tiny building block of matter".'],
        ['Why was a word left out?', 'Every word must cross another word. A word that shares no letters with the others, or whose crossings are all blocked, is left out and listed. Try another layout or add words that share letters.'],
        ['Can answers have two words?', 'Yes. The space is removed in the grid and the clue shows the word lengths, like (5,6).'],
        ['Does it work in other languages?', 'Yes. Answers and clues can be in any language. Arabic and Hebrew crosswords read right to left.'],
        ['How many words can I use?', 'From 2 to 60 answers, each up to 25 letters. 10 to 25 words make the nicest puzzles.']
      ],
      icon: '<rect x="3" y="3" width="6" height="6"/><rect x="9" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="9" y="9" width="6" height="6"/><rect x="9" y="15" width="6" height="6"/><path d="M4.5 4.5h1"/>'
  },
  {
      slug: 'sudoku-generator', cat: 'Study tools', name: 'Sudoku Generator',
      title: 'Sudoku Generator - Play, Print and Solve Sudoku Free',
      desc: 'Make new sudoku puzzles with exactly one solution at easy, medium, hard or expert level. Play online, print PDF puzzle books with answers, or solve any sudoku.',
      card: 'Make, play, print and solve sudoku.',
      intro: 'Generate fresh sudoku puzzles that always have exactly one solution, graded easy, medium, hard or expert by the solving methods they need. Play right here with notes, hints and mistake checks, print up to 100 puzzles with answers as a PDF, or type in a puzzle from a book and solve it.',
      steps: ['Choose the difficulty.', 'Play: tap a square and a number; use notes, check and hints.', 'Print: choose how many puzzles and how many per page, then make the PDF with answers.', 'Solve: type or paste a puzzle and press Solve.'],
      faq: [
        ['Does every puzzle have one solution?', 'Yes. Each puzzle is checked by a solver, and a number is only removed if the puzzle still has exactly one solution.'],
        ['How is difficulty decided?', 'Easy and medium puzzles can be solved by finding the only place or the only number for a square. Hard puzzles need techniques like pairs and pointing. Expert puzzles need even more advanced logic.'],
        ['Is my game saved?', 'Yes. Your current game, notes and time are saved on this device, so you can close the page and continue later.'],
        ['Can it solve a puzzle from a newspaper?', 'Yes. Open Solve, type the numbers on the board or paste 81 digits with 0 for empty squares. It also tells you if the puzzle has no solution or more than one.'],
        ['Can I print a puzzle book?', 'Yes. Print up to 100 puzzles, 1 to 6 per page, with the answers at the end.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/><path d="M5.5 6.5h1M17 12h1.5M11.5 18h1"/>'
  },
  {
      slug: 'maze-generator', cat: 'Study tools', name: 'Maze Generator',
      title: 'Maze Generator - Printable Square and Circle Mazes',
      desc: 'Make printable mazes in rectangle or circle shapes, from easy to expert. Every maze has one solution. Download a PDF with many mazes and the answers.',
      card: 'Printable square and round mazes with answers.',
      intro: 'Create a new maze with one click: a rectangle or a round maze, easy to expert, with long winding paths or many short dead ends. Show the solution on screen, save a PNG, or print up to 50 different mazes in one PDF with the solutions at the end.',
      steps: ['Choose Rectangle or Circle and a difficulty.', 'Pick the path style, or choose your own size.', 'Press New maze until you like it, and Show solution to check.', 'Set how many mazes to print and download the PDF.'],
      faq: [
        ['Can every maze be solved?', 'Yes. Every maze is a "perfect" maze: there is exactly one path between any two points, so there is always one route from start to finish.'],
        ['What do the path styles mean?', 'Long winding paths make long corridors that twist around. Many short dead ends make lots of side branches, which feels harder near the start.'],
        ['How big can a maze be?', 'Rectangles up to 100 × 100 squares and circles up to 50 rings.'],
        ['Where are the start and finish?', 'Green marks the start and red marks the finish. Rectangle mazes go from top to bottom; circle mazes go from the outside to the centre.'],
        ['Are the solutions included?', 'Yes, on pages at the end of the PDF, unless you turn them off.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h6v6M15 3v6h-3M21 15h-6v6M9 21v-3"/>'
  },
  {
      slug: 'quote-image-maker', cat: 'Social media tools', name: 'Quote Image Maker',
      title: 'Quote Image Maker - Quote Pictures for Instagram and Stories',
      desc: 'Turn a quote into a shareable image. Pick a background, font and size for posts, stories or link previews, add the author and your handle, and download.',
      card: 'Turn a quote into a shareable image.',
      intro: 'Type a quote and its author and get a stylish picture ready to post. Choose a gradient, your own colour or a photo as the background, pick a font and size for square posts, portrait posts, stories or landscape posts, add your name or handle, and download a PNG or JPG.',
      steps: ['Type the quote and the author.', 'Choose the size for where you will post it.', 'Pick a background, font and alignment, or press Surprise me.', 'Download the PNG or JPG, or copy it.'],
      faq: [
        ['Which sizes are there?', 'Square post 1080 × 1080, portrait post 1080 × 1350, story or reel 1080 × 1920, landscape post 1600 × 900 and link preview 1200 × 628.'],
        ['Can I use my own photo?', 'Yes. Add a photo and use the slider to darken it so the text stays easy to read.'],
        ['Does it work in other languages?', 'Yes. Arabic and Hebrew quotes are written right to left, and Chinese, Japanese, Hindi and other scripts use your device\'s fonts.'],
        ['What if my quote is long?', 'The text shrinks to fit. If it is still too long, you will see a warning; choose the Story size for long quotes.'],
        ['Can I share it straight away?', 'Press Copy image and paste it into your post or chat, or download it first.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10c0-1.5 1-2.5 2.5-2.5M8 10v3h3v-3H8zM13 10c0-1.5 1-2.5 2.5-2.5M13 10v3h3v-3h-3z"/><path d="M8 17h8"/>'
  },
  {
      slug: 'printable-calendar', cat: 'Generators', name: 'Printable Calendar',
      title: 'Printable Calendar Maker - Monthly or Yearly PDF, Any Year',
      desc: 'Make a printable monthly or yearly calendar for any year in your language. Week starts on your local day. Add your own holidays and birthdays. Free PDF.',
      card: 'Monthly or yearly calendars to print, any language.',
      intro: 'Make a calendar for any year from 1600 to 2600. Choose one month per page or the whole year on one page, the language for month and day names, and whether the week starts on Monday, Sunday or Saturday. Add your own holidays, birthdays and events, pick a style and colour, and download a PDF.',
      steps: ['Choose one month per page or the whole year, then the year and months.', 'Pick the language and the first day of the week.', 'Add your own holidays, birthdays and events (optional).', 'Choose a style, colour and paper, then download the PDF.'],
      faq: [
        ['Which holidays are included?', 'None are added for you, because holidays differ by country, region and faith. Type the ones you want, such as "12-25 Holiday" for every year or "2026-03-20 School trip" for one date.'],
        ['Which day does the week start on?', 'By default the day used in your region, for example Monday in most of Europe, Sunday in the USA and Saturday in some Middle Eastern countries. You can change it.'],
        ['Can I make it in my language?', 'Yes. Month and day names come in more than 25 languages, including Arabic, Hindi, Chinese, Japanese and Russian, and Arabic calendars run right to left.'],
        ['Can I print week numbers?', 'Yes. Turn on week numbers to show ISO week numbers next to each week.'],
        ['Which paper sizes work?', 'A4 and US Letter, in landscape or portrait.']
      ],
      icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M7 13h2M11 13h2M15 13h2M7 17h2M11 17h2"/>'
  },
  {
      slug: 'paper-generator', cat: 'Generators', name: 'Paper Generator',
      title: 'Printable Paper - Lined, Graph, Dot, Isometric, Music',
      desc: 'Print lined, graph, dot grid, isometric, music staff, handwriting or Cornell notes paper. Set exact spacing in mm or inches. Free PDF in A4 or Letter.',
      card: 'Lined, graph, dot and music paper to print.',
      intro: 'Make your own printable paper with exact spacing. Choose lined, graph, dot grid, isometric, music staff, handwriting practice or Cornell notes, set the spacing in millimetres or inches, and download a vector PDF of up to 200 pages that prints sharp on any printer.',
      steps: ['Choose the type of paper.', 'Set the spacing in mm or inches, and the colour and thickness of the lines.', 'Choose the paper size, margins and number of pages.', 'Download the PDF and print it at 100% (actual size).'],
      faq: [
        ['Will the spacing be exact?', 'Yes, as long as you print at 100% or "Actual size". With "Fit to page" the printer shrinks the page a little.'],
        ['What spacing is college rule?', 'About 7.1 mm (9/32 in). Wide rule is about 8.7 mm (11/32 in) and narrow rule about 6.4 mm (1/4 in).'],
        ['Can I make engineering graph paper?', 'Yes. Choose Graph, set the square size to 1 mm, and add a bold line every 10 squares.'],
        ['What is handwriting paper?', 'Rows with a top line, a dashed middle line and a baseline, with space for letters that go below the line. It is used to learn to write.'],
        ['Which paper sizes are there?', 'A4, US Letter, US Legal, A5 and A3, in portrait or landscape.']
      ],
      icon: '<path d="M6 3h12v18H6z"/><path d="M6 8h12M6 12h12M6 16h12M9 3v18"/>'
  },
  {
      slug: 'signature-generator', cat: 'Generators', name: 'Signature Generator',
      title: 'Signature Generator - Handwritten Signature PNG, Free',
      desc: 'Type your name to see it in 10 handwritten signature styles, or draw your own. Download a transparent PNG or SVG for documents and emails.',
      card: 'Make a handwritten-style signature image.',
      intro: 'Type your name and see it written in ten handwriting styles, from elegant script to casual pen. Choose ink colour, slant and an underline flourish, then download a transparent PNG or a sharp SVG. Prefer your real signature? Draw it with a finger, stylus or mouse.',
      steps: ['Type your name, or switch to Draw it and sign in the box.', 'Pick a style, ink colour and slant.', 'Choose an image size.', 'Download the transparent PNG or SVG and add it to your document.'],
      faq: [
        ['Is a typed signature legally valid?', 'In many places an electronic signature can be valid when the signer intends to sign, but rules differ by country and document. For contracts and official forms, check what the receiver accepts.'],
        ['Is the background transparent?', 'Yes. The PNG has a transparent background, so it sits nicely on any document or email.'],
        ['Can I use letters with accents?', 'Yes, the styles include common accented Latin letters such as é, ñ, ü and ç. For other alphabets, use Draw it.'],
        ['Is my signature saved anywhere?', 'No. It is made in your browser and is not uploaded or stored.'],
        ['How do I add it to a PDF?', 'Download the PNG, then use our Sign PDF tool or your PDF app to place the picture.']
      ],
      icon: '<path d="M3 17c3-1 4-9 6-9s-1 9 2 9 3-5 5-5 1 4 3 4 2-1 2-1"/><path d="M3 21h18"/>'
  },
  {
      slug: 'logo-maker', cat: 'Generators', name: 'Logo Maker',
      title: 'Free Logo Maker - Simple Text and Icon Logos, PNG and SVG',
      desc: 'Make a simple logo from your name, an icon and a shape. Pick fonts and colours, then download a transparent PNG or a sharp SVG. No sign-up, no watermark.',
      card: 'Make a simple text and icon logo.',
      intro: 'Type your business or project name, pick one of 30 simple icons or your initials, choose a shape, layout, font and colours, and download your logo as a transparent PNG or an SVG that stays sharp at any size. Text is turned into shapes, so the SVG looks the same on every computer.',
      steps: ['Type your name and an optional tagline.', 'Pick an icon or your initials, a shape and a layout.', 'Choose a font and a colour set, or your own colours.', 'Download the PNG or SVG.'],
      faq: [
        ['Can I use the logo for my business?', 'Yes. The icons were drawn for this tool and the fonts are open-licence fonts that allow commercial use. Check that your logo is not too close to a trademark someone else already uses.'],
        ['What is the difference between PNG and SVG?', 'PNG is a picture for websites, documents and social media. SVG is a vector file that stays sharp at any size, for printing, signs and designers.'],
        ['Is the background transparent?', 'Yes, unless you choose White, Light tint or Dark as the background.'],
        ['Can I write my name in another alphabet?', 'Yes. Latin, Greek and Cyrillic letters become shapes. Other alphabets, such as Arabic or Chinese, are written with your device\'s font.'],
        ['Can I make a square profile picture?', 'Yes. Choose "Square (profile picture)" before downloading.']
      ],
      icon: '<circle cx="8" cy="12" r="5"/><path d="M6 12l2-2 2 2-2 2z"/><path d="M15 10h6M15 14h4"/>'
  },
  {
      slug: 'poster-maker', cat: 'Generators', name: 'Poster Maker',
      title: 'Poster and Flyer Maker - Free Printable PDF and PNG',
      desc: 'Make posters and flyers for events, sales, notices, parties and classes. Add text and a photo, pick colours, then download a PDF to print or a PNG to share.',
      card: 'Make posters and flyers to print or share.',
      intro: 'Choose a template for an event, sale, notice, party, class or photo poster, type your headline and details, add a picture and pick colours. Download a PDF for printing on A4, US Letter or A3, or a PNG sized for social media posts and stories.',
      steps: ['Pick a template. Sample text is filled in for you.', 'Write your headline, details and contact line, and add a photo if you like.', 'Choose colours, a headline font and the size.', 'Download a PDF to print or a PNG to share.'],
      faq: [
        ['Which sizes can I make?', 'A4, US Letter and A3 paper, plus square (1080 × 1080), portrait (1080 × 1350), story (1080 × 1920) and wide (1920 × 1080) for social media and screens.'],
        ['Can I add my own photo?', 'Yes. Add a JPG, PNG or WebP picture. The Photo template uses it as the full background with your text on top.'],
        ['Will long text fit?', 'Text shrinks to fit its space. If it still does not fit you see a warning, so you can shorten it or choose a bigger size.'],
        ['Can I write in my language?', 'Yes, including Arabic, Hindi, Chinese, Russian and accented letters. The PDF keeps the text correct.'],
        ['Is there a watermark?', 'No. It is free, with no watermark and no sign-up.']
      ],
      icon: '<rect x="5" y="2" width="14" height="20" rx="1"/><path d="M8 6h8M8 9h6"/><circle cx="12" cy="15" r="3"/>'
  },
  {
      slug: 'bingo-card-generator', cat: 'Generators', name: 'Bingo Card Generator',
      title: 'Bingo Card Generator - Printable 75, 90-Ball and Word Cards',
      desc: 'Make unique printable bingo cards: 75-ball, 90-ball tickets or your own words. Up to 500 cards in one PDF, plus a caller\'s sheet and an on-screen caller.',
      card: 'Print unique bingo cards with a caller sheet.',
      intro: 'Make as many different bingo cards as you need, up to 500 in one PDF. Choose classic 75-ball cards, 90-ball tickets, or cards with your own words for classrooms, parties and baby showers. Every card is unique and numbered, a caller\'s sheet is included, and a fair on-screen caller is built in.',
      steps: ['Choose 75-ball, 90-ball or your own words.', 'Type a title and how many cards you need.', 'Press Make cards to see the first page.', 'Download the PDF and use the caller on screen or the printed sheet.'],
      faq: [
        ['Are all cards different?', 'Yes. No two cards are the same. With a short word list, some cards may share the same words in a different order, and you are told when that happens.'],
        ['How do 75-ball cards work?', 'Each card is 5 × 5 under B I N G O. B has 1 to 15, I 16 to 30, N 31 to 45, G 46 to 60 and O 61 to 75, with a free square in the middle.'],
        ['How do 90-ball tickets work?', 'Each ticket has 3 rows and 9 columns. Every row has 5 numbers, column 1 has 1 to 9, column 2 has 10 to 19 and so on up to 90.'],
        ['How many words do I need?', 'At least as many as squares on a card: 24 for 5 × 5 with a free square, 16 for 4 × 4, 8 for 3 × 3 with a free square. More words make cards more different.'],
        ['Is the caller fair?', 'Yes. It uses your browser\'s secure random numbers, never repeats a call, and every number or word has the same chance.']
      ],
      icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/><circle cx="12" cy="12" r="1.5"/>'
  },
  {
      slug: 'giveaway-picker', cat: 'Generators', name: 'Giveaway Picker',
      title: 'Giveaway Picker - Random Comment Winner, Fair and Free',
      desc: 'Pick random giveaway winners from pasted names or comments. Removes duplicates, filters by keyword, picks backups, and uses secure random numbers.',
      card: 'Pick fair random winners from names or comments.',
      intro: 'Paste the names or comments from your giveaway, one per line, and pick winners fairly. The tool can take the @username from each comment, keep one entry per person, only count comments with a keyword or hashtag, leave out your own account, and pick backup winners. Winners are drawn with your browser\'s secure random numbers.',
      steps: ['Paste entries, one per line (names or copied comments).', 'Choose how to read each line and set any filters.', 'Choose the number of winners and backups.', 'Press Pick winners, then copy the results.'],
      faq: [
        ['Is the draw really random and fair?', 'Yes. It uses crypto.getRandomValues, the browser\'s secure random number generator, without bias, so every valid entry has exactly the same chance.'],
        ['Can it remove duplicate entries?', 'Yes. With "One entry per person" on, each name or @username counts once, ignoring capital letters, so commenting many times does not raise someone\'s chance.'],
        ['How do I get the comments?', 'Copy them from the app or website and paste them here, or paste a list exported from a comment tool. Each comment should be on its own line.'],
        ['Can I pick backup winners?', 'Yes. Backups are drawn in order in case a winner does not reply.'],
        ['Is my list uploaded?', 'No. Everything happens in your browser.']
      ],
      icon: '<path d="M8 3h8v6a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3.5 4.5M16 5h3a3 3 0 0 1-3.5 4.5M12 13v4M8 21h8M10 17h4l1 4H9z"/>'
  },
  {
      slug: 'secret-santa-generator', cat: 'Generators', name: 'Secret Santa Generator',
      title: 'Secret Santa Generator - Draw Names with Private Links',
      desc: 'Draw names for a gift exchange. Set who cannot draw whom, add a budget and date, then send everyone a private link or print folded slips. No sign-up.',
      card: 'Draw names for a gift exchange, no sign-up.',
      intro: 'Type the names of everyone in your gift exchange, add pairs who should not draw each other, and press Draw names. Nobody gets themselves. Each person gets a private link that shows only who they are giving to, with the budget, date and your message, or you can print slips to fold and hand out. The organiser can take part too.',
      steps: ['Type the names, one per line.', 'Add pairs who should not draw each other, and the budget, date and message.', 'Press Draw names.', 'Send each person their private link, or print the slips.'],
      faq: [
        ['How do the private links work?', 'Each link holds only that person\'s own result, scrambled inside the link, so the page can show it without any server or account. Send each person only their own link.'],
        ['Can the organiser take part?', 'Yes. The organiser sees only the list of names and links, not who got whom, unless they choose to show all pairs.'],
        ['Can I stop couples drawing each other?', 'Yes. Add one pair per line, like "Anna, Ben". By default it works both ways.'],
        ['Is the draw fair?', 'Yes. Names are shuffled with secure random numbers until every rule is met, so every allowed result is equally likely.'],
        ['What if I draw again?', 'A new draw changes everyone\'s result, so links you already sent become out of date. Your last draw is kept on this device.']
      ],
      icon: '<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M3 13h18M12 9v12"/><path d="M12 9c-1.5-4-6-4-5-1 .6 1.4 5 1 5 1zM12 9c1.5-4 6-4 5-1-.6 1.4-5 1-5 1z"/>'
  },
  {
      slug: 'habit-tracker', cat: 'Generators', name: 'Habit Tracker',
      title: 'Habit Tracker - Free Online and Printable Monthly Tracker',
      desc: 'Track daily habits on your phone or computer with streaks and monthly progress, and print a monthly habit tracker PDF. No account needed.',
      card: 'Track daily habits and print a monthly sheet.',
      intro: 'Add the habits you want to build, such as drinking water, reading or walking, and tick a box each day you do them. See your current streak, best streak and monthly completion. Your ticks are saved on this device, and you can print a monthly tracker sheet, blank or with your ticks.',
      steps: ['Add a habit and press Add.', 'Tick the box for each day you keep the habit.', 'Watch your streaks and monthly completion grow.', 'Download a printable PDF for the month.'],
      faq: [
        ['Where are my ticks saved?', 'In this browser on this device. Nothing is uploaded. Use "Back up my data" to keep a copy.'],
        ['How is a streak counted?', 'It counts the days in a row you ticked, up to today. If today is not ticked yet, the streak counts up to yesterday, so it does not break before the day is over.'],
        ['How many habits can I track?', 'Up to 20.'],
        ['Can I print a blank tracker?', 'Yes. The PDF lists your habits with empty boxes, plus extra empty rows to write in more habits by hand.'],
        ['Can I go back to past months?', 'Yes. Use the arrows or pick a month to see and change earlier months.']
      ],
      icon: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18"/><path d="M7 13l1.5 1.5L11 12M7 17l1.5 1.5L11 16M14 13h3M14 17h3"/>'
  },
  {
      slug: 'label-sheet-maker', cat: 'Generators', name: 'Label Sheet Maker',
      title: 'Label Maker - Print Address Labels on A4 and Letter Sheets',
      desc: 'Print address and name labels on common A4 and US Letter label sheets, or a custom size. Type labels or import a CSV. Exact PDF, start at any label.',
      card: 'Print address labels from a list or CSV.',
      intro: 'Make printable label sheets for addresses, names, jars and parcels. Pick a common A4 or US Letter layout or enter your own measurements, type your labels or import a spreadsheet saved as CSV, and download a PDF with every label in exactly the right place. Start at any label to use up part-used sheets.',
      steps: ['Choose your label sheet layout, or enter a custom size.', 'Type your labels, use the same text on all, or import a CSV.', 'Set the text size, alignment and start position.', 'Download the PDF and print at 100% (actual size).'],
      faq: [
        ['Which label sheets work?', 'Common layouts such as A4 21 per sheet (63.5 × 38.1 mm), 14, 24, 8, 30 and 65 per sheet, and US Letter 30 per sheet (2⅝ × 1 in), 20, 14, 10 and 80 per sheet. For others, choose Custom size and type the measurements from the box.'],
        ['How do I print addresses from a spreadsheet?', 'Save the spreadsheet as CSV, choose "From a spreadsheet (CSV)" and pick the file. Then write the layout using column names in curly brackets, like {Name} and {City}.'],
        ['Can I use a sheet that is partly used?', 'Yes. Set "Start at label number" to the first empty label. Labels are counted across, then down.'],
        ['My print is a little off. What can I do?', 'Print at 100% ("Actual size"), not "Fit to page". If it is still off, move everything right or down by a millimetre or two and print a test on plain paper.'],
        ['Can I write in other languages?', 'Yes, any language, including Arabic and Hebrew right to left.']
      ],
      icon: '<rect x="3" y="2" width="18" height="20" rx="1"/><rect x="5" y="5" width="6" height="3" rx="1"/><rect x="13" y="5" width="6" height="3" rx="1"/><rect x="5" y="10.5" width="6" height="3" rx="1"/><rect x="13" y="10.5" width="6" height="3" rx="1"/><rect x="5" y="16" width="6" height="3" rx="1"/><rect x="13" y="16" width="6" height="3" rx="1"/>'
  },
  {
    slug: 'spell-checker', cat: 'Text tools', name: 'Spell Checker',
    title: 'Spell Checker - Check Spelling in 12 Languages Online',
    desc: 'Check spelling in English, Spanish, French, German, Portuguese, Italian, Dutch, Russian, Turkish and Indonesian. Mistakes underlined, suggestions shown.',
    card: 'Find spelling mistakes in 12 languages.',
    intro: 'Paste your text and every word the dictionary does not know is underlined. Click it for suggestions, fix it in one click, ignore it, or add it to your own dictionary. It uses Hunspell, the spell checker inside LibreOffice and Firefox, running entirely in your browser.',
    steps: ['Choose the language of your text.', 'Type or paste your text, then press Check spelling (it also checks as you type).', 'Click an underlined word to see suggestions and pick the right one.', 'Ignore words that are fine, or add names and terms to your dictionary, then copy the corrected text.'],
    faq: [
      ['Which languages are supported?', 'English (US and UK), Spanish, French, German, Portuguese (Brazil and Portugal), Italian, Dutch, Russian, Turkish and Indonesian. Each dictionary downloads only when you first use it.'],
      ['Is my text uploaded?', 'No. The dictionary is downloaded to your browser and the checking happens on your device. Your text is never sent anywhere.'],
      ['Does it check grammar?', 'No. It finds words that are not in the dictionary. Real words used wrongly, such as their instead of there, are not flagged.'],
      ['Where are the words I add saved?', 'In this browser only. They are accepted in every language and you can remove them under My dictionary.'],
      ['Why is a correct word underlined?', 'Names, brands, new words and technical terms are often missing from dictionaries. Ignore the word or add it to your dictionary.']
    ],
    icon: '<path d="M3 15l3-9 3 9M4.2 12h3.6"/><path d="M12 6v9h2.5a2.2 2.2 0 0 0 0-4.5H12M12 10.5h2a2.2 2.2 0 0 0 0-4.5h-2"/><path d="M14 19l2 2 5-5"/>'
  },
  {
    slug: 'url-slug-generator', cat: 'Text tools', name: 'URL Slug Generator',
    title: 'URL Slug Generator - Turn Titles into Clean URLs, Any Language',
    desc: 'Turn any title into a clean, SEO-friendly URL slug. Transliterates Cyrillic, Greek, Arabic, Chinese and more. Separators, max length and bulk mode.',
    card: 'Make clean URL slugs from titles in any language.',
    intro: 'Type a page title and get a short, readable web address part such as 10-tips-for-cafe-owners. Accents are removed and other alphabets are turned into Latin letters, so titles in Russian, Greek, Arabic, Hindi, Chinese and many more languages work too. Paste many titles to make many slugs at once.',
    steps: ['Type or paste a title. For many slugs, put one title on each line.', 'Pick a separator and a maximum length, and choose options like lowercase or removing short words.', 'Check the slug, or the full address preview if you entered your site address.', 'Copy the slug, or copy and download all of them as CSV.'],
    faq: [
      ['What is a URL slug?', 'The readable part of a web address that names a page, such as how-to-bake-bread in example.com/blog/how-to-bake-bread.'],
      ['Can I keep letters in my own language?', 'Yes. Tick Keep non-Latin letters to make a Unicode slug such as привет-мир. Most modern sites support them, but they appear encoded (%D0%BF…) when copied.'],
      ['How are other alphabets converted?', 'Cyrillic, Greek, Arabic, Hebrew, Devanagari, Thai, Korean, Japanese kana and Chinese (pinyin) are turned into Latin letters with common romanization rules.'],
      ['Why were Japanese kanji left out?', 'Kanji can be read in several ways and need a dictionary. Write those words in kana or Latin letters to include them.'],
      ['Does it keep repeated slugs apart?', 'Yes. In bulk mode, repeated slugs get -2, -3 and so on, unless you turn that off.']
    ],
    icon: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>'
  },
  {
    slug: 'markdown-table-generator', cat: 'Text tools', name: 'Markdown Table Generator',
    title: 'Markdown Table Generator - Paste from Excel, Get Markdown/HTML',
    desc: 'Build Markdown and HTML tables in an editable grid. Paste from Excel, Google Sheets or CSV, set column alignment and copy neatly aligned output.',
    card: 'Build Markdown tables from a grid or Excel.',
    intro: 'Type into a spreadsheet-like grid, or paste cells straight from Excel, Google Sheets, LibreOffice or a CSV file, and get a tidy Markdown table for GitHub, README files, docs and forums. Set the alignment of each column and switch to HTML with one click.',
    steps: ['Type in the grid, or paste cells copied from a spreadsheet into any cell.', 'Add or remove rows and columns, and choose the alignment of each column.', 'Pick Markdown or HTML output and check the preview.', 'Copy the table or download it as a .md or .html file.'],
    faq: [
      ['Can I paste from Excel or Google Sheets?', 'Yes. Copy the cells and paste them into any cell of the grid; they fill the grid from that cell. You can also paste CSV, semicolon-separated data or an existing Markdown table under Import.'],
      ['Does it handle pipes and line breaks in cells?', 'Yes. A | in a cell is written as \\| so it does not break the table, and line breaks become <br>.'],
      ['What does Line up columns do?', 'It pads cells with spaces so the columns line up in plain text, which is easier to read and edit. Chinese, Japanese and Korean characters count as two columns wide.'],
      ['Is there a size limit?', 'You can import up to 100 columns and thousands of rows. The editor shows the first 500 rows, and the output always contains all of them.']
    ],
    icon: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16M15 4v16"/>'
  },
  {
    slug: 'invisible-character', cat: 'Text tools', name: 'Invisible Character',
    title: 'Invisible Character - Copy Blank Text & Remove Hidden Characters',
    desc: 'Copy invisible characters like Hangul Filler and zero-width space for blank names and messages, or find and remove hidden characters from any text.',
    card: 'Copy blank characters or remove hidden ones.',
    intro: 'Copy a blank character for an empty name, message or bio with one click, and learn what each one is for. Or paste any text to reveal hidden characters, such as zero-width spaces, byte order marks, direction marks and special spaces, and remove them safely while keeping the joiners that emoji and some languages need.',
    steps: ['To copy, choose how many you need and press Copy on a character.', 'Paste it where you need it: a game name, a message or a social profile.', 'To clean text, paste it into Text to check; hidden characters are marked in red and orange.', 'Press Remove hidden characters, then copy the cleaned text.'],
    faq: [
      ['Which invisible character works for blank names?', 'Hangul Filler (U+3164) and Braille Pattern Blank (U+2800) work in most apps and games. Apps can change their rules, so if one is removed, try another.'],
      ['Why does my text have hidden characters?', 'They come along when copying from web pages, PDFs, chat apps and word processors. They can break passwords, code, search and spreadsheets without being visible.'],
      ['Will cleaning break emoji or other languages?', 'No. By default, joiners inside emoji like 👨‍👩‍👧 and in Persian, Arabic and Indic words are kept. You can change that with the options.'],
      ['Is my text sent anywhere?', 'No. Everything happens in your browser.']
    ],
    icon: '<path d="M3 3l18 18"/><path d="M10.6 5.1A10 10 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3.2 3.9M6.6 6.6C3.9 8.4 2 12 2 12s4 7 10 7a9.7 9.7 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>'
  },
  {
    slug: 'transliteration', cat: 'Text tools', name: 'Transliteration Tool',
    title: 'Transliteration Tool - Cyrillic, Greek, Arabic, Hindi to Latin',
    desc: 'Convert Cyrillic, Greek, Arabic, Hebrew, Devanagari, Thai, Korean, Japanese kana and Chinese into Latin letters with standard systems like ISO 9 and Hepburn.',
    card: 'Convert other alphabets into Latin letters.',
    intro: 'Paste text in another writing system and read it in Latin letters straight away. Choose the romanization system you need, such as ISO 9, ALA-LC or passport style for Cyrillic, ELOT 743 for Greek, IAST for Sanskrit and Hindi, Hepburn for Japanese and pinyin for Chinese. Mixed text works too: each script is detected and converted.',
    steps: ['Paste or type your text, or try one of the examples.', 'The scripts in your text are detected and converted as you type.', 'Pick the system you need for each script, and tick Plain ASCII if you want no accents.', 'Copy the result or download it as a text file.'],
    faq: [
      ['Which scripts are supported?', 'Cyrillic (Russian, Ukrainian, Belarusian, Bulgarian, Serbian, Macedonian), Greek, Arabic, Persian and Urdu, Hebrew, Devanagari, Thai, Korean Hangul, Japanese hiragana and katakana, Chinese, Georgian and Armenian.'],
      ['Why are some Arabic or Hebrew vowels missing?', 'These scripts usually do not write short vowels, so only the written letters can be converted. Text with vowel marks gives a full reading.'],
      ['Can it read Japanese kanji?', 'No. Kanji have several readings that depend on the word, so they are kept unchanged. Hiragana and katakana are converted.'],
      ['Is it the same as translation?', 'No. Transliteration changes the letters, not the language: Москва becomes Moskva, not a translated word.'],
      ['Which system should I use for a passport name?', 'For Russian and Ukrainian, choose Passport (ICAO 9303) for the system used in machine-readable passports. Always check with the official document.']
    ],
    icon: '<path d="M3 5h8M7 3v2M5 5c0 4 3 7 6 8M9 5c0 4-3 7-6 8"/><path d="M13 21l4-9 4 9M14.5 18h5"/>'
  },
  {
    slug: 'bionic-reading', cat: 'Text tools', name: 'Bionic Reading Converter',
    title: 'Bionic Reading Converter - Bold the Start of Every Word',
    desc: 'Make text easier to skim by bolding the first part of each word. Adjust the bold amount, then copy formatted text or HTML for email, Docs or Word.',
    card: 'Bold the start of words for faster reading.',
    intro: 'Paste any text and the first letters of every word turn bold, guiding your eyes along the line. Many readers find it easier to stay focused, especially on screens. Adjust how much of each word is bold, fade the rest, then copy it with formatting into an email, Google Docs or Word.',
    steps: ['Paste or type your text.', 'Move the slider to choose how much of each word is bold.', 'Optionally fade the rest of each word, skip short words or bold numbers.', 'Copy the formatted text, copy the HTML, or download an HTML page.'],
    faq: [
      ['Does bionic reading really make reading faster?', 'Studies have not shown a clear speed gain for everyone, but many people, including some with ADHD or dyslexia, say it helps them stay focused. Try it and see what works for you.'],
      ['Which languages work?', 'Any language written with letters: Latin, Cyrillic, Greek, Arabic, Hebrew, Indic scripts and Thai. Chinese, Japanese and Korean characters are left unchanged.'],
      ['Will the bold text paste into Word or Google Docs?', 'Yes. Copy formatted text puts rich text on the clipboard, so the bold parts are kept when you paste.'],
      ['Is my text uploaded?', 'No. It is converted in your browser.']
    ],
    icon: '<path d="M3 4h5.5a3.5 3.5 0 0 1 0 7H3zM3 11h6.5a3.5 3.5 0 0 1 0 7H3z"/><path d="M15 7h6M15 12h6M15 17h4"/>'
  },
  {
    slug: 'character-map', cat: 'Text tools', name: 'Character Map',
    title: 'Character Map - Browse Unicode, Search Symbols, Copy Codes',
    desc: 'Browse all Unicode blocks, search symbols by name, and copy any character with its code point, HTML entity, CSS, JavaScript and UTF-8 codes.',
    card: 'Find any Unicode symbol and copy its codes.',
    intro: 'Find any character among the 150,000 in Unicode 15.1: arrows, maths, currency, emoji, accented letters and every alphabet. Search by name such as arrow or euro, by code such as U+20AC, or browse by block. Click a character to see and copy its code point, HTML entity, CSS and JavaScript escapes and UTF-8 bytes.',
    steps: ['Search by name (in English), paste a character, type a code like U+00E9, or pick a block.', 'Click a character to see its name and codes.', 'Copy the character or any of its codes with one click.', 'Press Add (or double-click) to collect several characters, then copy them together.'],
    faq: [
      ['What can I search for?', 'Words from the official Unicode name (heart, arrow, check), a code point like U+2713 or 2713, an HTML entity like &check; or &#10003;, or characters you paste.'],
      ['Why do some characters show as empty boxes?', 'Your device has no font with that character. The character is still correct and will show on devices that have a suitable font.'],
      ['What is the difference between the HTML codes?', 'Named entities like &eacute; are easy to read; numeric ones like &#233; or &#xE9; work for every character.'],
      ['Which Unicode version is used?', 'Unicode 15.1 names and blocks.']
    ],
    icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 16h2.5v-1.2A4 4 0 1 1 13.5 14.8V16H16"/>'
  },
  {
    slug: 'xml-formatter', cat: 'Developer tools', name: 'XML Formatter',
    title: 'XML Formatter - Format, Minify and Validate XML Online',
    desc: 'Format or minify XML and check it is well-formed, with the exact line and column of any error. Keeps comments, CDATA and mixed content intact.',
    card: 'Beautify, minify and validate XML.',
    intro: 'Paste XML or open a file to pretty-print it with clean indentation, shrink it to one line, or simply check that it is well-formed. Errors show the line and column with the code around them. Comments, CDATA, the XML declaration and text mixed with tags are kept exactly as written.',
    steps: ['Paste XML or open an .xml, .svg, .rss or other XML file.', 'Choose the indent and options such as removing comments.', 'Press Format, Minify or Validate only.', 'Copy the result or download the file.'],
    faq: [
      ['How are errors shown?', 'The browser\'s own XML parser checks your document. The first error is shown with its line, column and the lines around it, with a marker under the problem.'],
      ['Will formatting change my data?', 'No. Only whitespace between tags changes. Text that sits next to tags, such as a paragraph with bold words, is kept exactly as written.'],
      ['Can it handle large files?', 'Yes, files of several megabytes format in a few seconds, depending on your device.'],
      ['Is my XML uploaded?', 'No. Everything runs in your browser.']
    ],
    icon: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>'
  },
  {
    slug: 'html-entity-encoder', cat: 'Developer tools', name: 'HTML Entity Encoder / Decoder',
    title: 'HTML Entity Encoder & Decoder - Named and Numeric Entities',
    desc: 'Encode text to HTML entities or decode entities back to text. Supports all 2,125 named HTML5 entities, decimal and hex codes, and old no-semicolon forms.',
    card: 'Encode and decode HTML entities.',
    intro: 'Make text safe to put into HTML by encoding < > & and quotes, or encode every non-ASCII character too. Decoding turns &eacute;, &#233; and &#xE9; back into é, using the full list of HTML5 entity names and the same rules as browsers.',
    steps: ['Paste text or HTML.', 'For encoding, choose which characters to encode and whether to use names or numbers.', 'Press Encode or Decode.', 'Copy the result, or use it as the new input to keep working.'],
    faq: [
      ['Which characters must be encoded in HTML?', 'The ampersand &, less-than < and greater-than >, plus double and single quotes inside attribute values. Encoding just those is enough for UTF-8 pages.'],
      ['Named or numeric entities?', 'Named entities like &copy; are easier to read. Numeric ones like &#169; work for every character, including emoji.'],
      ['Why does &#150; become a dash?', 'HTML treats numbers 128 to 159 as Windows-1252 characters, so &#150; is an en dash. The decoder does the same as browsers.'],
      ['What happens to unknown names?', 'They are left as they are and listed in the message, so you can fix typos.']
    ],
    icon: '<path d="M7 8l-4 4 4 4M17 8l4 4-4 4"/><path d="M9.5 12h.01M12 12h.01M14.5 12h.01"/>'
  },
  {
    slug: 'json-to-typescript', cat: 'Developer tools', name: 'JSON to TypeScript',
    title: 'JSON to TypeScript - Generate Interfaces, Types or JSON Schema',
    desc: 'Turn JSON into TypeScript interfaces or types, or a JSON Schema. Nested objects get their own names, and keys missing in some items become optional.',
    card: 'Generate TypeScript interfaces from JSON.',
    intro: 'Paste a JSON sample, such as an API response, and get ready-to-use TypeScript interfaces or type aliases. Every object in an array is merged, so fields that appear only sometimes are marked optional and mixed values become union types. You can also produce a JSON Schema (draft 2020-12).',
    steps: ['Paste your JSON or try the example.', 'Choose interfaces, types or JSON Schema, and name the root type.', 'Pick options such as export, readonly or making every property optional.', 'Copy the code or download it as a .ts or .schema.json file.'],
    faq: [
      ['How are optional properties detected?', 'When an array holds several objects, a key that is missing from some of them is marked optional with ?.'],
      ['What about null values?', 'A key that is always null is typed null; if it also has other values the type becomes a union like string | null.'],
      ['How are nested types named?', 'From their key in PascalCase. Array items get a singular name, so orders becomes Order. Identical shapes share one type.'],
      ['Is my JSON uploaded?', 'No. It is converted in your browser.']
    ],
    icon: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M12 8h8M16 8v10"/>'
  },
  {
    slug: 'fake-data-generator', cat: 'Developer tools', name: 'Fake Data Generator',
    title: 'Fake Data Generator - Test Data as CSV, JSON or SQL, 16 Locales',
    desc: 'Generate up to 10,000 rows of made-up names, emails, phones, addresses, dates and UUIDs for 16 countries. Download as CSV, JSON or SQL INSERT.',
    card: 'Make realistic test data as CSV, JSON or SQL.',
    intro: 'Create realistic but completely made-up test data for apps, databases and spreadsheets. Pick your columns, choose a country for local names, addresses and phone formats, and download CSV, JSON, JSON Lines or SQL INSERT statements. Emails use the reserved example.com domains, and a seed lets you get the same data again.',
    steps: ['Choose a country or language, or Mixed for all of them.', 'Set up your columns: pick a data type and a column name for each.', 'Enter how many rows you need, choose the format and press Generate.', 'Check the preview, then copy or download the file.'],
    faq: [
      ['Are these real people?', 'No. Names, addresses and companies are random combinations of common words, and emails use example.com, example.org and example.net, which are reserved and never belong to anyone.'],
      ['Are the phone numbers real?', 'They follow each country\'s format. United States numbers use the fictional 555-01xx range and United Kingdom numbers the Ofcom drama range. Elsewhere they are random and could match a real number, so never call or text them.'],
      ['What is the seed for?', 'With the same seed and settings you get exactly the same data again, which helps with repeatable tests.'],
      ['How many rows can I make?', 'Up to 10,000 per batch, made in your browser in about a second.']
    ],
    icon: '<circle cx="8" cy="8" r="3"/><path d="M3 19a5 5 0 0 1 10 0"/><path d="M15 7h6M15 12h6M15 17h6"/>'
  },
  {
    slug: 'robots-txt-generator', cat: 'Developer tools', name: 'Robots.txt Generator',
    title: 'Robots.txt Generator and Sitemap.xml Generator - Free',
    desc: 'Build a robots.txt with rules per crawler, block AI training bots, add sitemap lines and test any URL. Also turns a list of URLs into a sitemap.xml.',
    card: 'Make robots.txt and sitemap.xml files.',
    intro: 'Create a correct robots.txt without remembering the syntax: start from a preset, add Allow and Disallow rules for all crawlers or specific ones, block AI training crawlers with one tick and add your sitemap. Test any page path to see if it is allowed. Below, paste your page addresses to get a ready sitemap.xml.',
    steps: ['Choose a preset, then edit the rules for each crawler.', 'Tick Block AI training crawlers if you want, and add your sitemap address.', 'Test a page path, then copy or download robots.txt and upload it to your site root.', 'For a sitemap, paste your page URLs, choose the options and press Make sitemap.'],
    faq: [
      ['Where do I put robots.txt?', 'At the root of your domain, so it opens at https://your-site/robots.txt. It only applies to that host.'],
      ['Does robots.txt hide pages from Google?', 'It stops crawling, not indexing. A blocked page can still appear in results if other sites link to it. Use a noindex tag to keep a page out of search.'],
      ['How are Allow and Disallow decided?', 'Like Google: the most specific (longest) matching rule wins, and Allow wins a tie. The tester uses the same rule, including * and $.'],
      ['How many URLs can a sitemap have?', 'Up to 50,000 addresses and 50 MB. For bigger sites, split them into several sitemaps.'],
      ['Do all AI crawlers obey robots.txt?', 'The major ones listed say they do, but robots.txt is a request, not a lock.']
    ],
    icon: '<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13v2M22 13v2"/><circle cx="12" cy="3" r="1"/>'
  },
  {
    slug: 'video-to-vertical', cat: 'Social media tools', name: 'Video to Vertical',
    title: 'Video to Vertical 9:16 - Reels, TikTok, Shorts Free',
    desc: 'Turn any landscape video into a vertical 9:16, 4:5 or square video with a blurred background, zoom and position. Free, private, no upload.',
    card: 'Make any video vertical for Reels and TikTok.',
    intro: 'Turn a wide video into an upright 9:16 video for Reels, TikTok and YouTube Shorts, or a 4:5 or square post. Fill the empty space with a blurred copy of the video or a colour, or zoom in to fill the screen. It all happens in your browser.',
    steps: ['Click the box or drop your video onto it.', 'Choose 9:16, 4:5 or 1:1, and how to fill the empty space: blur, colour or zoom in.', 'Use the zoom and position sliders while you watch the preview.', 'Press Make vertical video, then Download MP4.'],
    faq: [
      ['Is my video uploaded?', 'No. The video is processed by a video engine that runs inside your browser, so it never leaves your device.'],
      ['What is the best size for Reels, TikTok and Shorts?', '9:16, which is 1080 × 1920 pixels in Full HD or 720 × 1280 for a smaller, faster file. Instagram feed posts look best at 4:5 (1080 × 1350).'],
      ['What does the blurred background do?', 'Instead of black bars, the empty space above and below your video is filled with an enlarged, blurred copy of the same video, so the whole screen looks full.'],
      ['Can I crop instead of adding a background?', 'Yes. Choose "Nothing: zoom in to fill". The video fills the whole frame and the sides are cut off; use the left-right slider to choose which part stays.'],
      ['Is the sound kept?', 'Yes. The sound stays exactly as it was, unless you tick "Remove the sound".'],
      ['Why does it take a while?', 'The whole video has to be re-encoded at the new size on your own device. 720p is about twice as fast as 1080p.']
    ],
    icon: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M3 8v8M21 8v8M10 12l3-2v4z"/>'
  },
  {
    slug: 'teleprompter', cat: 'Media tools', name: 'Teleprompter',
    title: 'Online Teleprompter - Free Scrolling Script with Mirror',
    desc: 'Free online teleprompter: smooth scrolling script, speed and text size control, mirror mode, countdown, keyboard and tap controls, and camera recording.',
    card: 'Read your script while you record.',
    intro: 'Paste your script and it scrolls smoothly across the screen while you speak. Change the speed and text size on the fly, mirror the text for a teleprompter glass, and even record yourself with your camera, all in your browser.',
    steps: ['Paste or type your script in the box.', 'Set the scroll speed, text size, colours and countdown.', 'Press Start teleprompter. Tap the screen or press Space to pause, and use the arrow keys to change the speed.', 'Optional: tick "Show my camera" and press Rec to record yourself.'],
    faq: [
      ['Is my script saved?', 'Your script is kept in this browser on this device only, so it is still there next time. It is never uploaded.'],
      ['How do I control it while reading?', 'Tap the text or press the space bar to pause and continue. Arrow up and down change the speed, + and − change the text size, M mirrors the text, Home jumps back to the start and Esc closes it. On a phone use the buttons at the bottom.'],
      ['What is mirror mode for?', 'A real teleprompter reflects the screen in a glass in front of the camera, which flips the text. Mirror mode flips it back so it reads correctly in the glass.'],
      ['Can I record myself?', 'Yes. Tick "Show my camera behind the text", start the teleprompter and press Rec. Your camera and microphone are recorded (without the text) and you can download the video afterwards.'],
      ['Does it work on phones and tablets?', 'Yes. It opens full screen, keeps the screen awake where the browser allows it, and has large touch buttons.'],
      ['How fast should it scroll?', 'Start around 6 to 10 and adjust while you read. Most people speak about 130 to 160 words a minute.']
    ],
    icon: '<rect x="3" y="3" width="18" height="14" rx="2"/><path d="M7 7h10M7 10h10M7 13h6M12 17v4M8 21h8"/>'
  },
  {
    slug: 'sound-meter', cat: 'Media tools', name: 'Sound Meter',
    title: 'Sound Meter - Decibel Meter Online (dB) Free',
    desc: 'Measure noise levels with your microphone: live decibel reading, min, average and max, 60-second graph, dB(A) weighting and calibration. Free and private.',
    card: 'Measure how loud it is with your mic.',
    intro: 'Use your phone or computer microphone as a decibel meter. See the live sound level, the minimum, average and maximum, and a graph of the last minute. Readings are estimates; calibrate against a real meter for better accuracy.',
    steps: ['Press Start microphone and allow the microphone.', 'Hold the device still and watch the live level, minimum, average and maximum.', 'Optional: calibrate with a known level, choose dB(A) or flat weighting, and download the readings.'],
    faq: [
      ['How accurate is a phone decibel meter?', 'It is an estimate. The digital level from the microphone (dBFS) is measured exactly, but how that relates to real sound pressure depends on your microphone, so readings can be 10 dB or more off until you calibrate.'],
      ['How do I calibrate it?', 'Next to a real sound level meter (or a sound of known level), type the real reading in "I know the real level now is" and press Calibrate. The offset is remembered on this device.'],
      ['What is dB(A)?', 'A-weighting makes the meter less sensitive to very low and very high sounds, like the human ear. Most noise rules and hearing advice use dB(A).'],
      ['What is dBFS?', 'Decibels relative to full scale: 0 dBFS is the loudest sound the microphone can record digitally, and everything else is a negative number.'],
      ['Is the sound recorded or uploaded?', 'No. The sound is only measured in your browser. Nothing is recorded or sent anywhere. You can download the numbers as a CSV file if you want them.'],
      ['How loud is too loud?', 'Long exposure above about 85 dB(A) can harm hearing. Short peaks above 100 dB are common at concerts; protect your ears.']
    ],
    icon: '<path d="M3 15a9 9 0 0 1 18 0"/><path d="M12 15l4-5"/><circle cx="12" cy="15" r="1.5"/><path d="M6 19h12"/>'
  },
  {
    slug: 'voice-changer', cat: 'Media tools', name: 'Voice Changer',
    title: 'Voice Changer Online - Robot, Chipmunk, Deep Voice Free',
    desc: 'Record your voice or open a file and add effects: pitch up or down, robot, chipmunk, deep, echo, reverb and telephone. Save as MP3 or WAV. No upload.',
    card: 'Change your voice with fun effects.',
    intro: 'Record your voice or open an audio file, then try fun effects like chipmunk, robot, deep voice, echo, hall reverb and telephone. Listen instantly and save the result as MP3 or WAV. Everything stays on your device.',
    steps: ['Press Record your voice, or open an audio file.', 'Tap an effect to hear it. Use the slider to make it stronger or weaker.', 'Choose MP3 or WAV and press Save, then Download.'],
    faq: [
      ['Is my voice uploaded?', 'No. Recording and all effects happen inside your browser. Your voice never leaves your device.'],
      ['Which effects are there?', 'Pitch up, pitch down, chipmunk, deep voice, robot, echo, reverb (hall) and telephone, plus Normal to hear the original.'],
      ['Can I change the voice in a video?', 'You can open a video file and the tool uses its sound. The result is an audio file (MP3 or WAV); add it back to a video with Add Music to Video.'],
      ['How long can a recording be?', 'Up to 10 minutes from the microphone. Files you open can be longer, but long files take more time and memory.'],
      ['Why does the chipmunk voice keep the same length?', 'The pitch is changed without changing the speed, so the words stay in time.'],
      ['Does it work on phones?', 'Yes, in current mobile browsers. Allow the microphone when asked.']
    ],
    icon: '<rect x="9" y="2" width="6" height="11" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v4"/><path d="M19 3l2 2M21 3l-2 2"/>'
  },
  {
    slug: 'audio-joiner', cat: 'Media tools', name: 'Audio Joiner',
    title: 'Audio Joiner - Merge MP3 Files Online Free',
    desc: 'Join several MP3, M4A, WAV or OGG files into one in the order you choose, with crossfade or pauses, fades and volume levelling. Save MP3, M4A or WAV.',
    card: 'Join audio files into one track.',
    intro: 'Put several songs, voice notes or sound clips one after another and save them as a single file. Change the order, blend them with a crossfade or add a pause, and even out the volume. Nothing is uploaded.',
    steps: ['Click the box or drop two or more audio files onto it.', 'Use the arrows to put them in order.', 'Choose a crossfade or pause, fades and the format: MP3, M4A or WAV.', 'Press Join and save, then Download.'],
    faq: [
      ['Are my files uploaded?', 'No. The files are joined inside your browser, so they never leave your device.'],
      ['Can I join different formats?', 'Yes. You can mix MP3, M4A, WAV, OGG, FLAC and the sound of videos, as long as your browser can read them. The result is one MP3, M4A or WAV file.'],
      ['What is a crossfade?', 'The end of one file fades out while the next fades in, so they blend smoothly with no silence between them.'],
      ['How many files can I join?', 'Up to 50 files and 4 hours in total. Long joins need more memory, which matters most on phones.'],
      ['What does "Even out the volume" do?', 'It makes quiet files louder and loud files quieter so they play at a similar level, and keeps the result from clipping.'],
      ['Which format should I choose?', 'MP3 plays everywhere. M4A (AAC) is smaller for the same quality and works well on iPhone. WAV keeps full quality but is large.']
    ],
    icon: '<path d="M4 7h6M4 12h6M4 17h6"/><path d="M14 7l3 5-3 5M17 12h4"/>'
  },
  {
    slug: 'audio-speed-pitch', cat: 'Media tools', name: 'Audio Speed and Pitch Changer',
    title: 'Change Audio Speed & Pitch Online - Free, No Upload',
    desc: 'Speed up or slow down any song or recording without changing the pitch, or change the key without changing the speed. Preview and save MP3 or WAV.',
    card: 'Change tempo and key independently.',
    intro: 'Make a song or recording faster or slower while it stays in the same key, or move it up or down in pitch without changing the speed. You can also change both together like a record player. Everything runs in your browser.',
    steps: ['Click the box or drop an audio file onto it.', 'Set the speed (0.25× to 4×) and the pitch (−12 to +12 semitones).', 'Press Preview to hear 15 seconds, then choose MP3 or WAV.', 'Press Change and save, then Download.'],
    faq: [
      ['Can I slow down a song without making it sound deeper?', 'Yes. Speed and pitch are separate: change only the speed and the song keeps its key; change only the pitch and it keeps its tempo.'],
      ['What is a semitone?', 'The smallest step in Western music, one piano key. 12 semitones make an octave. +2 moves a song up one whole tone, which is common for singing in a different key.'],
      ['What does the record player option do?', 'It changes speed and pitch together, like playing a record faster or slower. This is how "nightcore" (faster and higher) and "slowed" (slower and deeper) versions are made.'],
      ['Is my file uploaded?', 'No. All processing happens on your device.'],
      ['Does it lower the quality?', 'Small changes sound natural. Very big changes (below 0.5× or above 2×, or more than about 5 semitones) can sound a bit grainy or echoey, as with any time-stretching tool.'],
      ['How long does it take?', 'Roughly a few seconds per minute of stereo audio on a computer; longer on a phone.']
    ],
    icon: '<circle cx="12" cy="13" r="8"/><path d="M12 13l3-3M12 3v2M4 7l1.5 1.5M20 7l-1.5 1.5"/>'
  },
  {
    slug: 'add-text-to-video', cat: 'Media tools', name: 'Add Text to Video',
    title: 'Add Text to Video Online - Captions & Titles, Free',
    desc: 'Put titles, captions and text on a video with start and end times, position, fonts, outline, shadow or box. Any language and emoji. MP4, no upload.',
    card: 'Put titles and captions on a video.',
    intro: 'Add titles, captions or notes to your video, each shown between the times you choose. Drag the text where you want it, pick a font, colour and style, and save an MP4. Every language and emoji works, and nothing is uploaded.',
    steps: ['Click the box or drop your video onto it.', 'Type your text, set when it appears and disappears, and drag it into place on the preview.', 'Add more texts with "+ Add another text" and style each one.', 'Press Add text to video, then Download MP4.'],
    faq: [
      ['Which languages can I use?', 'Any language your device can show, including Arabic, Hebrew, Hindi, Chinese, Japanese, Korean and emoji. Text is drawn with your device\'s fonts, so what you see in the preview is what you get.'],
      ['Can I show different texts at different times?', 'Yes. Add as many texts as you like, each with its own start and end time, position and style.'],
      ['Is my video uploaded?', 'No. The text is drawn and the video is encoded in your browser.'],
      ['Does it keep the sound?', 'Yes. The original sound is kept.'],
      ['Can I make subtitles for a whole video?', 'Yes, by adding one text for each line. For long subtitle files, the Subtitle Generator can create them automatically.'],
      ['Why does it re-encode the video?', 'Text becomes part of the picture, so every frame has to be encoded again. "Good" quality keeps it sharp with a reasonable file size.']
    ],
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 9h8M12 9v7"/>'
  },
  {
    slug: 'add-music-to-video', cat: 'Media tools', name: 'Add Music to Video',
    title: 'Add Music to Video Online - Free Background Music Mixer',
    desc: 'Add a song to your video: mix it under the original sound or replace it, set volumes, start point, fades and looping. Fast MP4 export, no upload.',
    card: 'Put background music on a video.',
    intro: 'Add background music to any video. Keep the original voices and mix the music quietly underneath, or replace the sound completely. Choose where the song starts, fade it in and out, and repeat it if it is shorter than the video.',
    steps: ['Drop your video, then drop the music file.', 'Choose whether to mix or replace the sound, and set both volumes.', 'Pick where the song starts, the fades and whether it repeats. Press Preview together.', 'Press Add music to video, then Download MP4.'],
    faq: [
      ['Is my video uploaded?', 'No. The music and video are combined in your browser.'],
      ['Will the video lose quality?', 'Usually not. Most MP4 and MOV videos are copied without re-encoding, so the picture stays exactly the same and it is fast. Other formats are converted to H.264 MP4.'],
      ['Can I keep people talking and add quiet music?', 'Yes. Choose "Keep it and mix the music under it" and set the music volume to about 20% to 40%.'],
      ['What if the song is shorter than the video?', 'Tick "Repeat the music" and it loops from your chosen start point. Otherwise the rest of the video has only its own sound or silence.'],
      ['Can I start the song from the chorus?', 'Yes. Type the time in "Start the song at", for example 0:45.'],
      ['Can I use any song?', 'Use music you own or have permission to use. Many platforms mute or block videos with copyrighted music.']
    ],
    icon: '<rect x="2" y="5" width="13" height="14" rx="2"/><path d="M15 10l4-2v8l-4-2"/><circle cx="7" cy="15" r="1.5"/><path d="M8.5 15V9l3-1"/>'
  },
  {
    slug: 'reverse-video', cat: 'Media tools', name: 'Reverse Video',
    title: 'Reverse Video & Boomerang Maker - Online, Free',
    desc: 'Play a video backwards or make a boomerang that goes forwards and back. Choose the part, loops and speed, keep reversed sound, save MP4 or GIF.',
    card: 'Play videos backwards or make boomerangs.',
    intro: 'Make any clip play backwards, or turn it into a boomerang that goes forwards and then backwards. Pick the part you want, how many times it repeats and the speed, and save as MP4 or GIF. Nothing is uploaded.',
    steps: ['Click the box or drop your video onto it.', 'Choose Reverse or Boomerang, and the part of the video to use.', 'Pick how many times it plays, the speed, the sound and MP4 or GIF.', 'Press the button and download the result.'],
    faq: [
      ['What is a boomerang video?', 'A short clip that plays forwards and then backwards, so it loops smoothly. Instagram made it popular.'],
      ['Is the sound reversed too?', 'Yes, if you choose "Reverse the sound too". You can also remove the sound. GIFs never have sound.'],
      ['How long can the part be?', 'Up to 3 minutes. Reversing needs to hold the video in memory, so the tool works in small pieces; very long parts take a while.'],
      ['Is my video uploaded?', 'No. Everything is processed by a video engine in your browser.'],
      ['MP4 or GIF?', 'MP4 is smaller, sharper and keeps sound. GIF plays automatically everywhere, including chats and websites, but is bigger and has no sound.'],
      ['Why is "Up to 720p" the default?', 'It is about twice as fast as full size and looks good on phones. Choose "Same as the video" for full resolution.']
    ],
    icon: '<path d="M11 19l-7-7 7-7v14z"/><path d="M20 19l-7-7 7-7v14z"/>'
  },
  {
    slug: 'audio-waveform-video', cat: 'Media tools', name: 'Audio Waveform Video Maker',
    title: 'Audio to Video with Waveform - Audiogram Maker Free',
    desc: 'Turn a song, podcast or voice note into an MP4 with an animated waveform, picture or colour background and title. Sizes for YouTube and Instagram.',
    card: 'Turn audio into a video with a moving waveform.',
    intro: 'Turn audio into a shareable video: an animated waveform or bars that move with the sound, on top of your picture or a colour background, with a title. Choose sizes for YouTube, Instagram, Reels and TikTok.',
    steps: ['Click the box or drop your audio file onto it.', 'Choose the video size, background and waveform style.', 'Type a title and a second line, and choose the part of the audio to use.', 'Press Make video, then Download MP4.'],
    faq: [
      ['What is an audiogram?', 'A video made from audio, with a moving waveform so viewers can see the sound. It is a popular way to share podcasts and music on social media.'],
      ['Which sizes are there?', 'YouTube 720p (1280 × 720) and 1080p (1920 × 1080), Instagram square (1080 × 1080), portrait 4:5 (1080 × 1350), and 9:16 (1080 × 1920) for Reels, Stories, TikTok and Shorts.'],
      ['Can I use my own picture?', 'Yes. Choose "My picture". If its shape differs from the video, the empty space is filled with a blurred copy.'],
      ['Is my audio uploaded?', 'No. The video is made in your browser.'],
      ['How long does it take?', 'About real time or faster for 720p on a computer. Longer audio, bigger sizes and phones take longer. Use the From and To times to make a short clip.'],
      ['Can I write the title in any language?', 'Yes. The title is drawn with your device\'s fonts, so all scripts and emoji work.']
    ],
    icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 12v0M8.5 10v4M11 8v8M13.5 10v4M16 11v2M18 12v0"/>'
  },
  {
    slug: 'tone-generator', cat: 'Media tools', name: 'Tone Generator',
    title: 'Online Tone Generator - Sine, Sweep & Binaural Beats',
    desc: 'Play a pure tone from 1 Hz to 20,000 Hz in sine, square, sawtooth or triangle, a frequency sweep, or binaural beats. Download WAV. Free, no sign-up.',
    card: 'Play test tones, sweeps and binaural beats.',
    intro: 'Generate a steady tone at any frequency from 1 Hz to 20 kHz, sweep from low to high, or play binaural beats with a different tone in each ear. Choose the wave shape and volume, and download the sound as a WAV file.',
    steps: ['Turn your device volume down first.', 'Choose a tone, sweep or binaural beat, the wave shape and the frequency.', 'Press Play or the space bar, and raise the volume slowly.', 'Optional: set a length and press Make WAV file to download it.'],
    faq: [
      ['What frequency range can I play?', 'From 1 Hz to 20,000 Hz. Most people hear from about 20 Hz to 15,000 to 20,000 Hz; small speakers may not play very low tones.'],
      ['Is it safe?', 'Start with the volume low. Pure tones can sound louder than music, and loud high or low tones can damage speakers and hearing. Never put headphones on while a tone is playing loudly.'],
      ['What are binaural beats?', 'Two slightly different tones, one in each ear. The brain perceives a soft beat at the difference, for example 200 Hz and 210 Hz give a 10 Hz beat. You need headphones.'],
      ['What is a frequency sweep for?', 'It glides from one frequency to another, which helps you find rattles, test speakers and subwoofers, or check the range you can hear.'],
      ['Which wave shape should I use?', 'Sine is a pure, smooth tone for testing. Square, sawtooth and triangle contain extra harmonics and sound buzzier or brighter.'],
      ['Can I download the tone?', 'Yes. Choose a length from 1 second to 10 minutes and press Make WAV file. The file is 16-bit stereo at 44.1 kHz.']
    ],
    icon: '<path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0"/><path d="M22 12h0"/>'
  },
  {
    slug: 'bpm-finder', cat: 'Media tools', name: 'BPM Finder',
    title: 'BPM Finder - Detect Song Tempo Online + Tap Tempo',
    desc: 'Find the BPM (tempo) of any song file with beat detection, see how confident it is, check it with a click track, or tap along with tap tempo. Free.',
    card: 'Find the tempo (BPM) of any song.',
    intro: 'Drop a song to find its tempo in beats per minute. The tool listens for drum hits and other beats, shows how confident it is, and lets you play the song with a click on every beat to check. Or tap along with Tap tempo.',
    steps: ['Click the box or drop a song onto it.', 'Read the BPM and the confidence level.', 'Press "Play with a click on each beat" to check it by ear, or choose half or double time.', 'For any song you hear, use Tap tempo below.'],
    faq: [
      ['How does it find the BPM?', 'It looks for sudden increases in loudness across low, middle and high frequencies (onsets such as drum hits), then finds the beat spacing that lines up best with them through the whole song.'],
      ['How accurate is it?', 'On music with a steady beat it is usually exact to within 0.5 BPM. Songs with tempo changes, live drumming or no drums are harder, which the confidence level shows.'],
      ['Why does it say half or double time?', 'Many songs can be counted at two speeds, for example 70 or 140 BPM. If the number feels too slow or fast, press the other option.'],
      ['Is my song uploaded?', 'No. The song is analysed in your browser.'],
      ['What is tap tempo?', 'Tap the button, the T key or the space bar on every beat. The tool averages your last taps to show the BPM.'],
      ['Which files work?', 'MP3, M4A, WAV, OGG, FLAC and the sound of most videos, at least 5 seconds long.']
    ],
    icon: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/><path d="M2 4h3M2 8h3"/>'
  },
  {
    slug: 'hearing-test', cat: 'Media tools', name: 'Hearing Test',
    title: 'Online Hearing Test - Check Both Ears (Not Medical)',
    desc: 'Check your hearing with headphones: beeps at 7 pitches for each ear, a results chart, and a highest-pitch test. A free self-check, not a medical test.',
    card: 'Check how well each ear hears beeps.',
    intro: 'A simple self-check with headphones. You hear beeps at different pitches in each ear, getting quieter until you can no longer hear them, and see a chart comparing your ears. There is also a test for the highest pitch you can hear. This is not a medical test.',
    steps: ['Put on headphones in a quiet room and check left and right.', 'Play the reference tone and set a comfortable device volume.', 'Choose a test and press Start. Press "I hear it" or the space bar whenever you hear beeps.', 'Read the chart and table. See a professional if you are worried.'],
    faq: [
      ['Is this a real hearing test?', 'No. It is a rough self-check. A real hearing test (audiometry) uses calibrated equipment in a quiet booth and gives results in dB HL. This tool cannot diagnose hearing loss.'],
      ['What do the numbers mean?', 'They show the quietest beeps you heard, in dB compared with the reference tone you set. −40 dB means you heard a beep 40 dB quieter than the reference. Lower (more negative) is better.'],
      ['Why do I need headphones?', 'To test each ear separately and to keep the volume steady. Speakers let both ears hear the beeps.'],
      ['What is the highest pitch test?', 'A tone slowly rises from 8 kHz. You press when it fades away. Young people often hear up to 17 to 20 kHz; the limit falls with age. Many headphones cannot play the highest pitches.'],
      ['Why are my two ears different?', 'Small differences are normal and can come from headphone fit. Differences of 15 dB or more, especially if new, are worth checking with a hearing professional.'],
      ['Is my data stored?', 'No. Results stay on screen only; nothing is uploaded or saved.']
    ],
    icon: '<path d="M6 9a6 6 0 1 1 12 0c0 3-2 4-3 5s-1 3-3 3a2 2 0 0 1-2-2"/><path d="M9 9a3 3 0 0 1 6 0"/>'
  },
  {
    "slug": "cover-letter-maker",
    "cat": "Generators",
    "name": "Cover Letter Maker",
    "title": "Free Cover Letter Maker - Write a Cover Letter Fast",
    "desc": "Write a cover letter from a short form: 3 tones, editable preview, no gaps. Download PDF (A4 or Letter), Word or text. Free, private, no sign-up.",
    "card": "Write a job cover letter and download it.",
    "intro": "Fill in a short form about the job and yourself, and get a clear, well-structured cover letter in a formal, friendly or short tone. Edit any word in the preview, then download it as a PDF, Word file or plain text, or copy it into an email. It works offline and nothing is uploaded.",
    "steps": [
      "Type the job title, the company and, if you know it, the hiring manager.",
      "Add your name, contact details, years of experience and 2–4 strengths or achievements.",
      "Pick a tone, then edit the letter in the preview if you want.",
      "Download a PDF, Word or text file, copy it, or print it."
    ],
    "faq": [
      [
        "Is this made with AI?",
        "No. It uses carefully written sentence templates with several wordings, so it works offline and your details never leave your device. Press Different wording for another version."
      ],
      [
        "What if I leave a field empty?",
        "Optional fields are simply left out and the sentences adjust, so the letter never shows blanks like [company] or gaps."
      ],
      [
        "Can I edit the letter?",
        "Yes. Click anywhere in the letter and type. Your edits are kept, even after a reload, until you press Undo my edits."
      ],
      [
        "Which file types can I download?",
        "A PDF in A4 or Letter size, a Word .docx file that opens in Word, Google Docs, LibreOffice and Pages, or a plain .txt file. You can also copy the text or print it."
      ],
      [
        "Does it work with names in Arabic, Chinese or other scripts?",
        "Yes. Names and text in any language appear correctly in the preview and in the PDF."
      ],
      [
        "Is my information saved?",
        "Only in this browser on this device, so you can come back to it. Press Start over to clear it."
      ]
    ],
    "icon": "<path d=\"M4 6h16v12H4z\"/><path d=\"m4 7 8 6 8-6\"/><path d=\"M15 21l2-2 4-4-2-2-4 4-2 2z\"/>"
  },
  {
    "slug": "interview-practice",
    "cat": "Study tools",
    "name": "Interview Practice",
    "title": "Interview Practice - 120+ Questions, Tips and Timer",
    "desc": "Practise job interviews with 123 common questions, tips and answer outlines, thinking and answer timers, recording and filler-word count. Free.",
    "card": "Practise interview questions with a timer.",
    "intro": "Get ready for a job interview with 123 common questions in ten groups, each with a tip on what the interviewer wants and an outline of a strong answer. Practice mode gives you a random question, a thinking timer and an answer timer. Record yourself to listen back and, where your browser supports it, see your words with a count of filler words like \"um\" and \"like\".",
    "steps": [
      "Choose a category, a thinking time and an answer time.",
      "Optionally turn on recording and speech to text, and allow the microphone.",
      "Press Start, think, then answer out loud when the beep sounds.",
      "Review your recording, words and filler words, read the tip, and try again."
    ],
    "faq": [
      [
        "What kinds of questions are included?",
        "123 questions in ten groups: general, behavioural (STAR), teamwork, problem solving, customer service, sales, tech basics, leadership, first job or student, and questions to ask the employer."
      ],
      [
        "Is my recording uploaded?",
        "No. The recording is made and kept in your browser’s memory only. It disappears when you leave the page unless you download it."
      ],
      [
        "How does the filler-word count work?",
        "With speech to text on, your answer is turned into text and the tool counts words like um, uh, like, you know, basically and actually. Speech to text often skips \"um\", so listen to the recording too."
      ],
      [
        "Why is speech to text not available?",
        "It needs the Web Speech API, found in Chrome, Edge and Safari. These browsers use their online speech service, so it needs an internet connection. You can always type your answer to analyse it."
      ],
      [
        "What is the STAR method?",
        "A way to answer \"tell me about a time\" questions: Situation, Task, Action and Result. The tips and outlines show how to use it."
      ],
      [
        "Are my favourites and notes saved?",
        "Yes, in this browser on this device. Use Export to keep a backup or move them to another device, and Print to make a study sheet."
      ]
    ],
    "icon": "<path d=\"M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12z\"/><path d=\"M10 9.5a2 2 0 1 1 3 1.7c-.6.4-1 .8-1 1.5\"/><path d=\"M12 15.5h.01\"/>"
  },
  {
    "slug": "job-application-tracker",
    "cat": "Time tools",
    "name": "Job Application Tracker",
    "title": "Job Application Tracker - Free Board, Reminders, Stats",
    "desc": "Track job applications on a drag-and-drop board or list: status, next steps, reminders, salary in any currency, response rate. CSV/JSON export. Private.",
    "card": "Track job applications, interviews and offers.",
    "intro": "Keep every job application in one place: company, job title, link, date applied, status, next step, contact, salary and notes. Drag cards between Saved, Applied, Interview, Offer, Rejected and No reply, see upcoming steps in Reminders and your response rate in Stats. Everything is saved only in your browser, with CSV and JSON export and import.",
    "steps": [
      "Type the company and job title, pick a status and the date you applied, and press Add application.",
      "Add a next step and its date, such as a phone interview or a follow-up.",
      "Drag cards on the board (or use Move to) as things change.",
      "Check Reminders and Stats, and export a backup now and then."
    ],
    "faq": [
      [
        "Where are my applications stored?",
        "Only in this browser on this device. Nothing is uploaded. Export JSON or CSV to back them up or move them to another device."
      ],
      [
        "Does drag and drop work on phones?",
        "Yes. Hold the ⠿ handle on a card and drag it to another column. You can also use the Move to menu on each card."
      ],
      [
        "How is the response rate worked out?",
        "Applications that got an answer (interview, offer or rejection) divided by all applications sent, which is everything except Saved."
      ],
      [
        "Can I use my own currency?",
        "Yes. Choose any currency and whether the salary is per year, month, week, day or hour. Sorting by salary compares them as yearly amounts."
      ],
      [
        "Can I import a spreadsheet?",
        "Yes. Import a CSV with a header row that includes Company or Job title. Status, Date applied (YYYY-MM-DD), Next step, Contact, Salary, Link and Notes columns are read too."
      ],
      [
        "Will it remind me?",
        "The Reminders view and the red number on its tab show overdue and today’s steps whenever you open the page. It also lists applications with no news for two weeks."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><path d=\"m9 13 2 2 4-4\"/>"
  },
  {
    "slug": "read-along",
    "cat": "Text tools",
    "name": "Read Along",
    "title": "Read Along - Read Text Aloud with Word Highlighting",
    "desc": "Hear any text read aloud while each word lights up. Open TXT, Word or PDF, any language, dyslexia-friendly view, reading ruler. Free and private.",
    "card": "Read text aloud with highlighted words.",
    "intro": "Paste text or open a .txt, Word or PDF file and hear it read aloud with your device’s voices while each word and sentence is highlighted. Click any word to start from there. A big, dyslexia-friendly reading view lets you change text size, line spacing, background colour and font (including OpenDyslexic), with a reading ruler. Works in many languages.",
    "steps": [
      "Paste text, or open a .txt, .docx or PDF file.",
      "Check the language and voice, and set the speed.",
      "Press Read aloud and follow the highlighted words, or click any word to start there.",
      "Open Reading view or Big reading view to change size, spacing, colour, font and the ruler."
    ],
    "faq": [
      [
        "Which languages work?",
        "Any language your device has a voice for. The tool detects the language of your text (for example English, Spanish, Arabic, Hindi, Chinese or Russian) and picks a matching voice. You can choose another voice too."
      ],
      [
        "Why is only the sentence highlighted?",
        "Some voices, often on Android, do not tell the browser when each word starts. Then the whole sentence is highlighted instead."
      ],
      [
        "Can it read PDF and Word files?",
        "Yes, .txt, .docx and PDF files with real text. Scanned PDFs are pictures, so use the Image to Text tool first. Old .doc files need to be saved as .docx."
      ],
      [
        "Is it good for dyslexia?",
        "It offers features many readers with dyslexia find helpful: hearing and seeing words together, big text, wide spacing, tinted backgrounds, the OpenDyslexic font and a reading ruler. Try settings to find what suits you."
      ],
      [
        "Is my text uploaded?",
        "No. Files are read on your device, and voices built into your device speak the text. A few voices marked \"online\" use your browser’s speech service."
      ],
      [
        "Can I download the audio?",
        "No. Browsers do not let websites record their built-in voices. Use the voices live on the page."
      ]
    ],
    "icon": "<path d=\"M3 5h8M3 9h8M3 13h5\"/><path d=\"M14 9v6h2l4 3V6l-4 3h-2z\"/><path d=\"M3 17h9\"/>"
  },
  {
    "slug": "emergency-medical-card",
    "cat": "Generators",
    "name": "Emergency Medical Card",
    "title": "Emergency Medical Card Maker - Wallet Card, Lock Screen, QR",
    "desc": "Make a free medical ID: wallet card PDF (85.6 x 54 mm), phone lock-screen image and an offline QR code with allergies, blood group and contacts. Private.",
    "card": "Medical ID wallet card, lock screen and QR.",
    "intro": "Type your name, date of birth, blood group, allergies, conditions, medicines and emergency contacts once, and get three things first responders can use: a credit-card-size wallet card to print, cut out and fold, a phone lock-screen picture with the key facts in large type, and a QR code that shows your details as plain text with no internet. Add a \"Medical ID\" heading in other languages for travel. Your details stay on your device.",
    "steps": [
      "Fill in your details and emergency contacts. Leave out anything you do not want to share.",
      "Choose a colour and, if you travel, up to 3 extra languages for the heading.",
      "Download the sheet to cut out (or the card-size PDF) and print it at 100%.",
      "Download the lock-screen image and set it as your phone wallpaper, and test the QR code with your phone camera."
    ],
    "faq": [
      [
        "Is my medical information uploaded anywhere?",
        "No. Everything is made in your browser. If you tick \"Remember my details\", they are saved only on this device, and \"Delete my details\" removes them."
      ],
      [
        "What size is the card?",
        "85.6 × 54 mm, the same as a bank card. Print the sheet at 100% or \"Actual size\", not \"Fit to page\", then cut it out, fold it and laminate or tape it."
      ],
      [
        "Does the QR code need internet?",
        "No. It holds your details as plain text, so a phone camera or QR scanner app shows them straight away. Test it with your own phone first."
      ],
      [
        "What if my details do not fit on the card?",
        "The card shortens long text with \"…\" and warns you. The QR code holds everything; if that makes the card's QR code too dense, the card uses the key facts and the downloaded QR code keeps everything."
      ],
      [
        "Which phone sizes are there for the lock screen?",
        "Common Android sizes (1080 × 2400, 1080 × 2340, 1440 × 3200, 1080 × 1920) and iPhone sizes (SE, 12–14, 14 Pro–16, Plus/Pro Max). The top part is left free for the clock."
      ],
      [
        "Does this replace a medical alert bracelet or my phone's Medical ID?",
        "No. Use it as well as them. Phones also have a built-in emergency Medical ID that responders can open from the lock screen; fill that in too."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M8 9v6M5 12h6\"/><path d=\"M14 10h5M14 14h4\"/>"
  },
  {
    "slug": "medication-schedule",
    "cat": "Time tools",
    "name": "Medication Schedule",
    "title": "Medication Schedule - Pill Checklist, Chart and Reminders",
    "desc": "Free medicine schedule: daily pill checklist, weekly chart, printable medication chart PDF, reminders while open and a calendar (.ics) file. Private.",
    "card": "Daily pill checklist, chart and reminders.",
    "intro": "Add your medicines with the dose, how often or at which times, food instructions and start and end dates. Tick each dose as you take it in today's checklist, see the week at a glance, and print a medication chart for the fridge. Turn on reminders while the page is open, or download a calendar file so your phone's calendar reminds you. Your list stays on this device.",
    "steps": [
      "Add a medicine: name, dose, how often or your own times, food instruction and dates.",
      "Tick each dose in today's checklist when you take it.",
      "Check the weekly chart, and print a chart for the fridge if you like.",
      "Turn on reminders while the page is open, and download the calendar file for reliable alarms."
    ],
    "faq": [
      [
        "Will it remind me when the page is closed?",
        "No. Browser reminders only work while this page (or the GetToolNest app) is open, and phones may pause pages in the background. For reliable alarms, download the calendar file (.ics) and add it to your phone's calendar, or set an alarm."
      ],
      [
        "Where are my medicines and ticks saved?",
        "Only in this browser on this device. Nothing is uploaded. Use \"Back up (JSON)\" to keep a copy or move it to another device."
      ],
      [
        "Can I set different times for each dose?",
        "Yes. Choose how often to fill in common times, then change any time, add more (up to 8 a day) or remove them. You can also pick only some days of the week."
      ],
      [
        "What does the calendar file do?",
        "It adds a repeating event with an alert at each dose time, until the end date if you set one. Times follow your device's time zone. If you change your medicines, delete the old events and add a new file."
      ],
      [
        "What if I miss a dose?",
        "The checklist shows it as not ticked. Do not take a double dose to catch up unless your doctor or pharmacist says so; check the leaflet or ask a pharmacist."
      ],
      [
        "Can I print a chart for someone I care for?",
        "Yes. Add their name, choose 1, 2 or 4 weeks and A4 or US Letter. Grey boxes mean no dose that day."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"9\" width=\"12\" height=\"7\" rx=\"3.5\" transform=\"rotate(-45 9 12.5)\"/><path d=\"M6.5 15l5-5\"/><circle cx=\"17.5\" cy=\"17.5\" r=\"4\"/><path d=\"M17.5 15.8v1.7l1.2 1\"/>"
  },
  {
    "slug": "first-aid-guide",
    "cat": "Study tools",
    "name": "First Aid Guide",
    "title": "First Aid Guide - CPR, Choking, Bleeding, Burns (Offline)",
    "desc": "Free offline first aid guide for adults, children and babies: CPR with a 110 bpm metronome, choking, bleeding, burns, stroke and more, plus emergency numbers.",
    "card": "Step-by-step first aid, CPR metronome, 112/911.",
    "intro": "Clear, step-by-step first aid for 28 emergencies, from CPR and choking to burns, stroke, allergic reactions, bites and diabetic emergencies. Each topic shows when it is serious, what to do, what NOT to do and when to call for help. A CPR metronome beats at 110 a minute, and the emergency numbers panel finds your country and lets you tap to call. It works offline once opened, and you can print any topic. It does not replace first aid training.",
    "steps": [
      "Check the emergency number for your country at the top and call it first in an emergency.",
      "Search for what happened, such as \"burn\" or \"not breathing\", or pick a topic. Filter for adults, children or babies.",
      "Follow the steps. For CPR, start the metronome and push in time with the beat.",
      "Print a topic, or download the whole guide as a PDF for home, car or work."
    ],
    "faq": [
      [
        "Does this replace a first aid course?",
        "No. It is a reminder of the main steps from common guidance (Red Cross and Red Crescent, St John, European Resuscitation Council, American Heart Association). Take a course to practise, especially CPR."
      ],
      [
        "How fast should CPR pushes be?",
        "100 to 120 a minute, about 5–6 cm deep on an adult. The metronome beats at 110 a minute. If you are trained, give 2 breaths after every 30 pushes; if not, push without stopping (hands-only CPR)."
      ],
      [
        "How does it know my emergency number?",
        "It guesses your country from your device's time zone and language. Check it and pick another country from the list if needed. On most mobile phones, 112 also works in many countries, and 911 in most of the Americas."
      ],
      [
        "Does it work without internet?",
        "Yes. All the topics are inside the page, so once it has loaded it keeps working offline. Download the PDF to keep a copy."
      ],
      [
        "Is the advice the same for children and babies?",
        "No. CPR and choking are different for babies under 1 year and for children, so they have their own topics. Use the Adults, Children and Babies filters."
      ],
      [
        "Why does the screen stay on during the metronome?",
        "So it keeps beating while you do CPR. The page asks the browser to keep the screen awake while the metronome runs."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M12 7.5v9M7.5 12h9\"/>"
  },
  {
    "slug": "health-log",
    "cat": "Calculators",
    "name": "Health Log",
    "title": "Health Log - Blood Pressure, Blood Sugar, Weight Tracker",
    "desc": "Free private diary for blood pressure, blood sugar (mg/dL or mmol/L), weight and temperature: charts, 7/30/90-day averages, doctor PDF report, CSV.",
    "card": "Track blood pressure, sugar, weight, fever.",
    "intro": "Record blood pressure and pulse, blood sugar in mg/dL or mmol/L, weight and temperature with the date, time and a note. See charts over time, averages for the last 7, 30 and 90 days, and each reading placed in clearly cited ranges: 2017 ACC/AHA blood pressure categories (with the European ESC/ISH view) and ADA/WHO blood sugar ranges. Make a tidy PDF report with tables and charts for your doctor, and export or import CSV. It is not a diagnosis; always talk to your doctor. Your readings stay on this device.",
    "steps": [
      "Choose Blood pressure, Blood sugar, Weight or Temperature.",
      "Type your reading (the date and time are filled in) and press Add reading.",
      "See the range, averages and chart. Pick the units you use in Settings.",
      "Download the PDF report before a doctor visit, and export a CSV now and then as a backup."
    ],
    "faq": [
      [
        "Which blood pressure categories does it use?",
        "The 2017 ACC/AHA categories: normal below 120/80, elevated 120–129/<80, stage 1 130–139 or 80–89, stage 2 140+/90+, and the crisis range above 180/120. A note explains the European (ESC 2024) and ISH 2020 thresholds, which start at 140/90 in the clinic or 135/85 at home."
      ],
      [
        "How do mg/dL and mmol/L convert?",
        "mmol/L = mg/dL ÷ 18.016 (and mg/dL = mmol/L × 18.016). You can switch units at any time; all readings are converted, and each unit uses its own published cut-offs, such as 126 mg/dL and 7.0 mmol/L."
      ],
      [
        "Can it tell me if I have diabetes or high blood pressure?",
        "No. Home readings help you and your doctor see a pattern, but a diagnosis needs proper tests. Talk to your doctor about your results."
      ],
      [
        "I have diabetes. Can I use my targets?",
        "Tick \"I have diabetes\" to compare sugar readings with common ADA treatment targets (80–130 mg/dL or 4.4–7.2 mmol/L before meals, below 180 mg/dL or 10.0 mmol/L after meals). Your own targets may differ."
      ],
      [
        "Where are my readings stored?",
        "Only in this browser on this device. Nothing is uploaded. Export a CSV or JSON backup to keep a copy or move to another device; importing skips readings you already have."
      ],
      [
        "What is in the doctor report?",
        "For each type of reading: averages for 7, 30 and 90 days, a chart, and a table of every reading in the chosen period with its range and your notes, plus the sources of the ranges."
      ]
    ],
    "icon": "<path d=\"M3 12h4l2-5 4 10 2-5h6\"/><rect x=\"2\" y=\"3\" width=\"20\" height=\"18\" rx=\"2\"/>"
  },
  {
    "slug": "cash-book",
    "cat": "Finance calculators",
    "name": "Cash Book",
    "title": "Cash Book - Daily Money In & Out and Customer Credit Ledger",
    "desc": "A free daily cash book for small shops and freelancers: money in and out, customer credit, running balance, reports and PDF statements. Saved on your device.",
    "card": "Daily money in/out and customer credit for shops.",
    "intro": "Record every sale and expense with the date, category and payment method, keep a credit ledger for customers and suppliers, and always know your balance. Several books, any currency, and everything stays private on this device.",
    "steps": [
      "Choose the currency for your book (and add more books for other shops).",
      "Press Money in or Money out, type the amount, category, payment method and note, then Add entry.",
      "Use the Credit tab for customers who pay later and suppliers you pay later.",
      "See daily, monthly and yearly totals in Reports, and download PDF statements, CSV or a backup."
    ],
    "faq": [
      [
        "Where is my cash book stored?",
        "Only in this browser on this device. Nothing is uploaded. Download a backup regularly; clearing browser data deletes it."
      ],
      [
        "Can I keep books for two shops?",
        "Yes. In Books & backup press New book. Each book has its own currency, entries and customers."
      ],
      [
        "How does customer credit work?",
        "Record Sold on credit when a customer takes goods and Customer paid when they pay, even part of it. Their balance updates and you can print a statement for them."
      ],
      [
        "Are the totals exact?",
        "Yes. Money is stored as whole cents (or the smallest unit of your currency), so adding thousands of entries never creates rounding errors."
      ],
      [
        "Can I import my old records?",
        "Yes. Import a CSV with Date and Amount (or In and Out) columns. Type, Category, Method and Note are read when present."
      ],
      [
        "How is this different from the Debt Tracker?",
        "The Cash Book is for a business: daily takings, expenses and shop credit. The Debt Tracker is a simple IOU list for personal loans."
      ]
    ],
    "icon": "<path d=\"M5 3h12a2 2 0 0 1 2 2v16H7a2 2 0 0 1-2-2z\"/><path d=\"M9 3v18\"/><path d=\"M12 9h4M12 13h4\"/><path d=\"M14 16v3M12.5 17.5h3\"/>"
  },
  {
    "slug": "inventory-tracker",
    "cat": "Finance calculators",
    "name": "Inventory Tracker",
    "title": "Inventory Tracker - Free Stock List with Barcode Scanning",
    "desc": "Track stock for a small shop: items, stock in and out, low-stock alerts, stock value and margins, barcode scanning, stock sheet and shelf label PDFs, CSV.",
    "card": "Stock list with barcode scanning and labels.",
    "intro": "Keep a simple stock list with cost and sale prices, quantities, low-stock levels and suppliers. Record stock in and out, scan barcodes with your phone camera, see stock value and margins, and print stock sheets and shelf labels. Your data stays on this device.",
    "steps": [
      "Add your items with SKU or barcode, unit, cost and sale price, quantity and low-stock level.",
      "Press + In or − Out on an item when stock arrives or is sold, or Count after a stock take.",
      "Watch the low-stock list and the stock value at cost and sale price.",
      "Print a stock sheet or shelf labels, and export CSV or a backup."
    ],
    "faq": [
      [
        "Can I scan barcodes?",
        "Yes. Press Scan and point your camera at the barcode. It reads EAN-13, EAN-8, UPC-A, Code 128 and QR codes. A USB or Bluetooth barcode scanner also works by typing into the search box."
      ],
      [
        "How is stock value worked out?",
        "Quantity in stock times the cost price for each item, added up. The sale-price value and the possible profit are shown too."
      ],
      [
        "Can I print price labels?",
        "Yes. Shelf labels PDF prints the name, price and a barcode of the SKU, from 8 to 40 labels per A4 or Letter page."
      ],
      [
        "Can I use kilograms or litres?",
        "Yes. Set the unit to kg, L or anything else and type quantities with up to 3 decimals, like 2.5."
      ],
      [
        "Where is my stock list saved?",
        "Only in this browser on this device. Download a backup or export CSV regularly."
      ],
      [
        "Can I import from Excel?",
        "Save your sheet as CSV with a Name column, then press Import items from CSV. Items with the same SKU are updated, not duplicated."
      ]
    ],
    "icon": "<path d=\"M3 8l9-5 9 5v8l-9 5-9-5z\"/><path d=\"M3 8l9 5 9-5M12 13v8\"/><path d=\"M7.5 5.5l9 5\"/>"
  },
  {
    "slug": "menu-maker",
    "cat": "Generators",
    "name": "Menu Maker",
    "title": "Menu Maker - Free Restaurant, Café & Price List Templates",
    "desc": "Make a menu or price list with 10 templates: print PDF (A4, Letter, A5, tri-fold), WhatsApp status and Instagram PNGs, and a mobile web page with QR code.",
    "card": "Menus and price lists: PDF, PNG and web page.",
    "intro": "Create a menu or price list for a café, restaurant, food stall, salon or shop. Add sections, items, prices and tags, add your logo and a QR code, pick a template, and download a print PDF, a social media image or a phone-friendly web page.",
    "steps": [
      "Choose a template and type your business name, tagline and details.",
      "Add sections and items with prices, short descriptions and tags like Veg or Spicy.",
      "Add a logo and a QR code link if you like, and pick the size.",
      "Download the PDF or PNG, or the web page to put online."
    ],
    "faq": [
      [
        "Is the menu maker free?",
        "Yes. There is no sign-up and no watermark, and everything is made in your browser."
      ],
      [
        "Can I make a menu in Arabic, Urdu or Hindi?",
        "Yes. Type items in any language. Arabic, Urdu and Hebrew are laid out right to left, and the PDF uses the right fonts for Arabic, Hindi, Bengali and more."
      ],
      [
        "What sizes can I download?",
        "A4, US Letter and A5 PDFs, a two-sided tri-fold leaflet, a 1080 × 1920 image for WhatsApp status or stories and a 1080 × 1080 square post."
      ],
      [
        "How do I put my menu online?",
        "Press Download web page. You get one HTML file that works on phones; upload it to any web host and point your QR code at its address."
      ],
      [
        "Can I edit my menu later?",
        "Your menu is kept in this browser. Press Save menu file to keep a copy you can open again on any device."
      ],
      [
        "Can I add my logo?",
        "Yes. Upload a PNG, JPG or WebP logo; a PNG with a transparent background looks best."
      ]
    ],
    "icon": "<path d=\"M6 3h12v18H6z\"/><path d=\"M9 7h6M9 11h4M15 11h0.01M9 15h4M15 15h0.01\"/><path d=\"M6 3c-1.5 0-2 1-2 2v14c0 1 .5 2 2 2\"/>"
  },
  {
    "slug": "handwriting-worksheets",
    "cat": "Study tools",
    "name": "Handwriting Worksheets",
    "title": "Handwriting Worksheets - Printable Letter Tracing Sheets",
    "desc": "Make printable tracing worksheets: letters, numbers 0–20, words or your own text with dotted lines, in Latin, Arabic, Hindi, Chinese, Japanese and more.",
    "card": "Printable letter and number tracing sheets.",
    "intro": "Create handwriting practice sheets for children and adult learners. Choose letters, numbers, simple words or your own text, pick dotted, dashed or grey tracing letters on the 4-line guide or square boxes, and download an A4 or Letter PDF with a name and date line.",
    "steps": [
      "Choose the writing system and what to practise: letters, numbers, words or your own text.",
      "Choose the guide lines, tracing style, letter size and copies on each line.",
      "Check the preview page by page.",
      "Download the PDF and print it at 100% size."
    ],
    "faq": [
      [
        "Which languages are supported?",
        "Latin (English and other European languages), Greek, Cyrillic, Arabic, Urdu, Hebrew, Devanagari (Hindi, Marathi, Nepali), Bengali, Tamil, Thai, Chinese characters and Japanese hiragana and katakana."
      ],
      [
        "What is the 4-line handwriting guide?",
        "A top line for tall letters, a dashed middle line for small letters, a baseline that letters sit on and a bottom line for tails like g and y."
      ],
      [
        "Can I make a name tracing sheet?",
        "Yes. Choose My own text and type the name. Each line of text gets a dark example and tracing copies."
      ],
      [
        "Are there start dots and arrows?",
        "Yes, for Latin letters and numbers: a green dot shows where to start and a red arrow shows the first direction."
      ],
      [
        "Is it free to print?",
        "Yes. The PDF is made in your browser, with no sign-up and no watermark."
      ]
    ],
    "icon": "<path d=\"M4 6h16M4 12h16M4 18h16\" stroke-dasharray=\"2 2\"/><path d=\"M7 16l2.5-7 2.5 7M8 14h3\"/><path d=\"M15 9l3 3-3 3\"/>"
  },
  {
    "slug": "kids-math-worksheets",
    "cat": "Study tools",
    "name": "Kids Math Worksheets",
    "title": "Kids Math Worksheets - Printable PDF with Answer Key",
    "desc": "Free printable math worksheets for ages 4–11: counting, number lines, place value, fractions, clocks, money, word problems and shapes. PDF with answer key.",
    "card": "Printable kids math sheets with an answer key.",
    "intro": "Make printable maths worksheets for young children in seconds. Choose from eleven kinds, such as counting pictures, telling the time, fractions, money and column sums, pick a difficulty and download an A4 or US Letter PDF with the answer key on its own page, or solve the sheet on screen for stars.",
    "steps": [
      "Pick a worksheet type and a difficulty: Easy, Medium or Hard.",
      "Choose the number of questions, and add the child's name, the date and the paper size.",
      "Check the preview, including the answer key pages.",
      "Download the PDF and print at 100%, or press Solve it here to answer on screen."
    ],
    "faq": [
      [
        "Which ages is it for?",
        "Easy suits about ages 4 to 6, Medium about 6 to 8 and Hard about 8 to 11. Every type has all three levels."
      ],
      [
        "Can I print the same worksheet again?",
        "Yes. Each sheet has a worksheet code. The same code with the same settings always makes exactly the same questions."
      ],
      [
        "Is there an answer key?",
        "Yes. The answers are on separate pages at the end of the PDF, so you can print the questions alone."
      ],
      [
        "Which currencies can I use for money sheets?",
        "Pick from many symbols such as $, €, £, ¥, ₹, ₦, ₱ or Rp, or type your own. The coins and notes are simple neutral drawings, not pictures of real money."
      ],
      [
        "Can children do it on a tablet?",
        "Yes. Solve it here shows the questions on screen with big answer boxes, checks each answer and gives a star for each right answer."
      ],
      [
        "Is it free?",
        "Yes. Worksheets are made in your browser with no sign-up, no watermark and nothing uploaded."
      ]
    ],
    "icon": "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\"/><circle cx=\"9\" cy=\"9\" r=\"2.5\"/><path d=\"M9 7.8V9l.8.6\"/><path d=\"M14 8h3M15.5 6.5v3M7 15h3M14 14.5l3 3M17 14.5l-3 3\"/>"
  },
  {
    "slug": "phonics-for-kids",
    "cat": "Study tools",
    "name": "Phonics for Kids",
    "title": "Phonics for Kids - Letter Sounds, Blending and Sight Words",
    "desc": "Free English phonics for early readers: letter sounds A–Z with pictures, animated CVC blending, letter teams like sh and ee, sight words and a sound game.",
    "card": "Letter sounds, blending and sight words.",
    "intro": "Help a young child learn to read in English. Hear and see the sound of every letter with a picture, watch three-letter words blend sound by sound, learn letter teams such as sh, ch and ee, practise sight words and play a picture sound game. Stars are saved on this device.",
    "steps": [
      "Choose an English voice and a slow speed.",
      "Start with Letter sounds: tap a letter, hear the word and read the Say it hint together.",
      "Move on to Blending, Letter teams and Sight words.",
      "Play the Sound game and collect stars."
    ],
    "faq": [
      [
        "Which language is it for?",
        "English only. The sounds, words and sight words are for children learning to read in English."
      ],
      [
        "Why does it say words instead of single sounds?",
        "Computer voices are not reliable at single sounds like /b/ or /a/. So the voice says carefully chosen example words slowly, and each sound is shown with a simple spelling and a mouth hint, such as /m/: mmm, lips together."
      ],
      [
        "What if my device has no voice?",
        "You will see a note. Everything else still works: the pictures, sound spellings and games. You can add an English text-to-speech voice in your device settings."
      ],
      [
        "What are sight words?",
        "Common words such as the, said and was that children learn to recognise by sight because they do not follow the usual rules."
      ],
      [
        "Where are the stars saved?",
        "Only in this browser on this device. Nothing is sent anywhere, and you can reset progress in the tips panel."
      ]
    ],
    "icon": "<path d=\"M4 18 7.5 6 11 18M5.2 14h4.6\"/><path d=\"M14 9h2.5a2.5 2.5 0 0 1 0 5H14V9zm0 5h3a2 2 0 0 1 0 4h-3\"/><path d=\"M19.5 4.5a4 4 0 0 1 0 4\"/>"
  },
  {
    "slug": "typing-for-kids",
    "cat": "Study tools",
    "name": "Typing for Kids",
    "title": "Typing for Kids - Free Typing Lessons and Games",
    "desc": "Free typing lessons for children: home row to sentences, colour-coded fingers, big letters, stars and a calm balloon game. QWERTY, AZERTY and QWERTZ.",
    "card": "Typing lessons and a balloon game for kids.",
    "intro": "Teach children to touch type step by step. Sixteen short lessons start on the home row and build up to words and sentences, with big letters, an on-screen keyboard that shows which finger to use, gentle sounds and up to three stars per lesson. Balloon Pop adds a stress-free game.",
    "steps": [
      "Choose your keyboard: QWERTY, AZERTY or QWERTZ.",
      "Rest your fingers on the home row, with pointer fingers on F and J.",
      "Pick a lesson and type the yellow letter, using the finger shown.",
      "Collect stars, then play Balloon Pop."
    ],
    "faq": [
      [
        "What age is it for?",
        "About 5 to 11. Younger children can play Balloon Pop; lessons suit children who know their letters."
      ],
      [
        "Which keyboards are supported?",
        "QWERTY for the US and most countries, QWERTY UK, French AZERTY and German or Central European QWERTZ. Lessons follow the keys of the layout you choose."
      ],
      [
        "Does it work on a phone or tablet?",
        "Lessons need a real keyboard, which you can connect to most phones and tablets. Balloon Pop also works by tapping big letter buttons."
      ],
      [
        "How are stars given?",
        "Finishing a lesson gives one star, 90% accuracy gives two and 97% gives three. Speed is shown gently but does not affect the stars."
      ],
      [
        "Is my child's progress saved?",
        "Yes, in this browser only. Nothing is uploaded and there is no account."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"9\" width=\"20\" height=\"11\" rx=\"2\"/><path d=\"M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 16.5h8\"/><circle cx=\"12\" cy=\"4.5\" r=\"2.5\"/><path d=\"M12 7v2\"/>"
  },
  {
    "slug": "link-in-bio-maker",
    "cat": "Social media tools",
    "name": "Link in Bio Maker",
    "title": "Link in Bio Maker - Free Bio Link Page, No Account",
    "desc": "Make a free link-in-bio page with your photo, buttons, social icons, video and QR code. 14 themes, live phone preview, one HTML file to host free.",
    "card": "Your own bio link page in one HTML file.",
    "intro": "Build a link-in-bio page for Instagram, TikTok, YouTube or any profile: add your photo, name, bio, link buttons and social icons, pick a theme, and download one small index.html file to put on a free host. No account, no monthly fee, nothing uploaded.",
    "steps": [
      "Add your photo, name and a short bio.",
      "Add link buttons and social links, and reorder them with the arrows.",
      "Pick a theme and button style, and add a video, email or QR code if you like.",
      "Download index.html and upload it to GitHub Pages, Netlify Drop or Cloudflare Pages."
    ],
    "faq": [
      [
        "Is it free?",
        "Yes. There is no account and no watermark, and free hosts like GitHub Pages, Netlify and Cloudflare Pages can serve your page at no cost."
      ],
      [
        "How do I put my page online?",
        "Download index.html and follow the short guide under the editor: drag it onto Netlify Drop, upload it to a GitHub repository with Pages turned on, or upload it to Cloudflare Pages."
      ],
      [
        "Can I use my own colours?",
        "Yes. Pick one of 14 themes or tick Use my own colours. The tool warns you if text becomes hard to read."
      ],
      [
        "Are brand logos included?",
        "No. Social links use simple generic outlined icons with the platform name written next to them, so there are no trademark issues."
      ],
      [
        "Can I edit my page later?",
        "Yes. It is kept in this browser, and Save project (JSON) gives you a file to open on any device. Download again and upload the new file to update your page."
      ],
      [
        "Does the page track visitors?",
        "No. The file has no scripts, trackers or outside fonts. Only an embedded video, if you add one, loads from the video site."
      ]
    ],
    "icon": "<rect x=\"6\" y=\"2\" width=\"12\" height=\"20\" rx=\"2.5\"/><circle cx=\"12\" cy=\"6.5\" r=\"1.6\"/><path d=\"M9 11h6M9 14.5h6M9 18h6\"/>"
  },
  {
    "slug": "website-builder",
    "cat": "Developer tools",
    "name": "Website Builder",
    "title": "Free One-Page Website Builder - No Code, Download HTML",
    "desc": "Build a one-page website for a shop, portfolio or event from blocks. 11 themes, live phone preview, SEO and accessibility checks. Download HTML or ZIP.",
    "card": "One-page sites from blocks, ready to host.",
    "intro": "Make a simple one-page website without code: add blocks for a hero, about, services and prices, gallery, testimonials, FAQ, opening hours, map link and contact, choose a theme and fonts, and download one index.html or a ZIP to put on any free host. Everything stays in your browser.",
    "steps": [
      "Type your site name and a short description for search engines.",
      "Pick a theme, fonts and accent colour.",
      "Fill in, add and reorder blocks by dragging or with the arrows, and describe each picture.",
      "Check the desktop, tablet and phone preview, then download index.html or a ZIP."
    ],
    "faq": [
      [
        "Do I need to know how to code?",
        "No. You type into simple forms and the tool writes clean, responsive HTML for you."
      ],
      [
        "Where can I host the website?",
        "Anywhere that serves static files, including free GitHub Pages, Netlify and Cloudflare Pages. Upload index.html, or unzip the ZIP and upload the folder."
      ],
      [
        "Is the website good for search engines?",
        "Pages include a title, description, language, canonical link, social sharing tags and, for local businesses, structured data with your contact details."
      ],
      [
        "Is the website accessible?",
        "Yes. The checker asks for picture descriptions, checks colour contrast, keeps one main heading and adds a skip link, and links use a readable shade of your accent colour."
      ],
      [
        "Should I choose one file or the ZIP?",
        "One file is easiest to upload. The ZIP keeps pictures as separate files, so the page loads faster and social apps can show your main picture."
      ],
      [
        "Can I edit the site later?",
        "Yes. It is kept in this browser, and Save project (JSON) gives you a file you can open again on any device."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"3\" width=\"20\" height=\"18\" rx=\"2\"/><path d=\"M2 8h20\"/><path d=\"M5 5.5h.01M8 5.5h.01\"/><rect x=\"5\" y=\"11\" width=\"6\" height=\"7\" rx=\"1\"/><path d=\"M14 12h5M14 15h5M14 18h3\"/>"
  },
  {
    "slug": "email-template-builder",
    "cat": "Developer tools",
    "name": "Email Template Builder",
    "title": "Email Template Builder - Free HTML Newsletter Maker",
    "desc": "Build responsive HTML emails and newsletters from blocks. Email-safe tables, inline styles, Outlook buttons, dark mode. Copy HTML or download .html/.eml.",
    "card": "HTML newsletters that work in every inbox.",
    "intro": "Create HTML emails such as newsletters and announcements from simple blocks: header, text, image, button, divider, two columns, social links and footer. The tool writes email-safe code with tables, inline styles, a 600 px layout, Outlook-proof buttons and a preheader, so it looks right in Gmail, Outlook and Apple Mail.",
    "steps": [
      "Type the subject and preheader and pick fonts and colours.",
      "Add blocks such as text, image, button and two columns, and fill them in.",
      "Check the desktop, phone, light and dark previews and the checks list.",
      "Copy the HTML, or download an .html or .eml file."
    ],
    "faq": [
      [
        "Will my email look right in Outlook and Gmail?",
        "The code follows email best practice: tables, inline styles, a fixed 600 px width for Outlook, VML buttons and stacking columns for phones. Always send a test to check."
      ],
      [
        "How do I use the HTML in my newsletter service?",
        "Press Copy HTML and paste it into the custom HTML or code editor of your newsletter or email marketing service."
      ],
      [
        "What is the .eml file for?",
        "It opens in your mail app as a ready email. Outlook opens it as a draft you can send; uploaded pictures travel inside it."
      ],
      [
        "Why do my uploaded images not show in Gmail?",
        "Gmail and Outlook block pictures stored inside HTML. Put the image online and paste its link instead."
      ],
      [
        "Does it support dark mode?",
        "Yes. It adds dark styles for apps that support them, and the Dark preview shows the result."
      ],
      [
        "Is anything sent or uploaded?",
        "No. The email is built in your browser and kept only on this device."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/><path d=\"M7 16h4\"/>"
  },
  {
    "slug": "thumbnail-preview",
    "cat": "Social media tools",
    "name": "Thumbnail Preview",
    "title": "Thumbnail Preview & A/B Tester - See It at Real Size",
    "desc": "Preview video thumbnails at real size in home, search, sidebar and phone layouts, light and dark. A/B compare, squint test, text size and time badge check.",
    "card": "Test thumbnails at real size before you upload.",
    "intro": "See how your video thumbnails will look to viewers: in a home grid, search results, the suggestions sidebar and a phone feed, in light and dark colours, at the real small sizes. Compare up to four versions side by side, run a squint and grayscale test, and check that your text is big enough and clear of the time badge.",
    "steps": [
      "Upload 1 to 4 thumbnails and type your title and channel name.",
      "Compare them side by side, then switch between home, search, sidebar and phone layouts in light and dark.",
      "Turn on the squint test, grayscale and the time badge area.",
      "Press Check text size and read the checks to pick the strongest version."
    ],
    "faq": [
      [
        "What sizes are shown?",
        "Typical on-screen sizes: 360 × 202 in the home grid and search results, 168 × 94 in the sidebar, and full width in the phone feed."
      ],
      [
        "How does the text size check work?",
        "It reads the words in your image on this device and works out how many pixels tall they appear at each size. Text under about 8 px in the sidebar is hard to read."
      ],
      [
        "What is the squint test?",
        "It blurs the thumbnail so you can see which shapes, faces and colours still stand out, like a viewer scrolling quickly."
      ],
      [
        "Is this an official YouTube tool?",
        "No. It uses generic layouts similar to common video sites, with no logos or branding."
      ],
      [
        "Are my thumbnails uploaded?",
        "No. Everything runs in your browser, and your thumbnails are only kept on this device."
      ],
      [
        "How do I make a thumbnail?",
        "Use the YouTube Thumbnail Maker on this site, then come back here to test it."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"4\" width=\"13\" height=\"8\" rx=\"1.5\"/><path d=\"M7 6.5l3 1.5-3 1.5z\"/><rect x=\"17\" y=\"4\" width=\"5\" height=\"3\" rx=\"1\"/><rect x=\"17\" y=\"9\" width=\"5\" height=\"3\" rx=\"1\"/><path d=\"M2 16h13M2 19h9M17 16h5M17 19h3\"/>"
  },
  {
    "slug": "secret-note",
    "cat": "Text tools",
    "name": "Secret Note",
    "title": "Secret Note - Password-Protected Encrypted Message Link",
    "desc": "Lock a private message with a password and share it as a link, text or QR code. AES-256 encryption in your browser; the note never reaches a server.",
    "card": "Lock a message with a password and share it.",
    "intro": "Write a private message, lock it with a password, and share it as a link, a block of text or a QR code. The note is encrypted on your device with AES-256-GCM, and in a link it sits after the # sign, which browsers never send to any server. The other person opens the link, types the password and reads the note. Nobody, including us, can recover a lost password.",
    "steps": [
      "Type your note and choose a password (type it twice).",
      "Press Lock note.",
      "Share the link, the text block or the QR code.",
      "Tell the other person the password a different way, for example on a call."
    ],
    "faq": [
      [
        "Can you read my note?",
        "No. The note is locked and opened in your browser. In a link it sits after the #, a part of the address that browsers never send to a server, so it never reaches us."
      ],
      [
        "What encryption does it use?",
        "AES-256-GCM, with a key made from your password by PBKDF2-SHA256 with 600,000 rounds, a random 16-byte salt and a random 12-byte IV, all through the browser's built-in Web Crypto."
      ],
      [
        "I forgot the password. Can you recover the note?",
        "No. Nobody can. Without the password the note cannot be opened, which is what keeps it safe. Ask the sender to lock it again."
      ],
      [
        "What does \"Wrong password or damaged data\" mean?",
        "Either the password is wrong (it is case-sensitive), or part of the link or text was lost when copying. The lock includes a tamper check, so a changed note will not open with wrong text."
      ],
      [
        "How long can a note be?",
        "Up to 20,000 characters. Long notes make long links, and above about 2,000 characters the QR code no longer fits; share the link or text then."
      ],
      [
        "Does the link expire?",
        "No. The locked note is inside the link itself, so it works as long as you keep the link and the password."
      ]
    ],
    "icon": "<rect x=\"4\" y=\"10\" width=\"16\" height=\"11\" rx=\"2\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\"/><path d=\"M8 15h8M8 18h5\"/>"
  },
  {
    "slug": "file-locker",
    "cat": "Developer tools",
    "name": "File Locker",
    "title": "File Locker - Encrypt Files with a Password (AES-256)",
    "desc": "Encrypt any files with a password into one .gtnlock file and unlock them later. AES-256 in your browser, handles 1 GB files, nothing is uploaded.",
    "card": "Encrypt any files with a password.",
    "intro": "Lock any files, from one photo to a folder of documents or a large video, with a password. They become a single .gtnlock file that only the password can open, and unlocking gives back the exact original files with their names. Encryption is AES-256-GCM with a PBKDF2 key, done on your device in 4 MB pieces, so large files work and nothing is uploaded.",
    "steps": [
      "Add one or more files.",
      "Choose a password and type it twice.",
      "Press Lock files and download the .gtnlock file.",
      "To open it: choose Unlock, pick the .gtnlock file and type the password."
    ],
    "faq": [
      [
        "Are my files uploaded?",
        "No. Locking and unlocking happen in your browser. Your files and password never leave your device."
      ],
      [
        "How strong is the encryption?",
        "AES-256-GCM with a key made from your password by PBKDF2-SHA256 with 600,000 rounds and a random salt. Every 4 MB piece has its own tamper check, and pieces cannot be swapped, removed or cut off without it being noticed."
      ],
      [
        "Can I recover a forgotten password?",
        "No. Nobody can, not even us. Write the password down somewhere safe and test unlocking before deleting the originals."
      ],
      [
        "How big can the files be?",
        "Files of 1 GB and more work on a computer, because they are processed in 4 MB pieces. Phones may run out of memory or space with very large files."
      ],
      [
        "How does the other person open the file?",
        "They open this page, choose \"Unlock a .gtnlock file\", pick the file and type the password. Send the password a different way from the file."
      ],
      [
        "Are the original file names kept?",
        "Yes. The names, sizes and types are stored inside the encrypted part, so they are hidden too and come back when you unlock."
      ]
    ],
    "icon": "<path d=\"M6 3h8l4 4v5\"/><path d=\"M6 3v18h6\"/><rect x=\"13\" y=\"15\" width=\"8\" height=\"6\" rx=\"1\"/><path d=\"M15 15v-2a2 2 0 0 1 4 0v2\"/>"
  },
  {
    "slug": "image-steganography",
    "cat": "Image tools",
    "name": "Image Steganography",
    "title": "Image Steganography - Hide a Secret Message in a Picture",
    "desc": "Hide a text message inside a PNG image, optionally locked with a password, and reveal it later. Shows capacity and checks for damage. Free and private.",
    "card": "Hide a secret message inside a picture.",
    "intro": "Hide a text message inside a picture so it looks unchanged, and reveal it again later. The message is stored in the lowest bit of each pixel's colours, with a header holding its length and a checksum, and you can lock it with a password too. The result is always a PNG, because JPEG compression and apps that shrink photos wipe hidden messages out. Everything runs on your device.",
    "steps": [
      "Pick a picture and check how much text fits.",
      "Type the message, and add a password if you like.",
      "Press Hide message and download the PNG.",
      "To read it: choose Reveal a message and pick the PNG."
    ],
    "faq": [
      [
        "Why is the result always a PNG?",
        "PNG keeps every pixel exactly. JPEG and WebP compression change the tiny colour details that hold the message, so the message would be lost."
      ],
      [
        "Can I send the picture on WhatsApp or post it on social media?",
        "Not as a photo: those apps shrink and recompress pictures, which destroys the message. Send it as a file or document, by email, or through a cloud drive."
      ],
      [
        "How much text fits?",
        "About 3 bits per pixel, so a 1600 × 1200 picture holds around 720,000 bytes. The tool shows the exact room for your picture."
      ],
      [
        "Is a hidden message secure?",
        "Hiding only makes it hard to notice. Anyone who suspects a message can read it with a tool like this, unless you also lock it with a password (AES-256-GCM)."
      ],
      [
        "What if the picture was changed?",
        "A checksum in the header tells you the message is damaged, instead of showing garbage. A JPEG copy usually shows \"no hidden message\"."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><circle cx=\"9\" cy=\"10\" r=\"2\"/><path d=\"M21 16l-5-5-8 9\"/><path d=\"M14 4v3M17 4v2\" />"
  },
  {
    "slug": "wifi-qr-code",
    "cat": "Generators",
    "name": "Wi-Fi QR Code",
    "title": "Wi-Fi QR Code Generator - Scan to Join Wi-Fi Card (Free)",
    "desc": "Make a QR code that joins your Wi-Fi in one scan. Download PNG or SVG, or print a \"Scan to join Wi-Fi\" sign, A6 card or table tent PDF.",
    "card": "QR code that joins your Wi-Fi in one scan.",
    "intro": "Type your Wi-Fi name and password to make a QR code that iPhone and Android cameras scan to join the network, no typing needed. It uses the standard WIFI: format with correct escaping of special characters, supports WPA/WPA2/WPA3, WEP, open and hidden networks, and gives you a PNG, an SVG, or a printable \"Scan to join Wi-Fi\" sign, A6 card or table tent. Your password stays on your device.",
    "steps": [
      "Type the network name (SSID) and choose the security type.",
      "Type the Wi-Fi password exactly.",
      "Scan the code with your phone to test it.",
      "Download the PNG or SVG, or make a printable card PDF."
    ],
    "faq": [
      [
        "Which phones can scan a Wi-Fi QR code?",
        "iPhones from iOS 11 and most Android phones from Android 10 join directly from the camera app. Older phones can use a QR scanner app."
      ],
      [
        "My network uses WPA3. Which option do I choose?",
        "Choose \"WPA / WPA2 / WPA3\". The code says WPA, and the phone works out the exact version when it connects."
      ],
      [
        "My password has ; or : in it. Will it work?",
        "Yes. Special characters (\\ ; , : and \") are escaped in the code as the format requires, so the phone reads the password correctly."
      ],
      [
        "Is my Wi-Fi password saved or uploaded?",
        "No. The code is made in your browser. The network name is remembered on this device for next time, but the password is not."
      ],
      [
        "Can I hide the password on the printed card?",
        "Yes. Untick \"Print the network name and password as text\" and the card shows only the heading and the QR code."
      ],
      [
        "What is a table tent?",
        "A card you fold in half to stand on a table. The PDF prints the design twice, once upside down, so the code faces both sides after folding."
      ]
    ],
    "icon": "<path d=\"M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0\"/><circle cx=\"12\" cy=\"19\" r=\"1.2\"/>"
  },
  {
    "slug": "sudoku-solver",
    "cat": "Study tools",
    "name": "Sudoku Solver",
    "title": "Sudoku Solver - Solve From a Photo, With Step-by-Step Hints",
    "desc": "Solve any sudoku instantly: type it, paste 81 digits or take a photo. Finds no-solution and multi-solution puzzles and explains hints step by step.",
    "card": "Solve sudoku from a photo, with hints.",
    "intro": "Solve any 9x9 sudoku in a moment. Type the puzzle on the board, paste it as 81 digits, or take a photo or screenshot: the tool finds the grid, straightens it, and reads the numbers on your device so you can check and fix them before solving. It tells you if a puzzle has no solution or more than one, and the Hint button explains the next step (naked single or hidden single) in plain words. For new puzzles, try the Sudoku Generator.",
    "steps": [
      "Type the puzzle, paste 81 digits, or use a photo or screenshot.",
      "Check the numbers read from a photo (yellow squares) and fix any mistakes.",
      "Press Solve for the full answer.",
      "Or press Hint to see and understand one step at a time."
    ],
    "faq": [
      [
        "Can it read a sudoku from a photo?",
        "Yes. It finds the grid, corrects a slight tilt or rotation, and reads the digits with text recognition that runs on your device. Numbers read from the picture are shown in yellow so you can check them; darker yellow means unsure."
      ],
      [
        "What if a number is read wrong?",
        "Tap the square and tap the right number, or ✕ to empty it. Always compare the board with your puzzle before solving."
      ],
      [
        "What does \"more than one solution\" mean?",
        "A proper sudoku has exactly one answer. If there are several, a number is probably missing from the board. The tool shows one of the solutions."
      ],
      [
        "How do the hints work?",
        "A hint finds a naked single (a square where only one number fits) or a hidden single (a number that fits in only one square of a row, column or box) and explains why. Hard puzzles may need techniques beyond these; then press Solve."
      ],
      [
        "Is my photo uploaded?",
        "No. The picture is read in your browser and never leaves your device."
      ],
      [
        "Where can I get new puzzles?",
        "Use the Sudoku Generator on this site to play or print puzzles at four levels, each with exactly one solution."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"1\"/><path d=\"M9 3v18M15 3v18M3 9h18M3 15h18\"/><path d=\"M16.5 4.5l1.5 2 2.5-3\"/>"
  },
  {
    "slug": "sunrise-sunset",
    "cat": "Time tools",
    "name": "Sunrise & Sunset Times",
    "title": "Sunrise and Sunset Times - Twilight, Golden Hour, Day Length",
    "desc": "Sunrise, sunset, solar noon, day length, twilight, golden hour and blue hour for any place and date, with a sun path diagram and a printable month table.",
    "card": "Sunrise, sunset, golden hour and twilight anywhere.",
    "intro": "Find sunrise and sunset for any city or spot on Earth and any date, in that place's own time zone. See dawn and dusk twilight, golden and blue hour, where the Sun is right now, its path across the sky, and a full month table to print or download. Midnight sun and polar night are handled too.",
    "steps": [
      "Search for your city, press Use my location, or type latitude and longitude.",
      "Pick a date, or step day by day with the arrows.",
      "Read sunrise, sunset, day length, twilight, golden hour and the Sun's direction.",
      "Scroll down for the sun path diagram and the month table, which you can print or save as CSV."
    ],
    "faq": [
      [
        "How accurate are the times?",
        "They are calculated with a precise astronomy library and match published tables to within about a minute. Hills, tall buildings and the weather can change what you actually see by a few minutes."
      ],
      [
        "What is the difference between civil, nautical and astronomical twilight?",
        "They are the times when the Sun is 6°, 12° and 18° below the horizon. Civil twilight has enough light for most outdoor activities; at nautical twilight the horizon is hard to see; after astronomical twilight the sky is fully dark."
      ],
      [
        "What are golden hour and blue hour?",
        "Golden hour is when the Sun is low (from 4° below to 6° above the horizon) and the light is warm and soft. Blue hour is just before sunrise and after sunset, when the Sun is 4° to 6° below the horizon and the sky turns deep blue."
      ],
      [
        "Why does it say the Sun does not set?",
        "Near the poles the Sun can stay up all day in summer (midnight sun) or stay below the horizon all day in winter (polar night). The tool tells you which, and shows any twilight there is."
      ],
      [
        "Which time zone are the times in?",
        "The time zone of the place you chose, including daylight saving time on that date. For your own location, your device's time zone is used. You can choose any time zone when you type coordinates."
      ],
      [
        "Is my location sent anywhere?",
        "No. Everything is calculated on your device and works offline. Your location is only used on this page if you allow it."
      ]
    ],
    "icon": "<path d=\"M12 3v3M4.9 7.9l2.1 2.1M19.1 7.9 17 10M2 17h20M5 21h14\"/><path d=\"M7 17a5 5 0 0 1 10 0\"/>"
  },
  {
    "slug": "night-sky-map",
    "cat": "Study tools",
    "name": "Night Sky Map",
    "title": "Night Sky Map - Live Star Chart with Planets and Moon",
    "desc": "A live star map for your place and time: bright stars, constellations, planets and the Moon. Drag, zoom, point your phone at the sky, red night mode.",
    "card": "Live star chart with planets, Moon and constellations.",
    "intro": "See what is in the sky above you right now, or at any date and time. The map shows the brightest stars, constellation lines and names, the planets, the Sun and the Moon with its phase, with the horizon and compass points. Drag to look around, move the time slider, point your phone at the sky, and tap anything to learn what it is and when it rises and sets.",
    "steps": [
      "Choose your place: search a city, use your location, or type coordinates.",
      "The map shows the sky now. Use the date box or the time slider to see another time.",
      "Drag to look around, pinch or use + and − to zoom, or press Point phone at sky.",
      "Tap a star, planet or the Moon for its name, brightness and rise and set times."
    ],
    "faq": [
      [
        "How do I find a planet?",
        "Look at the Up in the sky list under the map. Tap a planet to centre the map on it and see its direction and height above the horizon, then look that way."
      ],
      [
        "How does phone mode work?",
        "Press Point phone at sky and hold your phone up. The map follows your phone's compass and motion sensors. On iPhone you will be asked to allow motion access. The compass can be a few degrees off; move the phone in a figure 8 to calibrate it."
      ],
      [
        "What is red night mode for?",
        "Red light keeps your eyes adjusted to the dark, so you can still see faint stars after looking at the screen. Turn your screen brightness down as well."
      ],
      [
        "Which stars are shown?",
        "The 300 brightest stars plus all the stars that make up the constellation figures, from the Hipparcos catalogue, with the 88 constellations."
      ],
      [
        "Why are no stars shown in the daytime?",
        "When the Sun is up the sky is drawn blue and the stars are dimmed, because you could not see them. Move the time slider to the evening."
      ],
      [
        "Does it need the internet?",
        "No. All positions are calculated on your device, so it works outdoors without a signal once the page has loaded."
      ]
    ],
    "icon": "<path d=\"M12 3l1.8 3.9 4.2.5-3.1 2.9.8 4.2L12 12.4 8.3 14.5l.8-4.2L6 7.4l4.2-.5z\"/><path d=\"M5 21l3-4M19 21l-3-4M4 18h3M17 18h3\"/>"
  },
  {
    "slug": "moon-phase",
    "cat": "Time tools",
    "name": "Moon Phase Calendar",
    "title": "Moon Phase Today - Moon Calendar, Full Moon and Moonrise",
    "desc": "The Moon phase today with lit percentage and age, the next new, quarter and full moons, moonrise and moonset for your place, and a printable moon calendar.",
    "card": "Moon phase today, moonrise and a moon calendar.",
    "intro": "Check tonight's Moon: its phase, how much is lit and how old it is, drawn the way it looks from your hemisphere. See the dates and times of the next new, first quarter, full and last quarter moons, moonrise and moonset for your place, and a month calendar of drawn phases you can print.",
    "steps": [
      "Choose your place by searching a city, using your location, or typing coordinates.",
      "See today's phase, lit percentage, age, moonrise and moonset.",
      "Check the next main phases with dates and times in your time zone.",
      "Browse the month calendar, tap a day for details, and print it."
    ],
    "faq": [
      [
        "When is the next full moon?",
        "It is shown in the Next full moon card and in the Next main phases list, with the exact date and time in your time zone."
      ],
      [
        "Why does the Moon look flipped?",
        "People in the southern hemisphere see the Moon upside down compared with the northern hemisphere, so the lit side is on the other side. The tool draws it the right way for your place; you can also choose a hemisphere yourself."
      ],
      [
        "Is the phase the same everywhere?",
        "Yes. The phase and the exact time of a full or new moon are the same all over the world; only the local clock time and the date can differ, and the Moon looks rotated in different places."
      ],
      [
        "Why is there no moonrise on some days?",
        "The Moon rises about 50 minutes later each day, so about once a month it rises just after midnight and skips one calendar day. Near the poles it can also stay up or down all day."
      ],
      [
        "How accurate are the times?",
        "Phase times are calculated to within about a minute of published astronomical tables. Moonrise and moonset are for a flat horizon."
      ],
      [
        "Does it work offline?",
        "Yes. Everything is calculated on your device and nothing is sent anywhere."
      ]
    ],
    "icon": "<path d=\"M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z\"/>"
  },
  {
    "slug": "decision-matrix",
    "cat": "Calculators",
    "name": "Decision Matrix",
    "title": "Decision Matrix Calculator - Weighted Scoring with Templates",
    "desc": "Compare options with a weighted decision matrix: score each choice on what matters, see totals, ranking, a chart and what weight change would flip the winner.",
    "card": "Weighted scoring to pick the best option.",
    "intro": "Make a hard choice clearer. List your options and the things that matter, say how important each one is, and score every option. The matrix adds it all up, ranks the options with a chart, and tells you how safe the result is: which weight change would make a different option win. Start from a template for a phone, job offer, home, laptop or supplier.",
    "steps": [
      "Start from a template or press New, and name your options and criteria.",
      "Set how important each criterion is (1 to 5, or percentages).",
      "Score every option from 0 to 10 for each criterion.",
      "Read the winner, ranking and sensitivity check, then save, print or download a CSV."
    ],
    "faq": [
      [
        "How is the score worked out?",
        "Each score is multiplied by its criterion's weight, the results are added up and divided by the total weight. The result is a weighted average out of 10 for each option."
      ],
      [
        "What does the sensitivity check mean?",
        "For each criterion it finds the smallest change in its weight that would make another option win. If no single change can do that, the winner is robust. If a small change flips it, think carefully about your weights."
      ],
      [
        "Should I use importance 1–5 or percentages?",
        "Importance 1–5 is quickest. Percentages let you share exactly 100% between the criteria. You can switch at any time and the weights are converted."
      ],
      [
        "What if a criterion is bad when it is high, like price?",
        "Always score so that 10 means best for you. A cheap option gets a high price score."
      ],
      [
        "Where are my decisions saved?",
        "Only in this browser on this device. Use Back up all to download a file you can restore on another device."
      ],
      [
        "Can I share it?",
        "Yes. Print it, save it as a PDF, or download a CSV that opens in any spreadsheet."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\"/><path d=\"M3 9h18M3 15h18M9 3v18M15 3v18\"/><path d=\"M16.5 11.5l1.2 1.2 2-2.4\"/>"
  },
  {
    "slug": "pros-and-cons",
    "cat": "Calculators",
    "name": "Pros and Cons List",
    "title": "Pros and Cons List Maker - Weighted, with Gut Coin Toss",
    "desc": "Make a weighted pros and cons list with a balance meter and verdict, try a coin toss for your gut, ask yes or no, or pick at random. Save, print, share.",
    "card": "Weighted pros and cons with a verdict.",
    "intro": "Write down the good and bad sides of a decision and say how much each one matters. A balance meter and a plain verdict show which way it leans. Not sure? Toss a coin for your gut and notice how you feel when it lands. There is also a simple yes or no answer and a random picker for small choices.",
    "steps": [
      "Name your decision, then add pros and cons with an importance from 1 to 5.",
      "Watch the balance meter and read the verdict.",
      "Try Gut coin toss and note how you felt when the coin landed.",
      "Save several decisions, print them, or share the list as an image."
    ],
    "faq": [
      [
        "How is the verdict worked out?",
        "Each pro and con counts by its importance. The meter compares the total weight of pros with the total weight of cons, from \"Probably not\" to \"Go for it\"."
      ],
      [
        "What is the coin toss for my gut?",
        "Let the coin choose, then notice your first feeling. If you feel relieved, the coin picked what you wanted. If you feel disappointed, you really wanted the other side. The coin does not decide; your reaction tells you."
      ],
      [
        "Is the coin, yes or no and random pick fair?",
        "Yes. They use your device's secure random number generator, so each side or item has an equal chance."
      ],
      [
        "Where are my lists saved?",
        "Only in this browser on this device. Use Back up all to download a file you can restore later or on another device."
      ],
      [
        "How do I share my list?",
        "Press Share as image. On phones you can send it straight to a chat app; otherwise it downloads as a picture."
      ],
      [
        "Should I trust the verdict?",
        "Use it as a guide, not a rule. One very important con can be a deal-breaker even if the total says yes."
      ]
    ],
    "icon": "<path d=\"M12 3v18M5 21h14\"/><path d=\"M4 8h6l-3 6zM14 8h6l-3 6z\"/><path d=\"M4 14a3 3 0 0 0 6 0M14 14a3 3 0 0 0 6 0M7 6h10\"/>"
  },
  {
    "slug": "bubble-level",
    "cat": "Calculators",
    "name": "Bubble Level",
    "title": "Bubble Level - Free Spirit Level App for Your Phone",
    "desc": "Turn your phone into a spirit level: 2-axis bubble, picture-frame mode, degrees and percent slope, beep when level, hold and calibration. Free, no app.",
    "card": "Spirit level with degrees, percent and beep.",
    "intro": "Lay your phone on a shelf or table, or stand it on the edge of a picture frame, to see the tilt in degrees, percent slope and ratio. It beeps and vibrates when level, can hold a reading, and can be calibrated so your sensor reads true. No tilt sensor on your computer? The slope calculator works from measurements.",
    "steps": [
      "Choose Flat surface, or Wall / picture for frames, shelves and door posts.",
      "Press Start level (on iPhone, allow Motion and Orientation) and place the phone.",
      "Adjust until the bubble turns green and the phone beeps; press Hold reading to read it later.",
      "Calibrate once with Set zero on a level surface, or with the two-step calibration."
    ],
    "faq": [
      [
        "How accurate is a phone spirit level?",
        "After calibration most phones are accurate to about 0.1 to 0.3 degrees on a firm surface. Without calibration they can be off by a degree or more, so use Set zero or the two-step calibration."
      ],
      [
        "What is the two-step calibration?",
        "Measure, turn the phone around 180 degrees on the same spot, and measure again. The error of the sensor cancels out, so you do not need a surface you know is level."
      ],
      [
        "Why does it ask for permission on iPhone?",
        "Safari on iPhone and iPad only lets websites read the motion sensors after you tap Allow. The readings stay on your phone."
      ],
      [
        "Does it work on a laptop?",
        "Most laptops and desktop computers have no tilt sensor. The tool tells you so and offers the slope calculator instead."
      ],
      [
        "How do I convert degrees to percent slope?",
        "Percent slope is the tangent of the angle times 100. For example 1 degree is about 1.75 percent and 45 degrees is 100 percent. The slope calculator does it for you."
      ],
      [
        "Why does my case matter?",
        "A curved back or a camera bump can tilt the phone. Take thick cases off, or calibrate with the case on and always measure the same way."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"8\" width=\"20\" height=\"8\" rx=\"4\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M8.5 9v6M15.5 9v6\"/>"
  },
  {
    "slug": "compass",
    "cat": "Calculators",
    "name": "Compass",
    "title": "Online Compass - True & Magnetic North, Bearing Lock",
    "desc": "Free compass for your phone: degrees and direction, true or magnetic north, lock a bearing, interference warnings, calibration and a sun compass fallback.",
    "card": "Phone compass with true north and bearings.",
    "intro": "Use your phone as a compass. See the direction in degrees and as N, NE or WSW, switch between magnetic north and true (map) north using the World Magnetic Model 2025, lock a bearing to follow it, and calibrate. No compass sensor? Find directions from the sun for your place and time.",
    "steps": [
      "Press Start compass (on iPhone, allow Motion and Orientation) and hold the phone flat.",
      "Read the direction the top of the phone points, in degrees and as a compass direction.",
      "For map north, set your location and choose True north; press Lock this bearing to follow a direction.",
      "If the reading is unsteady, move away from metal and draw a figure 8 in the air to calibrate."
    ],
    "faq": [
      [
        "What is the difference between true north and magnetic north?",
        "True north is the direction to the North Pole, used on maps and GPS. A compass points to magnetic north. The angle between them is the magnetic declination, which depends on where you are and changes slowly over time."
      ],
      [
        "How is the declination worked out?",
        "With the World Magnetic Model 2025 from NOAA and the British Geological Survey, calculated on your device from the location you give. Nothing is sent anywhere."
      ],
      [
        "Why does my compass point the wrong way?",
        "Magnets and metal nearby, such as cars, speakers, laptops and magnetic phone cases, disturb the sensor. Move away from them and draw a figure 8 with the phone. You can also fine-tune with a known landmark or the sun."
      ],
      [
        "Does it work on a computer?",
        "Laptops and desktops normally have no compass sensor. The tool tells you, and shows where the sun is instead."
      ],
      [
        "Does it need internet?",
        "No. Once the page is open it works offline, including true north and the sun position. Getting your location may take longer without internet."
      ],
      [
        "Is my location stored?",
        "Only on this device, so you do not have to type it again. Press Forget location to remove it."
      ]
    ],
    "icon": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15.5 8.5l-2 5-5 2 2-5z\"/><path d=\"M12 3v2M12 19v2M3 12h2M19 12h2\"/>"
  },
  {
    "slug": "protractor",
    "cat": "Calculators",
    "name": "Protractor",
    "title": "Online Protractor - Measure Angles in Photos & on Screen",
    "desc": "Measure angles in a photo by dragging three points, use a real-size on-screen protractor and ruler (credit-card calibration), or the phone tilt sensor.",
    "card": "Measure angles in photos, on screen or by tilt.",
    "intro": "Measure any angle three ways: drag three dots on a photo or camera picture, place a small object on a real-size protractor on your screen, or lay your phone on a surface to read its angle with the tilt sensor. Calibrate the screen with a standard bank or ID card. Photos never leave your device.",
    "steps": [
      "Choose Photo, On the screen or Phone tilt.",
      "Photo: open or take a picture and drag B onto the corner and A and C along the two edges.",
      "On the screen: put the object on the protractor and drag the blue handle to its edge; calibrate with a card for real size.",
      "Phone tilt: press Start sensor, put the phone on the surface, and mark a first surface to compare two."
    ],
    "faq": [
      [
        "How do I measure an angle in a photo?",
        "Open the photo, then drag the middle dot B onto the corner and dots A and C along the two edges. The angle at B appears at once, along with the other side (360 degrees minus it)."
      ],
      [
        "Why calibrate with a credit card?",
        "Screens have different pixel sizes, so a website cannot know how big a millimetre is. Bank, ID and driving licence cards share one standard size, 85.6 by 54 mm, so matching one tells the tool your screen size. Angles are correct even without it."
      ],
      [
        "Can I measure a roof or ramp angle?",
        "Yes. Use Phone tilt and lay the phone on the surface, or take a straight-on photo and measure it in Photo mode."
      ],
      [
        "Are my photos uploaded?",
        "No. Pictures are opened and measured only in your browser."
      ],
      [
        "Why is my photo angle a bit off?",
        "Photos taken at a slant distort angles. Stand square to the object, and use the magnifier to place the dots exactly."
      ],
      [
        "Can I save the result?",
        "Yes. Download the photo with the angle drawn on it, or use Print / PDF."
      ]
    ],
    "icon": "<path d=\"M3 18a9 9 0 0 1 18 0z\"/><path d=\"M12 18l5-6\"/><path d=\"M7 18v-1M12 18v-2M17 18v-1\"/>"
  },
  {
    "slug": "light-meter",
    "cat": "Calculators",
    "name": "Light Meter",
    "title": "Light Meter - Approximate Lux & EV With Your Phone",
    "desc": "Estimate light in lux, foot-candles and EV with your phone camera or light sensor. Guides for photography, houseplants and reading light. Calibration.",
    "card": "Approximate lux and EV for photos and plants.",
    "intro": "Get an approximate light level in lux or foot-candles and a photographic exposure value from your phone camera, or from the ambient light sensor where your browser allows it. Guides show what the number means for photography, houseplants and reading or work spaces. Calibrate against a real lux meter for better accuracy. Nothing is recorded.",
    "steps": [
      "Press Start light meter and allow the camera if asked.",
      "Lay the phone where you want to measure, front camera facing the light, ideally under thin white paper.",
      "Read the approximate lux, EV and the plant and reading guides.",
      "Optional: calibrate against a real lux meter, or use the camera-settings calculator."
    ],
    "faq": [
      [
        "How accurate is a phone light meter?",
        "It is an estimate. With the ambient light sensor it is often within about 20 percent. With the camera, expect errors of 2 times or more unless you calibrate, and some browsers only allow a relative brightness."
      ],
      [
        "Why does it say Relative only?",
        "Your browser does not tell websites the camera exposure, and the camera keeps adjusting itself. Then only a relative brightness can be shown, which is still useful for comparing spots in the same room."
      ],
      [
        "How much light do houseplants need?",
        "Roughly: low light 500 to 2,500 lux, medium 2,500 to 10,000 lux, bright indirect 10,000 to 20,000 lux, and direct sun above 20,000 lux. Guides differ by plant."
      ],
      [
        "How much light is needed for reading?",
        "About 300 to 500 lux for reading and desk work, and more for detailed tasks or older eyes, based on common lighting standards."
      ],
      [
        "What is EV?",
        "Exposure value is a photography scale of light. Each step up doubles the light. A sunny day is about EV 15 at ISO 100, and a living room at night about EV 5 to 6."
      ],
      [
        "Is the camera picture saved?",
        "No. The tool only reads the average brightness in your browser. No picture is stored or sent."
      ]
    ],
    "icon": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\"/>"
  },
  {
    "slug": "vibration-meter",
    "cat": "Calculators",
    "name": "Vibration Meter",
    "title": "Vibration Meter - Phone Accelerometer, Peak, RMS & Hz",
    "desc": "Measure vibration with your phone: live graph in m/s² or g, peak, RMS, main frequency in Hz and rpm, record sessions and export CSV. Free and private.",
    "card": "Measure shaking: RMS, peak, Hz and rpm.",
    "intro": "Use your phone's accelerometer to measure how much a washing machine, car, fan or other machine vibrates. See a live graph with gravity removed, the peak and RMS strength, and the main frequency in Hz and rpm from an FFT. Record named sessions, compare before and after, and export CSV. Readings stay on your device.",
    "steps": [
      "Press Start (on iPhone, allow Motion and Orientation) and lay the phone flat on the machine.",
      "Watch the live graph, RMS, peak and main frequency in Hz and rpm.",
      "Type a name and press Record session, then Stop recording to save it.",
      "Compare sessions, download the raw CSV, export or print the list, and calibrate on a still table."
    ],
    "faq": [
      [
        "How accurate is a phone vibration meter?",
        "Good enough to compare before and after, or one machine with another. Phone accelerometers are not calibrated instruments, and calibration here only removes sensor noise and corrects the scale using gravity."
      ],
      [
        "What is RMS?",
        "Root mean square is the average strength of the vibration over time. It is steadier than the peak and is what most vibration standards use."
      ],
      [
        "What frequencies can it measure?",
        "Phones report motion about 50 to 100 times a second, so up to about 25 to 50 Hz (1,500 to 3,000 rpm). Faster vibrations can appear at a wrong, lower frequency."
      ],
      [
        "How is gravity removed?",
        "A high-pass filter removes slow changes such as gravity and the phone tilting, leaving only the vibration. You can choose where it starts (0.5 to 5 Hz)."
      ],
      [
        "Where are my sessions saved?",
        "Only in this browser. Export them as JSON to keep a backup or move them to another device, and import them again later."
      ],
      [
        "Does it work on a computer?",
        "Most laptops and desktops have no accelerometer, so the tool says so. You can still view, import and export saved sessions."
      ]
    ],
    "icon": "<rect x=\"8\" y=\"5\" width=\"8\" height=\"14\" rx=\"2\"/><path d=\"M4 8v8M2 10v4M20 8v8M22 10v4\"/>"
  },
  {
    "slug": "online-piano",
    "cat": "Media tools",
    "name": "Online Piano",
    "title": "Online Piano - Play, Record and Download WAV or MIDI",
    "desc": "Play a free online piano with your mouse, touch or computer keyboard. Grand piano, electric piano, organ and pads, sustain, chord names, WAV and MIDI.",
    "card": "Play piano on any screen and record it.",
    "intro": "Play a full 88-key piano in your browser. Tap the keys (several fingers at once on a phone) or use your computer keyboard, hold the space bar for the sustain pedal and change octave with the arrow keys. The chord you play is named as you go. Record your playing and download it as a WAV sound file or a MIDI file. The sounds are made on your device, nothing is uploaded.",
    "steps": [
      "Tap a key, or press Z to M and Q to U on your computer keyboard.",
      "Choose a sound, the number of keys on screen and the note names you like.",
      "Hold the space bar (or tap Sustain) for the pedal; use − and + to change octave.",
      "Press Record, play, then Play it back or download it as WAV or MIDI."
    ],
    "faq": [
      [
        "Which computer keys play the notes?",
        "The bottom letter row Z X C V B N M plays the white keys from C, with S D G H J for the black keys. The top row Q W E R T Y U plays the next octave, with the number keys 2 3 5 6 7 for black keys. The letters are shown on the piano keys. The arrow keys ← and → change the octave."
      ],
      [
        "Can I play chords on a phone?",
        "Yes. Several fingers can press keys at the same time, and you can slide along the keys. Move along the keyboard with the blue box above the keys. Turning the phone sideways or using Full screen shows more keys."
      ],
      [
        "Why is there no sound on my iPhone?",
        "iPhone mutes web sounds when the silent switch is on. Turn silent mode off and turn the volume up, then tap a key again."
      ],
      [
        "What is the difference between the WAV and MIDI downloads?",
        "WAV is the sound itself, ready to play or share. MIDI holds the notes you played (which key, when and how long), so you can open it in a music app, change the instrument or print it as sheet music."
      ],
      [
        "How does the chord name work?",
        "It looks at all the keys you hold (and keys still ringing with the pedal) and names the chord, such as C, Am7 or G/B. Two keys show the interval between them."
      ],
      [
        "Is my recording saved?",
        "Your last recording is kept in this browser on this device until you delete it or record a new one. Download it as WAV or MIDI to keep it for good."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 4v16M12 4v16M16 4v16\"/><path d=\"M6.5 4v8h3V4M14.5 4v8h3V4\" fill=\"currentColor\"/>"
  },
  {
    "slug": "drum-machine",
    "cat": "Media tools",
    "name": "Drum Machine",
    "title": "Online Drum Machine - 16-Step Beat Maker with WAV Export",
    "desc": "Make beats in your browser: a 16-step drum machine with 8 drum sounds, swing, velocity, A/B patterns, presets for many styles, mute and solo, and WAV export.",
    "card": "Make drum beats and download them as WAV.",
    "intro": "Make a drum beat on a 16-step grid. Eight drum sounds (kick, snare, clap, closed and open hi-hat, tom, rim and cowbell) are made on your device. Set the tempo and swing, choose loud, medium or soft hits, chain pattern A into pattern B, start from presets such as house, hip-hop, rock, reggaeton, afrobeat and trap, then download a loop-ready WAV file or save the pattern.",
    "steps": [
      "Choose a preset or start empty, and press Play.",
      "Tap steps on the grid to add or remove hits; pick Loud, Medium or Soft first.",
      "Set the tempo and swing, and use Pattern B and \"A then B\" for a longer groove.",
      "Download the beat as a WAV loop, or save the pattern as a file to open later."
    ],
    "faq": [
      [
        "How do I make a beat?",
        "Each row is a drum and each square is a sixteenth note, so 16 squares make one bar of 4/4. Tap a square to place a hit. A typical start: kick on 1, 5, 9 and 13, snare on 5 and 13, and closed hi-hat on every odd step."
      ],
      [
        "What does swing do?",
        "Swing delays every second sixteenth note a little, which gives a bouncy, human feel. 50% is straight, about 66% is a triplet shuffle, and 75% is the most."
      ],
      [
        "Is the timing accurate?",
        "Yes. The hits are scheduled ahead on your device's audio clock rather than with a simple timer, so the beat stays steady. The WAV file is made offline with every hit placed on its exact sample."
      ],
      [
        "Can I use the WAV in my song?",
        "Yes. The sounds are made by this page, not copied from sample packs, so you can use your beats however you like. \"Loop-ready\" makes the file repeat without a gap in any audio editor."
      ],
      [
        "What are patterns A and B?",
        "Two separate bars. Edit each one with the Pattern A and Pattern B buttons, and choose \"A then B\" to play them one after the other, for example a groove and a fill."
      ],
      [
        "Where is my beat saved?",
        "Your current beat is kept in this browser on this device. Use \"Save pattern (JSON)\" to keep a copy, share it, or open it on another device."
      ]
    ],
    "icon": "<ellipse cx=\"12\" cy=\"9\" rx=\"8\" ry=\"3\"/><path d=\"M4 9v7c0 1.7 3.6 3 8 3s8-1.3 8-3V9\"/><path d=\"M8 3l4 6M16 3l-4 6\"/>"
  },
  {
    "slug": "chord-progression-generator",
    "cat": "Media tools",
    "name": "Chord Progression Generator",
    "title": "Chord Progression Generator - Play, Guitar Shapes, MIDI",
    "desc": "Generate chord progressions in any key, scale or mode by mood: names and Roman numerals, guitar and piano diagrams, capo tips, playback and MIDI export.",
    "card": "Chord progressions in any key, with shapes.",
    "intro": "Get chord progressions that work. Choose a key, a scale (major, minor or a mode) and a mood such as pop, sad, rock, jazz or blues, and get well-known patterns like I–V–vi–IV spelled correctly in that key, with Roman numerals. Hear them as block chords or arpeggios, see guitar shapes and piano keys, get a capo suggestion, transpose, or type your own numerals, then download a MIDI file.",
    "steps": [
      "Choose the key, the scale and a mood or style.",
      "Press Generate progression, or pick a pattern from the list.",
      "Press Play to hear it, and change the style, sound and tempo.",
      "Look at the guitar or piano diagrams, transpose, and download the MIDI."
    ],
    "faq": [
      [
        "What do the Roman numerals mean?",
        "They number each chord by the scale step its root is on: I is the first step, V the fifth. Capitals are major chords, small letters are minor, ° is diminished. In C major, I–V–vi–IV is C–G–Am–F; in G major the same numerals give G–D–Em–C."
      ],
      [
        "Are the chord names spelled correctly?",
        "Yes. Every chord is built from note letters a third apart, so you get E♭ and B♭ in E♭ major and F♯ and C♯ in D major, never mixed spellings. Keys are named with the fewest sharps or flats (D♭ major, C♯ minor)."
      ],
      [
        "How does the capo suggestion work?",
        "It checks capo positions from fret 1 to 7 and picks the one that turns your chords into easy open shapes. For example, B♭ F Gm E♭ becomes G D Em C shapes with a capo on fret 3."
      ],
      [
        "Why does a minor key use a major V chord?",
        "Many minor-key songs raise the seventh note to make a stronger pull back home, which makes V major (E major in A minor). The patterns use it where musicians usually do. Choose Harmonic minor to see that scale."
      ],
      [
        "What are modes?",
        "Scales that start from a different step of the major scale. Dorian sounds minor but bright, Mixolydian major but bluesy, Lydian dreamy, Phrygian dark and Spanish-sounding. The generator uses only the chords of the mode you pick."
      ],
      [
        "Can I use the progressions in my songs?",
        "Yes. Chord progressions are common building blocks of music and are free for everyone to use."
      ]
    ],
    "icon": "<path d=\"M4 4v16M9 4v16M14 4v16M19 4v16M4 8h15\"/><circle cx=\"9\" cy=\"11\" r=\"1.6\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"14\" r=\"1.6\" fill=\"currentColor\"/><circle cx=\"19\" cy=\"11\" r=\"1.6\" fill=\"currentColor\"/>"
  },
  {
    "slug": "scoreboard-keeper",
    "cat": "Time tools",
    "name": "Scoreboard Keeper",
    "title": "Scoreboard Keeper - Cricket, Football, Card and Board Games",
    "desc": "A free scoreboard for any game: cricket with overs and run rate, football, basketball, volleyball, badminton, table tennis, carrom, card and board games.",
    "card": "Keep score for any sport or game.",
    "intro": "Keep score for any game on a big, easy-to-read board. Choose cricket (runs, wickets, overs, extras, ball-by-ball and run rate), football, basketball, volleyball, badminton, table tennis, carrom, card games or board games with any number of players, or a custom game. Undo any mistake, run a match clock or a turn timer, show it full screen to everyone, keep a match history on your device and share the result as a picture.",
    "steps": [
      "Choose the game, type the team or player names and press Start match.",
      "Tap the big buttons to score; Undo fixes any mistake.",
      "Start the match clock or turn timer, and use Full screen to show the crowd.",
      "Press Finish and save, then share the result as an image."
    ],
    "faq": [
      [
        "How do I score extras in cricket?",
        "Tap Wide, No ball, Bye or Leg bye first, then the runs. A wide or no ball adds 1 extra run for you and does not count as a ball; byes and leg byes count as a ball. For a plain wide with no runs, tap Wide then 0."
      ],
      [
        "Does it know the rules of each sport?",
        "The basics, yes. Volleyball sets go to 25 (15 in the deciding set), badminton to 21 with a golden point at 30, table tennis to 11, all with a two-point lead, and the server is shown. Cricket ends an innings at all out, the overs limit or when the target is reached. You can change the numbers before you start."
      ],
      [
        "Can I use it for card and board games?",
        "Yes. Add up to 12 players, type each round's scores and the totals add up. Choose whether the highest or lowest score wins, set a score that ends the game, and use the turn timer to keep turns short."
      ],
      [
        "How do I show the score on a big screen?",
        "Press Full screen. On phones and tablets the board turns sideways where the browser allows it. \"Hide buttons\" leaves only the scores for the crowd."
      ],
      [
        "Where is the history saved?",
        "Only in this browser on this device. Export it as JSON or CSV to keep a copy, and import the JSON on another device. Nothing is uploaded."
      ],
      [
        "What if I close the page by mistake?",
        "The match in progress is saved after every tap, so it comes back when you open the page again, with the undo list."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M12 5v14\"/><path d=\"M6 10h2v4H6zM16 10h2v4h-2z\"/>"
  },
  {
    "slug": "tournament-bracket-maker",
    "cat": "Generators",
    "name": "Tournament Bracket Maker",
    "title": "Tournament Bracket Maker - Knockout, League and Groups",
    "desc": "Make a tournament bracket for 2 to 64 teams: single or double elimination with byes, round robin league table, or groups then knockout. Print, PDF and PNG.",
    "card": "Brackets, leagues and groups for 2 to 64.",
    "intro": "Make a tournament for any sport or game. Type 2 to 64 teams or players and choose single elimination (with byes for the top seeds), double elimination, a round robin league with a points table, or groups followed by a knockout. Draw at random or keep your order, enter the scores, and winners move on by themselves. Print it or save a PDF that fits A4 or Letter landscape, download a PNG, and save it as a file to carry on later.",
    "steps": [
      "Type the teams or players, one per line.",
      "Choose the format and whether to draw at random or keep your order, then press Make the bracket.",
      "Tap a match to enter the score; the winner moves on.",
      "Print, save as PDF or PNG, or save the tournament as a file."
    ],
    "faq": [
      [
        "What happens if the number of teams is not 4, 8, 16, 32 or 64?",
        "The bracket is filled up with byes, which go to the top seeds, so they go straight through to round 2. With 13 teams, for example, 3 teams get a bye."
      ],
      [
        "How does double elimination work?",
        "A team is out only after losing twice. Losers of the winners' bracket drop into the losers' bracket. The two bracket winners meet in the grand final; if the losers' bracket winner wins it, a second final decides the title (you can turn this off)."
      ],
      [
        "How is the league table sorted?",
        "By points (3 for a win, 1 for a draw and 0 for a loss unless you change them), then score difference, then scores for, then the result between the tied teams."
      ],
      [
        "What if a knockout match is a draw?",
        "Enter the level score and choose who went through, for example after penalties or a tie-break. You can also choose the winner without a score."
      ],
      [
        "Will it print nicely?",
        "Yes. Choose A4 or Letter. The bracket is fitted to landscape pages, and large brackets are split across several pages between matches, with the page number on each. Use \"Save as PDF\" in the print window for a PDF."
      ],
      [
        "Is my tournament saved?",
        "It is saved in this browser on this device after every result. Use Save (JSON) to keep a copy or move it to another device, and Open a saved file to continue."
      ]
    ],
    "icon": "<path d=\"M3 4h5v4H3zM3 16h5v4H3zM8 6h3v12H8M11 12h4M15 10h6v4h-6z\"/>"
  },
  {
    "slug": "letter-templates",
    "cat": "Text tools",
    "name": "Letter Templates",
    "title": "Free Letter Templates - Leave, Complaint & Formal Letters",
    "desc": "27 formal letter templates: leave, resignation, complaint, refund, landlord, bank and school letters. Fill in, edit, download PDF, Word or text.",
    "card": "Write formal letters from 27 ready templates.",
    "intro": "Pick a letter, fill in a few details and get a clear, polite formal letter with no gaps or blanks. There are 27 templates for work (sick, casual, emergency, maternity and paternity leave, resignation, salary increase, work from home, apology), school, shops and services, landlords and neighbours, banks and offices, and everyday letters. Edit any word, then download a PDF, Word file or plain text. Nothing is uploaded.",
    "steps": [
      "Choose the letter you need, for example Sick leave application or Complaint: faulty product.",
      "Fill in the details. Leave out anything you do not know and the sentences adjust.",
      "Add your name and who the letter is to, then read the letter and change any words you like.",
      "Download a PDF, Word (.docx) or text file, copy it, or print it."
    ],
    "faq": [
      [
        "Which letters are included?",
        "Sick, casual, emergency, maternity and paternity leave; resignation; experience certificate and reference requests; salary increase; work from home; apology; school leave, fee concession and transfer certificate; product and service complaints; refund and cancellation; repair request, notice to vacate and noise complaint; bank account closure, change of address and card block; thank-you, invitation and recommendation letters."
      ],
      [
        "What if I leave a field empty?",
        "The letter is rewritten around it, so you never see blanks like [date] or [name]. A note above the letter tells you which details would make it complete."
      ],
      [
        "Does it work in my country?",
        "Yes. The wording is neutral and polite, dates follow your region (28 November 2026 or November 28, 2026) or the style you choose, and paper can be A4 or Letter. Rules for notice periods and leave differ by country, so check your contract or local law."
      ],
      [
        "Can I change the wording?",
        "Yes. Tap anywhere in the letter and type. Your edits are kept, even after a reload, until you press Undo my edits."
      ],
      [
        "Is my information private?",
        "Yes. Everything runs in your browser and is saved only on this device. Use Save draft to keep a copy as a file, and Start over to clear it."
      ],
      [
        "Is this written by AI?",
        "No. Each letter uses carefully written sentences that adjust to what you type, so it works offline and nothing is sent anywhere."
      ]
    ],
    "icon": "<path d=\"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z\"/><path d=\"M14 3v5h5M9 12h6M9 16h4\"/><path d=\"M8 8h2\"/>"
  },
  {
    "slug": "big-text-display",
    "cat": "Text tools",
    "name": "Big Text Display",
    "title": "Big Text Display - Full Screen Text, LED Sign & Name Sign",
    "desc": "Show a message huge on your phone: auto-fit full screen, scrolling LED sign, flashing, airport pickup name sign and quick phrases for deaf people. Offline.",
    "card": "Show huge text full screen, like an LED sign.",
    "intro": "Type a message and show it as big as your screen allows. The text fits itself to the screen, sideways or upright, and can scroll like an LED sign or flash slowly. Quick phrases such as “I am deaf” and “Please write it down” help you talk to people when hearing is hard, and the name sign mode makes an airport pickup sign in seconds. The screen stays on, it works offline and nothing is sent anywhere.",
    "steps": [
      "Type your message, or tap a quick phrase to show it straight away.",
      "Pick a colour theme and an effect: still, scrolling, flashing or blinking.",
      "Press Show full screen. Tap the screen for Close, Pause, Turn and Swap colours.",
      "For an airport pickup, choose Name sign, type the name, and show or print it."
    ],
    "faq": [
      [
        "How big does the text get?",
        "As big as fits. The tool measures your screen and picks the largest size that shows the whole message, wrapping long messages onto several lines."
      ],
      [
        "Can I show it sideways?",
        "Yes. Choose Sideways (landscape). If your phone is locked upright, the text turns itself. Press Turn in full screen to rotate it any way you like."
      ],
      [
        "Will the screen turn off?",
        "In most browsers it stays on while the text is shown, using the Wake Lock feature. If yours does not support it, a tip appears so you can change the auto-lock setting."
      ],
      [
        "Does it work without internet?",
        "Yes. After the page has loaded once it works offline. Nothing you type is sent anywhere, and saved phrases stay on this device."
      ],
      [
        "Is the flashing safe?",
        "Flashing is kept to at most 2 flashes a second, below the level known to trigger seizures. If flashing lights affect you or people nearby, use Still or Scrolling."
      ],
      [
        "Can I print a name sign?",
        "Yes. Press Print / save as PDF to get a large black-on-white sign that fills a sideways A4 or Letter page."
      ]
    ],
    "icon": "<rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/><path d=\"M7 15V9l3 6V9M14 9v6M14 9h3M14 12h2M14 15h3\"/>"
  },
  {
    "slug": "magnifier",
    "cat": "Image tools",
    "name": "Magnifier",
    "title": "Magnifier - Use Your Phone Camera as a Magnifying Glass",
    "desc": "Turn your phone into a magnifying glass: zoom, light, freeze and pinch to zoom, high contrast and invert colours, reading guide. Free, private.",
    "card": "Phone camera magnifying glass for small print.",
    "intro": "Read small print on medicine labels, menus, receipts and forms with your phone camera. Zoom in, turn on the light where your phone allows it, then freeze the picture and pinch to look closer. High-contrast, black-and-white, invert and yellow-on-black colours help with low vision, and a reading guide keeps your place. You can also open a photo to magnify it. Nothing is recorded or uploaded.",
    "steps": [
      "Press Start magnifier and allow the camera. The back camera is used.",
      "Hold the phone 10 to 20 cm above the page and zoom with the slider, + and −, or by pinching.",
      "Turn on the light if it is dark, and pick High contrast, Invert or Yellow on black if that is easier to read.",
      "Press Freeze to hold the picture still, pinch and drag to read it, and Save image to keep a copy."
    ],
    "faq": [
      [
        "Why is the zoom blurry?",
        "Some phones and browsers only allow digital zoom, which enlarges the picture without adding detail. Hold the phone a little closer, add light, and freeze the picture once it is in focus. Chrome on Android often uses the camera’s own sharper zoom."
      ],
      [
        "Why is there no light button?",
        "Only some browsers can switch on the phone’s flashlight, mainly Chrome on Android. On iPhone use the flashlight in Control Center while the magnifier is open."
      ],
      [
        "Is anything recorded?",
        "No. The camera picture stays in your browser. Only Save image creates a file, and it is saved on your device."
      ],
      [
        "It says camera access was blocked. What do I do?",
        "Allow the camera for this site: tap the icon next to the web address, or open your phone settings for the browser, then press Start magnifier again. You can still open a photo to magnify it."
      ],
      [
        "What do the colour options do?",
        "High contrast makes text darker and sharper, Black & white removes colour, Invert shows light text on a dark background, and Yellow on black is a popular low-vision style. Brightness lifts dark pictures."
      ],
      [
        "Does it work offline?",
        "Yes. Once the page has loaded it works without internet."
      ]
    ],
    "icon": "<circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><path d=\"M15.5 15.5 21 21M8 10.5h5M10.5 8v5\"/>"
  },
  {
    "slug": "color-identifier",
    "cat": "Image tools",
    "name": "Color Identifier",
    "title": "Color Identifier - Name Any Colour With Your Camera",
    "desc": "Point your camera or open a photo and hear the colour named in plain words, like dark navy blue, plus HEX and RGB. Made for colour-blind users.",
    "card": "Point your camera and hear the colour’s name.",
    "intro": "Find out what colour something is. Point your phone camera at it, or open a photo and tap a spot, and the tool names the colour in plain words such as “dark navy blue” or “light olive green”, gives its colour family, and shows HEX and RGB codes. It can say the name aloud, which helps colour-blind and low-vision users. Freeze the picture, keep a history of colours and export it. Nothing is uploaded.",
    "steps": [
      "Press Use camera and point the circle at the colour, or open a photo and tap a spot.",
      "Read the colour name, colour family and HEX and RGB codes.",
      "Press Say it to hear the name, or turn on Say the name when I tap or freeze.",
      "Press Freeze to hold the picture, and Save to history to keep colours."
    ],
    "faq": [
      [
        "How accurate is it?",
        "The maths is exact for the picture, but cameras change colours with the light. Use daylight or a white light, avoid shadows and coloured lamps, and hold the camera close. Use the Area setting to average out noise."
      ],
      [
        "Where do the colour names come from?",
        "From the xkcd colour survey, a large online survey in which many thousands of people named colours (public domain, with joke and rude names removed). The nearest name is found with CIEDE2000, a formula for how different two colours look to the eye."
      ],
      [
        "What is the colour family?",
        "A simple everyday name such as dark blue, light green, beige or grey, for when the detailed name is unusual."
      ],
      [
        "Can it help with colour blindness?",
        "Yes. Point at clothes, food, cables or charts to hear the colour named aloud. It is a helper, not a medical test."
      ],
      [
        "How is this different from Color Picker?",
        "Color Picker gives exact colour codes from images and palettes for design. Color Identifier uses the camera, names colours in plain words and speaks them."
      ],
      [
        "Is my camera picture saved?",
        "No. The picture stays in your browser. Only the colours you save are kept, on this device."
      ]
    ],
    "icon": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M12 3v3M12 18v3M3 12h3M18 12h3\"/>"
  },
  {
    "slug": "star-chart",
    "cat": "Generators",
    "name": "Star Chart for Kids",
    "title": "Star Chart for Kids - Reward and Chore Chart, Printable PDF",
    "desc": "Make a reward and chore chart for children: tasks with emoji, stars for each day, a reward goal with a celebration, weekly history and a colourful PDF.",
    "card": "Reward and chore chart with stars and a PDF.",
    "intro": "Help children build good habits with a fun star chart. Add each child, their jobs or habits with emoji icons, and a reward goal such as \"10 stars = trip to the park\". Tap a box to give a star and watch the progress bar fill up; when the goal is reached, the chart celebrates. A new week starts by itself and the old one is kept in the history. Print a colourful chart in one of nine themes, on A4 or Letter, portrait or landscape.",
    "steps": [
      "Type the child's name, the number of stars needed and the reward.",
      "Choose the tasks or habits (tap an idea or type your own) and the days they apply.",
      "Tap a box each time the task is done to give a star. Add more children with + Add a child.",
      "Download the PDF to print the chart, or keep using it on your phone."
    ],
    "faq": [
      [
        "Where are the stars saved?",
        "Only in this browser on this device. Nothing is uploaded. Use Back up (JSON) to keep a copy or move the charts to another phone or computer."
      ],
      [
        "What happens at the end of the week?",
        "On the first day of a new week the boxes empty by themselves and last week's stars, goal and reward go into Past weeks. You can choose which day the week starts, or start a new week early."
      ],
      [
        "Can I have charts for several children?",
        "Yes, up to 12 children, each with their own tasks, theme, stamp, goal and history."
      ],
      [
        "Can a task be only on some days?",
        "Yes. Tap the day buttons under a task to turn days on or off, for example swimming only on Tuesday and Friday."
      ],
      [
        "Can I print a blank chart?",
        "Yes. Choose \"Empty, to fill in by hand\" for stickers or a pen, or print it with this week's stars. You can print one child or every child, one page each."
      ],
      [
        "How many stars should the goal be?",
        "Start small so the first reward comes quickly, for example 5 to 10 stars a week for young children, then raise it slowly."
      ]
    ],
    "icon": "<path d=\"M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z\"/>"
  },
  {
    "slug": "report-card-maker",
    "cat": "Study tools",
    "name": "Report Card Maker",
    "title": "Report Card Maker - Whole Class PDF with Grades and Ranks",
    "desc": "Make student report cards for a whole class: paste marks from Excel, choose a grading scale, get totals, grades, GPA and rank, and one PDF page per student.",
    "card": "Report cards for a whole class as one PDF.",
    "intro": "Make clean, professional report cards for your class in minutes. Add your school name and logo, the term and the subjects, then type or paste the marks for every student from Excel, Google Sheets or a CSV file. Totals, percentages, grades, GPA and class position are worked out for you. Pick a grading scale (letters A to F, GPA 4.0 with plus and minus, 1 to 10, Distinction-Merit-Pass, or your own bands), write remarks with the help of templates, and download one PDF with a page for each student. Works for any country and school system, and student data never leaves your device.",
    "steps": [
      "Fill in the school, term and class details, and choose a grading scale.",
      "Add the subjects with their maximum marks.",
      "Type the marks, or paste the whole class from a spreadsheet.",
      "Add remarks, choose a template and download the PDF with one page per student."
    ],
    "faq": [
      [
        "How is the class position worked out?",
        "Students are ranked by their overall percentage. Only students with a mark in every subject are ranked, so enter the whole class first. Students with the same percentage share a place, shown with \"=\", and the next place is skipped."
      ],
      [
        "How is the GPA calculated?",
        "Each subject's grade gives the points shown in the grading scale. The points are averaged, weighted by each subject's credits (1 by default). The GPA appears when every band in the scale has points."
      ],
      [
        "Can I type grades instead of marks?",
        "Yes. Type a grade from your scale, such as B+ or Merit, and it is used for the GPA and shown on the report. Type AB for absent or EX for exempt. Grades and absences are left out of the total and percentage."
      ],
      [
        "How do I paste a whole class?",
        "In your spreadsheet, select the table including the header row (Name, ID, Present, one column per subject, Remark) and copy it. Paste it into the box under \"Add a whole class at once\". You can also open a CSV or Excel file, or download a blank class sheet to fill in."
      ],
      [
        "Is student data uploaded anywhere?",
        "No. Everything stays in this browser on this device, including the logo. Use Back up all classes to save a copy, and keep that file somewhere private."
      ],
      [
        "Can I change the grade boundaries?",
        "Yes. Edit the bands under Grading scale: the lowest percentage, the grade, the points and the meaning. Add or remove bands to match your school."
      ]
    ],
    "icon": "<path d=\"M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"/><path d=\"M14 3v6h6M8 13h5M8 17h3\"/><path d=\"M15.5 15.5l1.2 1.2 2.3-2.7\"/>"
  },
  {
    "slug": "seating-chart",
    "cat": "Study tools",
    "name": "Seating Chart Maker",
    "title": "Seating Chart Maker - Classroom and Event Seating Plans",
    "desc": "Make a classroom or event seating plan: rows, pairs, groups, U-shape or round tables. Drag names, shuffle with rules, lock seats and print a PDF.",
    "card": "Classroom and event seating plans with shuffle.",
    "intro": "Plan where everyone sits in a classroom, exam hall or event. Choose rows of desks, desks for two, groups, a U-shape or round tables, or move seats to match your own room. Paste your names, then drag them onto seats (it works with a finger on a phone too) or shuffle them with rules: keep two people apart, give some people a front seat, and mix people by a tag such as group or level. Lock seats you want to keep, save several charts, and print or download a PDF with the teacher's desk marked.",
    "steps": [
      "Choose a layout (rows, pairs, groups, U-shape or round tables) and press Make this layout.",
      "Paste the names, one per line, with an optional tag and the word \"front\".",
      "Add rules if you need them, then press Shuffle seats, or drag names onto seats.",
      "Lock seats you want to keep, then download the PDF or print it."
    ],
    "faq": [
      [
        "How do I move a name on a phone?",
        "Press on a name and drag it to a seat. You can also tap a name and then tap a seat. Dropping a name on a full seat swaps the two people."
      ],
      [
        "What does \"keep apart\" mean?",
        "The two people are not put next to each other, in front of or behind each other, or at the same table or group."
      ],
      [
        "What does a lock do?",
        "Tap a seat and press Lock. Shuffling leaves that seat and its person where they are. Locked seats have a double border and a padlock."
      ],
      [
        "Can I make my own room layout?",
        "Yes. Press \"Move seats and desk\" and drag seats, tables and the teacher's desk where they are in your room. Add or delete seats as you need."
      ],
      [
        "What if some rules cannot be met?",
        "The shuffle finds the best seating it can and lists any rule it could not meet, for example when more people need the front than there are front seats."
      ],
      [
        "Where are my charts saved?",
        "Only in this browser on this device, and you can keep up to 40 charts. Use Back up all charts to save a copy or move them to another device."
      ]
    ],
    "icon": "<rect x=\"3\" y=\"3\" width=\"18\" height=\"4\" rx=\"1\"/><rect x=\"4\" y=\"11\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"10\" y=\"11\" width=\"4\" height=\"4\" rx=\"1\"/><rect x=\"16\" y=\"11\" width=\"4\" height=\"4\" rx=\"1\"/><path d=\"M5 19h2M11 19h2M17 19h2\"/>"
  }
];
