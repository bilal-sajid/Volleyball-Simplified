import React from 'react';
import Navbar from '../components/Navbar';

const BuildingGameSensePage = () => {
  const sections = [
    
    // Serving Tips
    {
      title: "Tips for Serving",
      points: [
        { 
          point: "Types of Serves", 
          description: "Experiment with float serves for unpredictable movement and jump serves for power and speed." 
        },
        { 
          point: "Targeting", 
          description: "Aim for challenging zones, such as Zone 1 to disrupt the setter or the seam between Zones 5 and 6 to create confusion." 
        },
        { 
          point: "Consistency", 
          description: "Focus on accuracy over power. A consistent serve keeps the ball in play and pressures the opponent to make a mistake." 
        },
        { 
          point: "Confidence", 
          description: "Visualize your serve and take a deep breath before hitting to stay calm and focused under pressure." 
        },
      ],
    },

    // Recieving Tips
    {
      title: "Tips for Receiving Serves",
      points: [
        { 
          point: "Positioning", 
          description: "Stay light on your feet with a low, balanced stance to move quickly in any direction." 
        },
        { 
          point: "Reading the Server", 
          description: "Watch the server’s toss and arm motion. A high toss often signals a jump serve, while a flatter toss indicates a float serve." 
        },
        { 
          point: "Platform Control", 
          description: "Keep your arms steady and aim to pass the ball high and to the setter’s position for an easy transition to offense." 
        },
        { 
          point: "Communication", 
          description: "Always call 'Mine!' or 'Yours!' loudly and clearly to avoid confusion with teammates." 
        },
      ],
    },

    {
      title: "Tips for Receiving Spikes",
      points: [
        { 
          point: "Anticipation", 
          description: "Observe the hitter’s approach and arm swing to predict the trajectory and power of the spike." 
        },
        { 
          point: "Positioning", 
          description: "Stand behind the blockers, ready to adjust to deflected spikes. Stay low and balanced for quick reactions." 
        },
        { 
          point: "Soft Hands", 
          description: "Relax your arms to absorb the ball’s impact and direct it upward toward the setter’s position." 
        },
        { 
          point: "Team Communication", 
          description: "Call out plays like 'Tip!' or 'Roll!' to alert teammates about off-speed shots or unexpected attacks." 
        },
      ],
    },

    {
      title: "Tips for Defensive Play",
      points: [
        { 
          point: "Reading the Offense", 
          description: "Pay attention to the setter’s hands and the hitter’s approach to predict the type of attack coming." 
        },
        { 
          point: "Positioning", 
          description: "Defenders should stay low and balanced, ready to move quickly. Spread out to cover gaps in the court." 
        },
        { 
          point: "Communication", 
          description: "Call out plays like 'Tip!' or 'Cross!' to alert teammates about the type of attack or where to block." 
        },
        { 
          point: "Reaction and Recovery", 
          description: "Be prepared to chase down balls that deflect off blocks or land unexpectedly. Never give up on a play." 
        },
      ],
    },

    // Attacking Tips
    {
      title: "Tips for Spiking",
      points: [
        { 
          point: "Approach and Jump", 
          description: "Use a three-step or four-step approach to gain momentum and time your jump with the set for maximum reach." 
        },
        { 
          point: "Arm Swing", 
          description: "Fully extend your hitting arm and snap your wrist on contact to create topspin, making the ball drop quickly." 
        },
        { 
          point: "Aiming", 
          description: "Look for gaps in the defense, such as tipping over the block or hitting sharp angles into open spaces." 
        },
        { 
          point: "Adapting to Blocks", 
          description: "Tool the block by aiming for the edges to create deflections, or adjust your shot to avoid the block entirely." 
        },
      ],
    },

    // Setting Tips
    {
      title: "Tips for Setting",
      points: [
        { 
          point: "Hand Position", 
          description: "Form a triangle shape with your thumbs and index fingers, keeping your hands relaxed and ready to push the ball upward." 
        },
        { 
          point: "Body Positioning", 
          description: "Position yourself square to your target with your knees bent and your weight slightly forward for balance and control." 
        },
        { 
          point: "Accuracy", 
          description: "Focus on setting the ball high and to the ideal spot for your hitter, such as near the antennas for outside hitters." 
        },
        { 
          point: "Soft Touch", 
          description: "Use your fingertips to push the ball rather than your palms, ensuring a clean, controlled contact." 
        },
        { 
          point: "Communication", 
          description: "Call out plays or signals to coordinate with your hitters, letting them know where the ball will be set." 
        },
        { 
          point: "Reading the Defense", 
          description: "Watch the blockers and aim to set the ball away from strong defensive positions, creating better opportunities for your hitters." 
        },
      ],
    },
    
    // Blocking Tips
    {
      title: "Tips for Blocking",
      points: [
        { 
          point: "Positioning", 
          description: "Line up your body with the hitter’s shoulder to cover their angle of attack. Stay close to the net without touching it." 
        },
        { 
          point: "Timing", 
          description: "Jump as the hitter begins their swing. Avoid jumping too early or late to maximize your reach and effectiveness." 
        },
        { 
          point: "Hand Placement", 
          description: "Spread your fingers and angle them slightly toward the opponent's court to direct deflections downward." 
        },
        { 
          point: "Communication", 
          description: "Work with your teammates to decide who will block the line or cross-court shots, ensuring gaps are covered." 
        },
      ],
    },
  ];

    const commonMistakes = [
      { 
        mistake: "Ignoring Court Awareness", 
        description: "Failing to pay attention to the court and teammates can lead to positioning mistakes and missed opportunities. Always stay alert and aware of your surroundings." 
      },
      { 
        mistake: "Lack of Communication", 
        description: "Not calling 'Mine!' or 'Yours!' often leads to confusion and missed balls. Effective communication is crucial for smooth gameplay." 
      },
      { 
        mistake: "Improper Footwork", 
        description: "Being flat-footed or taking incorrect steps can limit movement. Stay light on your feet and practice proper footwork to improve agility." 
      },
      { 
        mistake: "Overhitting the Ball", 
        description: "Trying to hit the ball too hard can lead to errors. Focus on technique and control rather than just power." 
      },
      { 
        mistake: "Not Following Rotations", 
        description: "Failing to rotate correctly disrupts team structure and can result in lost points. Always be aware of your rotation position and movement." 
      },
      { 
        mistake: "Weak Passing Form", 
        description: "Passing with bent elbows or improper arm position results in inaccurate passes. Keep a strong, steady platform for effective ball control." 
      },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-orange-400">
            Building Game Sense
          </h1>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Develop your volleyball instincts and enhance your understanding of the game with these beginner-friendly tips.
          </p>
        </header>

        {/* Tips Sections */}
        <section>
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-bold text-orange-400 text-center mb-4">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-orange-400 transition-all duration-200"
                    >
                      <h3 className="text-lg font-bold text-orange-300 mb-2 text-center">
                        {point.point}
                      </h3>
                      <p className="text-sm text-gray-300">{point.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Common Mistakes Section */}
        <section className="mt-16">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 border-l-8 border-orange-500">
            <h2 className="text-3xl font-extrabold text-orange-400 text-center mb-6">
              ⚠️ Common Mistakes to Avoid
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-8">
              Watch out for these frequent mistakes that beginners often make. Avoiding them will help you improve your game and confidence on the court.
            </p>
            
            <ul className="space-y-6 max-w-3xl mx-auto">
              {commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex items-start bg-gray-700 p-4 rounded-lg shadow-md">
                  <span className="text-orange-400 text-xl font-bold mr-4">❌</span>
                  <div>
                    <h3 className="text-lg font-bold text-orange-300">{mistake.mistake}</h3>
                    <p className="text-sm text-gray-300">{mistake.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default BuildingGameSensePage;
