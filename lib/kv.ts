// KV wrapper with fallback for local development
import { Redis } from '@upstash/redis';

// In-memory storage for development
const memoryStore = new Map<string, any>();
const memoryLists = new Map<string, any[]>();

// Check if we're in development and KV vars are missing
const isDev = process.env.NODE_ENV === 'development';
const hasKvVars = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

// Initialize Upstash Redis client
let redis: Redis | null = null;
if (hasKvVars) {
  redis = new Redis({
    url: process.env.KV_REST_API_URL!,
    token: process.env.KV_REST_API_TOKEN!,
  });
}

export const kv = {
  async get(key: string) {
    if (!redis || !hasKvVars) {
      return memoryStore.get(key) || null;
    }
    return await redis.get(key);
  },

  async set(key: string, value: any) {
    if (!redis || !hasKvVars) {
      memoryStore.set(key, value);
      return 'OK';
    }
    return await redis.set(key, value);
  },

  async hincrby(key: string, field: string, increment: number) {
    if (!redis || !hasKvVars) {
      const existing = memoryStore.get(key) || {};
      existing[field] = (existing[field] || 0) + increment;
      memoryStore.set(key, existing);
      return existing[field];
    }
    return await redis.hincrby(key, field, increment);
  },

  async lpush(key: string, value: any) {
    if (!redis || !hasKvVars) {
      const list = memoryLists.get(key) || [];
      list.unshift(value);
      memoryLists.set(key, list);
      return list.length;
    }
    return await redis.lpush(key, value);
  },

  async lrange(key: string, start: number, end: number) {
    if (!redis || !hasKvVars) {
      const list = memoryLists.get(key) || [];
      if (end === -1) return list.slice(start);
      return list.slice(start, end + 1);
    }
    return await redis.lrange(key, start, end);
  },

  async expire(key: string, seconds: number) {
    if (!redis || !hasKvVars) {
      // For in-memory, we'll just ignore expiration in dev
      return 1;
    }
    return await redis.expire(key, seconds);
  }
}; 