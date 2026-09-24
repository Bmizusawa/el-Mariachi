from html.parser import HTMLParser
from pathlib import Path
import re

class ReferenceParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.skip = 0
        self.text = []
        self.links = set()

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.skip += 1
        if tag == 'a':
            href = dict(attrs).get('href', '')
            if any(site in href for site in ('doordash.com', 'elmariachi', 'maps.google')):
                self.links.add(href)

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip = max(0, self.skip - 1)

    def handle_data(self, data):
        if not self.skip and data.strip():
            self.text.append(data.strip())

parser = ReferenceParser()
parser.feed(Path('el mariachi - Google Search.html').read_text(encoding='utf-8'))
text = '\n'.join(parser.text)
Path('.review/google-reference.txt').write_text(text, encoding='utf-8')
for match in re.finditer(r'1675|361-5121|DoorDash|Prattville|Closed|Hours', text):
    print(text[max(0, match.start() - 80):match.end() + 200])
for link in sorted(parser.links):
    print(link)
