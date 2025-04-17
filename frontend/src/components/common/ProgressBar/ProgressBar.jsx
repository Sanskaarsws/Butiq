const ProgressBar = ({ steps, activeStep }) => {
  return (
    <div className="w-full overflow-hidden">
      <div style={styles.container}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepContainer}>
            {/* Circle */}
            <div
              style={{
                ...styles.circle,
                backgroundColor: index <= activeStep ? "black" : "white",
                borderColor: "black",
              }}
            />
            {/* Step Label */}
            <span style={styles.label}>{step}</span>

            {/* Line (except last step) */}
            {index < steps.length - 1 && (
              <div
                style={{
                  ...styles.line,
                  backgroundColor: index < activeStep ? "black" : "lightgray",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "auto",
    position: "relative",
    padding: "20px 0",
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    border: "2px solid black",
    zIndex: 2,
  },
  label: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  line: {
    position: "absolute",
    top: 5,
    left: "50%",
    width: "100%",
    height: 1,
    transform: "translateX(5px)",
  },
};

export default ProgressBar;
