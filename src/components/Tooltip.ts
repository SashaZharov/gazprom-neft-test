export const Tooltip = (params: any) => {
  const data = params[0] && params[0].data;
  if (!data) return '';

  const title = data[0].indicator;

  const tooltipHTML = `
      <div><strong>${data.name}</strong></div>
      <div style="display: flex; align-items: center; margin-top: 8px; font-family: 'Inter', sans-serif;">
        <div style="width: 10px; height: 10px; background-color: orange; margin-right: 5px;  border-radius: 50%;"></div>
        <div>${title}</div>
        <strong style="margin-left: 10px; ">${data.value} ₽</strong>
      </div>
    `;

  return tooltipHTML;
};
