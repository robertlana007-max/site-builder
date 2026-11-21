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
      desc: 'Pick ready-made broad, medium and niche hashtags for 75+ topics, add your own, keep within the 30 limit and copy them all in one tap. Free.',
      card: 'Hashtag sets for 75+ topics, copy in one tap.',
      intro: 'Choose a topic and tap hashtags, or let the tool mix a balanced set of broad, medium and niche tags. Add your own, stay within Instagram\'s 30-hashtag limit and copy them all at once.',
      steps: ['Search for a topic, such as travel, food or football, and tap it.', 'Tap hashtags to add them, or click Mix to pick a balanced set.', 'Add your own brand or event hashtags if you like.', 'Click Copy all and paste into your caption.'],
      faq: [
        ['How many hashtags can I use on Instagram?', 'Up to 30 on a post or reel. The counter stops you at 30. Many creators get good results with 5 to 15 relevant tags.'],
        ['What are broad, medium and niche hashtags?', 'Broad tags are very common and move fast, niche tags are specific with smaller audiences, and medium tags sit in between. A mix gives reach and a better chance to stay visible.'],
        ['Does this show trending or live hashtag counts?', 'No. The sets are hand-picked starting points built into the page. The tool does not connect to Instagram or TikTok, so check tags in the app before you rely on them.'],
        ['Can I add hashtags in other languages, like Arabic, Hindi, Spanish or Chinese?', 'Yes. Letters from any language work. Spaces and symbols are removed because they cannot be part of a hashtag.'],
        ['Can I use these hashtags on TikTok?', 'Yes. Copy a smaller set of 3 to 6 relevant tags for TikTok, YouTube Shorts or Pinterest.']
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
        ['What is the Instagram caption limit?', '2,200 characters, up to 30 hashtags and 20 @mentions. About the first 125 characters show before "more".'],
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
        ['Which countries are included?', 'The United States, United Kingdom, EU and Schengen countries, Canada, Australia, India (passport and visa), China, Japan, Pakistan, Saudi Arabia, the United Arab Emirates, Brazil and Nigeria, plus a custom size for anything else.'],
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
        ['Can I write my CV in another language?', 'Yes. Headings can be renamed and the fonts cover Latin, Greek and Cyrillic letters. For other scripts, such as Arabic, Chinese or Hindi, use Print and choose Save as PDF so your device fonts are used.']
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
        ['How long can an Instagram caption be?', 'Up to 2,200 characters and 30 hashtags. Only the first line or two show before "more", so start strong.'],
        ['How long can an Instagram bio be?', '150 characters. Each bio idea shows its length, and long ones are marked.'],
        ['How many hashtags should I use?', 'Instagram allows up to 30, but a handful of specific, relevant hashtags usually works better than many general ones.'],
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
  }
];
