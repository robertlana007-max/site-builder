# usage: python3 sheet.py out.png cols tilew shot1.png shot2.png ...
import sys
from PIL import Image, ImageDraw
out, cols, tw = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
files = sys.argv[4:]
ims = []
for f in files:
    im = Image.open(f).convert('RGB')
    h = int(im.height * tw / im.width)
    ims.append((f.split('/')[-1].rsplit('.', 1)[0], im.resize((tw, h), Image.LANCZOS)))
th = max(i.height for _, i in ims) + 22
rows = (len(ims) + cols - 1) // cols
sheet = Image.new('RGB', (cols * (tw + 10) + 10, rows * (th + 10) + 10), (40, 40, 48))
d = ImageDraw.Draw(sheet)
for k, (name, im) in enumerate(ims):
    x, y = 10 + (k % cols) * (tw + 10), 10 + (k // cols) * (th + 10)
    d.text((x + 2, y + 4), name, fill=(235, 235, 240))
    sheet.paste(im, (x, y + 22))
sheet.save(out)
print(out, sheet.size)
