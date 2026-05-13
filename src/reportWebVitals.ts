type ReportHandler = (metric: any) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals")
      .then((webVitals: any) => {
        // web-vitals 5.x exports named metrics or functions
        Object.entries(webVitals).forEach(([key, value]: [string, any]) => {
          if (typeof value === "function") {
            try {
              value(onPerfEntry);
            } catch (e) {
              // Silently ignore if metric is not available
            }
          }
        });
      })
      .catch(() => {
        // Silently ignore if web-vitals fails to import
      });
  }
};

export default reportWebVitals;
