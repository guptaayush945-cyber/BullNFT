import { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import "../styles/team-tree.css";

export default function TreeView() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Listen to window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get responsive tree settings
  const getTreeConfig = () => {
    if (screenWidth <= 480) {
      // Mobile: Small nodes, adequate spacing
      return {
        nodeX: 120,
        nodeY: 90,
        siblingGap: 2.5,
        nonSiblingGap: 2.5,
        translateX: 100,
        translateY: 30,
        containerHeight: "500px"
      };
    } else if (screenWidth <= 768) {
      // Tablet: Medium nodes
      return {
        nodeX: 150,
        nodeY: 110,
        siblingGap: 2.0,
        nonSiblingGap: 2.2,
        translateX: 200,
        translateY: 40,
        containerHeight: "450px"
      };
    } else {
      // Desktop: Full size
      return {
        nodeX: 220,
        nodeY: 160,
        siblingGap: 1.6,
        nonSiblingGap: 1.8,
        translateX: 350,
        translateY: 60,
        containerHeight: "750px"
      };
    }
  };

  const config = getTreeConfig();

  const treeData = {
    name: "CHfs...buRZ",
    attributes: {
      level: "Level 02",
      status: "Inactive",
      totalTeam: 2
    },
    children: [
      {
        name: "H1AL...ESC1",
        attributes: {
          level: "Level 01",
          status: "Inactive"
        }
      },
      {
        name: "SrBF...QWQR",
        attributes: {
          level: "Level 01",
          status: "Inactive"
        }
      }
    ]
  };

  const renderNode = ({ nodeDatum }: { nodeDatum: any }) => {
    const isRoot = nodeDatum.attributes?.totalTeam !== undefined;
    
    // Responsive scaling
    const isMobile = screenWidth <= 480;
    const isTablet = screenWidth <= 768;
    
    let badgeFontSize = "12px";
    let nodeFontSize = "12px";
    let nodePadding = "8px";
    let foreignObjectWidth = 150;
    let foreignObjectHeight = isRoot ? 140 : 120;
    let badgeX = -50;
    let badgeWidth = 100;
    
    if (isMobile) {
      badgeFontSize = "10px";
      nodeFontSize = "10px";
      nodePadding = "6px";
      foreignObjectWidth = 120;
      foreignObjectHeight = isRoot ? 110 : 95;
      badgeX = -40;
      badgeWidth = 80;
    } else if (isTablet) {
      badgeFontSize = "11px";
      nodeFontSize = "11px";
      nodePadding = "7px";
      foreignObjectWidth = 135;
      foreignObjectHeight = isRoot ? 130 : 110;
    }
    
    return (
      <g>
        {isRoot && (
          <>
            {/* Silver Badge */}
            <foreignObject x={badgeX} y={isMobile ? "-75" : "-90"} width={badgeWidth} height="28">
              <div style={{
                background: "rgba(255, 165, 0, 0.3)",
                border: "2px solid rgba(255, 165, 0, 0.6)",
                borderRadius: "12px",
                padding: "3px 8px",
                textAlign: "center",
                color: "#FFD700",
                fontSize: badgeFontSize,
                fontWeight: "600",
                boxShadow: "0 0 8px rgba(255, 165, 0, 0.3)"
              }}>
                Silver
              </div>
            </foreignObject>
            
            {/* YOU Label */}
            <foreignObject x={badgeX} y={isMobile ? "-45" : "-55"} width={badgeWidth} height="24">
              <div style={{
                background: "rgba(255, 215, 0, 0.5)",
                border: "2px solid rgba(255, 215, 0, 0.8)",
                borderRadius: "10px",
                padding: "3px 8px",
                textAlign: "center",
                color: "#fff",
                fontSize: badgeFontSize,
                fontWeight: "700",
                boxShadow: "0 0 8px rgba(255, 215, 0, 0.4)"
              }}>
                YOU
              </div>
            </foreignObject>
          </>
        )}
        
        <foreignObject x={-(foreignObjectWidth / 2)} y={isRoot ? "-15" : "-30"} width={foreignObjectWidth} height={foreignObjectHeight}>
          <div style={{
            background: "#0f0a05",
            border: isRoot ? "3px solid rgba(255, 165, 0, 0.9)" : "2px solid #FF9500",
            borderRadius: "10px",
            padding: nodePadding,
            textAlign: "center",
            color: "white",
            fontSize: nodeFontSize,
            boxShadow: isRoot ? "0 0 15px rgba(255, 165, 0, 0.4)" : "0 0 12px rgba(255, 165, 0, 0.3)"
          }}>

            <div style={{fontWeight:"bold", marginBottom:"3px", fontSize: isMobile ? "9px" : nodeFontSize}}>
              {nodeDatum.name}
            </div>

            {nodeDatum.attributes?.level && (
              <div style={{
                background:"#0a3",
                padding:"2px 4px",
                borderRadius:"4px",
                marginBottom:"2px",
                fontSize: isMobile ? "8px" : "10px"
              }}>
                {nodeDatum.attributes.level}
              </div>
            )}

            {nodeDatum.attributes?.status && (
              <div style={{
                background:"#a33",
                padding:"2px 4px",
                borderRadius:"4px",
                marginBottom:"2px",
                fontSize: isMobile ? "8px" : "10px"
              }}>
                {nodeDatum.attributes.status}
              </div>
            )}

            {nodeDatum.attributes?.totalTeam && (
              <div style={{fontSize: isMobile ? "9px" : nodeFontSize}}>
                Total Team: {nodeDatum.attributes.totalTeam}
              </div>
            )}

          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <>
      <Header />
      <div className="team-tree-container">
        <main className="team-tree-content">
          {/* Header Section */}
          <div className="team-tree-header-section">
            <h1 className="team-tree-header-title">Tree View</h1>
            <p className="team-tree-header-subtitle">Hierarchical tree structure</p>
          </div>

          {/* Level Circles */}
          <div className="level-circles-container">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((level) => (
              <div key={level} className="level-circle">
                <span className="level-text">L{level}</span>
              </div>
            ))}
          </div>

          {/* Tree Visualization */}
          <div className="d3-tree-container" style={{height: config.containerHeight}}>
            <Tree
              data={treeData}
              orientation="vertical"
              pathFunc="diagonal"
              translate={{ x: config.translateX, y: config.translateY }}
              nodeSize={{ x: config.nodeX, y: config.nodeY }}
              separation={{ siblings: config.siblingGap, nonSiblings: config.nonSiblingGap }}
              renderCustomNodeElement={renderNode}
              linkStroke="#FF9500"
              linkStrokeWidth={2}
              zoomable={false}
              enableLegacyTransitions={false}
            />
          </div>
        </main>
      </div>
      <BottomNavigation />
    </>
  );
}