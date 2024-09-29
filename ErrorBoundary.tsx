import { Component, ErrorInfo, ReactNode } from "react";
import "./src/styles/error-page.css";

/**
 * Обработчик ошибок приложения.
 * Vanilla CSS используется, так как tailwind при выкинутой ошибке недоступен
 */

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={"error-page-container"}>
          <h1 className={"error-page-title"}>Unexpected application error!</h1>
          <p>
            Contact me:{" "}
            <a
              target={"_blank"}
              href={"https://t.me/googleadsusd"}
              className={"error-page-link"}
            >
              @googleadsusd
            </a>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
