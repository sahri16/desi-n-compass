const WHATSAPP_NUMBER = "923074244584";

export const orderOnWhatsApp = (item, categoryName) => {
  const message = `DESI N COMPASS — Order Request

Dish: ${item.name}
Category: ${categoryName}
Price: ${item.price}
Tag: ${item.tag}

Description:
${item.desc}

---
Please confirm my order and table reservation.
Thank you!`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};