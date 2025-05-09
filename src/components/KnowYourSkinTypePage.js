import React from 'react';
import './KnowYourSkinTypePage.css'; // You can style the page with this file

function KnowYourSkinTypePage() {
  return (
    <div className="skin-type-container">
      <h1>How to Know Your Skin Type</h1>
      <p>
        Knowing your skin type is essential for choosing the right skincare products and routine. Here's how you can determine your skin type:
      </p>

      <h2>1. The Bare-Faced Test (For Normal Skin, Oily Skin, Dry Skin, Combination Skin)</h2>
      <p>This is a simple test you can do at home.</p>

      <h3>Step-by-Step Process:</h3>
      <p><strong>Start with Clean Skin:</strong></p>
      <ul>
        <li>Wash your face with a mild cleanser and pat your skin dry with a towel.</li>
        <li>Don’t apply any moisturizers, toners, or serums after washing. Leave your skin bare for an hour or so.</li>
      </ul>

      <p><strong>Observe Your Skin:</strong></p>
      <p>After an hour, pay attention to how your skin feels. Here’s what to look for:</p>
      <ul>
        <li><strong>Oily Skin:</strong> Your face may feel greasy or shiny, particularly in the T-zone (forehead, nose, chin). Pores may appear larger. You may notice an increased tendency for breakouts.</li>
        <li><strong>Dry Skin:</strong> Your skin may feel tight, rough, or flaky. It can feel dry or look dull. Fine lines may be more visible, especially around the eyes and mouth.</li>
        <li><strong>Normal Skin:</strong> Your skin should feel comfortable and balanced. Not too dry or oily. Pores should be small and barely noticeable. No significant dry patches or excess shine.</li>
        <li><strong>Combination Skin:</strong> A mix of dry and oily areas. Often, you’ll see oiliness in the T-zone (forehead, nose, chin), but your cheeks, eyes, and around your mouth may feel dry or tight.</li>
      </ul>

      <h3>Test With a Tissue (For Oily Skin):</h3>
      <p>After an hour or so, press a clean tissue onto your forehead, nose, and chin. If the tissue picks up a lot of oil, you likely have oily skin. If it picks up little to no oil, your skin is either dry or normal.</p>

      <h2>2. The 5-Minute Test (For Sensitive Skin)</h2>
      <p>Sensitive skin can be more challenging to determine, but if your skin reacts easily to skincare products or environmental factors (like sun exposure, heat, or wind), you may have sensitive skin. Here's how to test for it:</p>
      <ul>
        <li><strong>Apply a Small Amount of Product:</strong> After washing your face, apply a moisturizer or toner that’s free of fragrances and alcohols.</li>
        <li><strong>Wait for about 5-10 minutes:</strong></li>
        <li><strong>Check for Irritation:</strong> If your skin becomes red, itchy, or irritated, you may have sensitive skin. Some people with sensitive skin might experience stinging, burning, or increased dryness.</li>
      </ul>

      <h2>3. The 30-Minute Test (For Dehydrated Skin)</h2>
      <p>Dehydrated skin isn’t a skin type but a condition where your skin lacks water. This can happen even if you have oily skin. Here’s how you can check for dehydration:</p>
      <ul>
        <li><strong>Wait After Cleansing:</strong> Wash your face with a gentle cleanser.</li>
        <li><strong>Let your skin rest for 30 minutes:</strong> Then check for signs of dehydration.</li>
        <li><strong>Observe the Signs:</strong> If your skin feels tight, looks dull, or has visible dry patches even after moisturizing, you might have dehydrated skin. Dehydrated skin may feel oily in some areas but still have dry patches elsewhere.</li>
      </ul>

      <h2>4. Ask a Dermatologist or Skin Expert</h2>
      <p>If you’re still unsure about your skin type, or if you have specific skin concerns (like acne, rosacea, etc.), it’s a good idea to consult a dermatologist or skincare professional who can assess your skin and recommend a routine suited for your needs.</p>
    </div>
  );
}

export default KnowYourSkinTypePage;
