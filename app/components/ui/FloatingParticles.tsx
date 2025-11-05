// app/components/ui/FloatingParticles.tsx
                        'use client'
                        import { motion } from 'framer-motion'
                        import { useMemo } from 'react'

                        type Particle = {
                          id: number
                          width: number
                          height: number
                          left: string
                          top: string
                          xOffset: number
                          duration: number
                          delay: number
                        }

                        export function FloatingParticles() {
                          const particles = useMemo<Particle[]>(
                            () =>
                              Array.from({ length: 15 }, (_, i) => {
                                const width = Math.random() * 100 + 50
                                const height = Math.random() * 100 + 50
                                return {
                                  id: i,
                                  width,
                                  height,
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  xOffset: Math.random() * 20 - 10,
                                  duration: Math.random() * 10 + 10,
                                  delay: Math.random() * 5,
                                }
                              }),
                            []
                          )

                          return (
                            <div className="absolute inset-0 overflow-hidden">
                              {particles.map((p) => (
                                <motion.div
                                  key={p.id}
                                  className="absolute rounded-full bg-gradient-to-r from-secondary/20 to-accent/20"
                                  style={{
                                    width: p.width,
                                    height: p.height,
                                    left: p.left,
                                    top: p.top,
                                  }}
                                  animate={{
                                    y: [0, -30, 0],
                                    x: [0, p.xOffset, 0],
                                    rotate: [0, 180, 360],
                                  }}
                                  transition={{
                                    duration: p.duration,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: p.delay,
                                  }}
                                />
                              ))}
                            </div>
                          )
                        }