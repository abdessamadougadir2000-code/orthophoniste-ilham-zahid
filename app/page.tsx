export default function Home() {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Orthophoniste Zahid Ilham - Agadir</title>
        </head>
    <body>
        </body>
    </html>
  `;

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}