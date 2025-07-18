
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-muted border-t-emerald-600 dark:border-t-emerald-400 rounded-full animate-spin mx-auto mb-8"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-blue-400 rounded-full animate-ping mx-auto"></div>
        </div>
        <div className="text-2xl font-bold text-foreground mb-2 animate-pulse">Sneha Verma</div>
        <div className="text-sm text-muted-foreground animate-pulse">Loading Portfolio...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
