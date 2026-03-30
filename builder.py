import os

def build():
    with open('styles.css', 'r') as f:
        css = f.read()
    with open('body.html', 'r') as f:
        html = f.read()
    with open('app.js', 'r') as f:
        js = f.read()

    template = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toy Kingdom \u2014 The Amazing Toy Store</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
{css}
    </style>
</head>
{html}
<script>
{js}
</script>
</html>
"""
    with open('index.html', 'w') as f:
        f.write(template)

if __name__ == '__main__':
    build()
